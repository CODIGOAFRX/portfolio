const JSON_HEADERS = {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
};

function json(payload, status = 200) {
    return new Response(JSON.stringify(payload), { status, headers: JSON_HEADERS });
}

function constantTimeEqual(left, right) {
    const a = String(left || '');
    const b = String(right || '');
    let mismatch = a.length ^ b.length;
    const length = Math.max(a.length, b.length);
    for (let index = 0; index < length; index += 1) {
        mismatch |= (a.charCodeAt(index % Math.max(a.length, 1)) || 0) ^ (b.charCodeAt(index % Math.max(b.length, 1)) || 0);
    }
    return mismatch === 0;
}

function bearer(request) {
    const authorization = request.headers.get('Authorization') || '';
    return authorization.startsWith('Bearer ') ? authorization.slice(7) : '';
}

function authenticated(request, expectedToken) {
    return Boolean(expectedToken) && constantTimeEqual(bearer(request), expectedToken);
}

function text(value, max = 4000) {
    if (value === undefined || value === null) return null;
    return String(value).trim().slice(0, max) || null;
}

function stringArray(value, maxItems = 20) {
    if (!Array.isArray(value)) return [];
    return value.slice(0, maxItems).map(item => text(item, 300)).filter(Boolean);
}

function normalizeJob(job) {
    const sourceId = text(job?.sourceId, 500);
    const title = text(job?.title, 500);
    const source = text(job?.source, 100);
    if (!sourceId || !title || !source) return null;

    const fitScore = Math.max(0, Math.min(100, Number(job.fitScore) || 0));
    const status = ['pending', 'applied', 'dismissed'].includes(job.status) ? job.status : 'pending';
    const priority = ['high', 'medium', 'low', 'dismissed'].includes(job.priority) ? job.priority : 'low';
    const now = new Date().toISOString();

    return {
        sourceId,
        sourceEmailId: text(job.sourceEmailId, 500),
        source,
        title,
        company: text(job.company, 500),
        location: text(job.location, 500),
        workMode: text(job.workMode, 100),
        url: text(job.url, 2000),
        summary: text(job.summary, 6000),
        technologies: JSON.stringify(stringArray(job.technologies)),
        matchReasons: JSON.stringify(stringArray(job.matchReasons)),
        gaps: JSON.stringify(stringArray(job.gaps)),
        fitScore,
        recommendedCv: text(job.recommendedCv, 100),
        priority,
        status,
        easyApply: job.easyApply ? 1 : 0,
        receivedAt: text(job.receivedAt, 100) || now,
        now
    };
}

function parseList(value) {
    try {
        const parsed = JSON.parse(value || '[]');
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function serializeJob(row) {
    return {
        id: row.id,
        sourceId: row.source_id,
        sourceEmailId: row.source_email_id,
        source: row.source,
        title: row.title,
        company: row.company,
        location: row.location,
        workMode: row.work_mode,
        url: row.url,
        summary: row.summary,
        technologies: parseList(row.technologies),
        matchReasons: parseList(row.match_reasons),
        gaps: parseList(row.gaps),
        fitScore: row.fit_score,
        recommendedCv: row.recommended_cv,
        priority: row.priority,
        status: row.status,
        easyApply: Boolean(row.easy_apply),
        receivedAt: row.received_at,
        createdAt: row.created_at,
        updatedAt: row.updated_at
    };
}

async function listJobs(env) {
    const result = await env.DB.prepare('SELECT * FROM jobs ORDER BY received_at DESC, id DESC').all();
    const jobs = (result.results || []).map(serializeJob);
    const updatedAt = jobs.reduce((latest, job) => !latest || job.updatedAt > latest ? job.updatedAt : latest, null);
    return json({ jobs, updatedAt });
}

async function updateJob(request, env, id) {
    const body = await request.json().catch(() => ({}));
    const status = body.status;
    if (!['pending', 'applied', 'dismissed'].includes(status)) {
        return json({ error: 'Estado no válido' }, 400);
    }

    const numericId = Number(id);
    if (!Number.isInteger(numericId) || numericId <= 0) {
        return json({ error: 'Oferta no válida' }, 400);
    }

    await env.DB.prepare('UPDATE jobs SET status = ?, updated_at = ? WHERE id = ?')
        .bind(status, new Date().toISOString(), numericId)
        .run();
    const row = await env.DB.prepare('SELECT * FROM jobs WHERE id = ?').bind(numericId).first();
    if (!row) return json({ error: 'Oferta no encontrada' }, 404);
    return json({ job: serializeJob(row) });
}

async function importJobs(request, env) {
    const body = await request.json().catch(() => null);
    const rawJobs = Array.isArray(body) ? body : body?.jobs;
    if (!Array.isArray(rawJobs)) return json({ error: 'Se esperaba una lista de ofertas' }, 400);

    const jobs = rawJobs.map(normalizeJob).filter(Boolean);
    if (!jobs.length && rawJobs.length) return json({ error: 'Ninguna oferta contiene los campos mínimos' }, 400);

    const statement = `INSERT INTO jobs (
        source_id, source_email_id, source, title, company, location, work_mode, url, summary,
        technologies, match_reasons, gaps, fit_score, recommended_cv, priority, status,
        easy_apply, received_at, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(source_id) DO UPDATE SET
        source_email_id = excluded.source_email_id,
        source = excluded.source,
        title = excluded.title,
        company = excluded.company,
        location = excluded.location,
        work_mode = excluded.work_mode,
        url = excluded.url,
        summary = excluded.summary,
        technologies = excluded.technologies,
        match_reasons = excluded.match_reasons,
        gaps = excluded.gaps,
        fit_score = excluded.fit_score,
        recommended_cv = excluded.recommended_cv,
        priority = excluded.priority,
        status = CASE WHEN jobs.status IN ('applied', 'dismissed') THEN jobs.status ELSE excluded.status END,
        easy_apply = excluded.easy_apply,
        received_at = excluded.received_at,
        updated_at = excluded.updated_at`;

    const queries = jobs.map(job => env.DB.prepare(statement).bind(
        job.sourceId, job.sourceEmailId, job.source, job.title, job.company, job.location,
        job.workMode, job.url, job.summary, job.technologies, job.matchReasons, job.gaps,
        job.fitScore, job.recommendedCv, job.priority, job.status, job.easyApply,
        job.receivedAt, job.now, job.now
    ));
    if (queries.length) await env.DB.batch(queries);

    await env.DB.prepare('INSERT INTO sync_runs (source, checked_emails, upserted_jobs, created_at) VALUES (?, ?, ?, ?)')
        .bind(text(body?.source, 100) || 'automation', Number(body?.checkedEmails) || 0, jobs.length, new Date().toISOString())
        .run();

    return json({ ok: true, upserted: jobs.length });
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        try {
            if (url.pathname === '/health' && request.method === 'GET') {
                return json({ ok: true });
            }
            if (url.pathname === '/jobs/import' && request.method === 'POST') {
                if (!authenticated(request, env.INGESTION_TOKEN)) return json({ error: 'No autorizado' }, 401);
                return importJobs(request, env);
            }
            if (!authenticated(request, env.INTERNAL_API_TOKEN)) {
                return json({ error: 'No autorizado' }, 401);
            }
            if (url.pathname === '/jobs' && request.method === 'GET') {
                return listJobs(env);
            }
            const jobMatch = url.pathname.match(/^\/jobs\/(\d+)$/);
            if (jobMatch && request.method === 'PATCH') {
                return updateJob(request, env, jobMatch[1]);
            }
            return json({ error: 'Ruta no encontrada' }, 404);
        } catch (error) {
            console.error('Candidaturas API error', error);
            return json({ error: 'Error interno' }, 500);
        }
    }
};
