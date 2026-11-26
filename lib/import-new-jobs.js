import { callWorker } from './worker-api.js';

function normalized(value) {
    return String(value || '').normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/\W+/g, ' ').trim();
}

function identity(job) {
    const url = new URL(job.url);
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) throw new Error('URL no válida');
    url.hash = '';
    for (const key of [...url.searchParams.keys()]) {
        if (/^(utm_|trk|trackingId|refId)/i.test(key)) url.searchParams.delete(key);
    }
    url.searchParams.sort();
    const portal = url.hostname.split('.').slice(-2).join('.');
    const patterns = {
        'linkedin.com': /\/jobs\/view\/(?:[^/]*-)?(\d+)\/?$/i,
        'infojobs.net': /\/of-(i[\da-f]+)\/?$/i,
        'tecnoempleo.com': /\/rf-([\da-f]+)\/?$/i
    };
    const vacancy = patterns[portal]?.exec(url.pathname)?.[1];
    return [job.sourceId && 'id:' + job.sourceId, vacancy ? portal + ':' + vacancy : url.href.replace(/\/$/, ''),
        job.company && job.title && JSON.stringify([normalized(job.company), normalized(job.title)])].filter(Boolean);
}

export async function importNewJobs(body, response) {
    if (!Array.isArray(body?.jobs) || body.jobs.length > 100 || !Number.isInteger(body.checkedEmails) ||
        body.checkedEmails < 0 || typeof body.source !== 'string' || !body.source.trim()) return response.status(400).end();
    const required = ['sourceId', 'sourceEmailId', 'source', 'title', 'company', 'location', 'workMode', 'url', 'summary', 'recommendedCv'];
    const groups = ['technologies', 'matchReasons', 'gaps'];
    const entries = [];
    try {
        for (const job of body.jobs) {
            if (required.some(key => typeof job?.[key] !== 'string' || !job[key].trim()) ||
                groups.some(key => !Array.isArray(job[key]) || job[key].some(value => typeof value !== 'string')) ||
                !Number.isInteger(job.fitScore) || job.fitScore < 0 || job.fitScore > 100 ||
                !['low', 'medium', 'high'].includes(job.priority) || !Number.isFinite(Date.parse(job.receivedAt)) ||
                job.status !== 'pending') return response.status(400).end();
            entries.push({ job, keys: identity(job) });
        }
    } catch { return response.status(400).end(); }

    const current = await callWorker('/jobs');
    if (!current.response.ok || !Array.isArray(current.payload?.jobs)) return response.status(502).end();
    const seen = new Set(current.payload.jobs.flatMap(identity));
    const jobs = [];
    for (const { job, keys } of entries) {
        if (keys.some(key => seen.has(key))) continue;
        keys.forEach(key => seen.add(key));
        jobs.push(job);
    }
    if (jobs.length) {
        if (!process.env.INGESTION_TOKEN) return response.status(503).end();
        const result = await callWorker('/jobs/import', {
            method: 'POST', token: process.env.INGESTION_TOKEN,
            body: { source: body.source, checkedEmails: body.checkedEmails, jobs }
        });
        if (!result.response.ok || !result.payload?.ok || result.payload.upserted !== jobs.length) return response.status(502).end();
    }
    return response.status(200).json({ saved: jobs.map(({ sourceId, title }) => ({ sourceId, title })), skipped: body.jobs.length - jobs.length });
}
