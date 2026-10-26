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

function normalizeForMatch(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

function canonicalJobUrl(value) {
    try {
        const url = new URL(String(value || '').trim());
        if (!['http:', 'https:'].includes(url.protocol)) return null;

        const linkedInJob = url.pathname.match(/\/jobs\/view\/(\d+)/);
        if (url.hostname.endsWith('linkedin.com') && linkedInJob) {
            return `https://www.linkedin.com/jobs/view/${linkedInJob[1]}/`;
        }

        return url.href.slice(0, 2000);
    } catch {
        return null;
    }
}

function hybridOutsideAndalusia(job) {
    const mode = normalizeForMatch([job?.workMode, job?.title, job?.summary].join(' '));
    if (!/\b(hibrid|hybrid)/.test(mode)) return false;

    const location = normalizeForMatch(job?.location);
    if (!location || /\b(espana|spain|remoto|remote)\b/.test(location)) return false;
    if (/\b(andalucia|almeria|cadiz|cordoba|granada|huelva|jaen|malaga|sevilla)\b/.test(location)) return false;

    const outsideLocations = [
        'madrid', 'barcelona', 'valencia', 'alicante', 'castellon', 'murcia', 'bilbao',
        'vizcaya', 'bizkaia', 'guipuzcoa', 'gipuzkoa', 'alava', 'vitoria', 'navarra',
        'pamplona', 'zaragoza', 'huesca', 'teruel', 'asturias', 'oviedo', 'gijon',
        'cantabria', 'santander', 'galicia', 'coruna', 'pontevedra', 'lugo', 'ourense',
        'castilla', 'leon', 'valladolid', 'salamanca', 'burgos', 'segovia', 'avila',
        'palencia', 'soria', 'zamora', 'toledo', 'guadalajara', 'cuenca', 'albacete',
        'ciudad real', 'extremadura', 'badajoz', 'caceres', 'la rioja', 'logrono',
        'baleares', 'mallorca', 'canarias', 'tenerife', 'las palmas', 'ceuta', 'melilla'
    ];
    return outsideLocations.some(place => location.includes(place));
}

function normalizeJob(job) {
    const sourceId = text(job?.sourceId, 500);
    const title = text(job?.title, 500);
    const source = text(job?.source, 100);
    const url = canonicalJobUrl(job?.url);
    if (!sourceId || !title || !source || !url) return null;

    let fitScore = Math.max(0, Math.min(100, Number(job.fitScore) || 0));
    const status = ['pending', 'applied', 'dismissed'].includes(job.status) ? job.status : 'pending';
    let priority = ['high', 'medium', 'low', 'dismissed'].includes(job.priority) ? job.priority : 'low';
    const gaps = stringArray(job.gaps);
    if (hybridOutsideAndalusia(job)) {
        fitScore = Math.min(fitScore, 10);
        priority = 'low';
        const mobilityGap = 'Modalidad híbrida fuera de Andalucía; no contempla mudanza desde Granada.';
        if (!gaps.includes(mobilityGap)) gaps.push(mobilityGap);
    }
    const now = new Date().toISOString();

    return {
        sourceId,
        sourceEmailId: text(job.sourceEmailId, 500),
        source,
        title,
        company: text(job.company, 500),
        location: text(job.location, 500),
        workMode: text(job.workMode, 100),
        url,
        summary: text(job.summary, 6000),
        technologies: JSON.stringify(stringArray(job.technologies)),
        matchReasons: JSON.stringify(stringArray(job.matchReasons)),
        gaps: JSON.stringify(gaps),
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

// Horario semanal privado (pedrogomez.dev/horario). Vercel ya valida el documento; aquí solo se
// guarda tal cual, con un límite de tamaño.
// Con el registro de tareas hechas (hasta un año de semanas) el documento crece algo más.
const MAX_SCHEDULE_BYTES = 600_000;

// Cada cuenta tiene su documento: `main` es el horario original y `u:<id>` el de cada usuario.
// Vercel indica cuál en ?id= y la IP del visitante en X-Client-IP; si la IP está bloqueada o la
// cuenta ya no existe, se niega el acceso.
async function scheduleAccess(request, env, url) {
    const id = url.searchParams.get('id') || 'main';
    const match = id.match(/^u:(\d{1,10})$/);
    if (id !== 'main' && !match) return { error: json({ error: 'Horario no válido' }, 400) };
    if (await isBlocked(env, request.headers.get('X-Client-IP'))) return { error: json({ error: 'Acceso bloqueado' }, 403) };
    if (match) {
        const user = await env.DB.prepare('SELECT id FROM horario_users WHERE id = ?').bind(Number(match[1])).first();
        if (!user) return { error: json({ error: 'La cuenta no existe' }, 404) };
    }
    return { id };
}

async function readSchedule(request, env, url) {
    const access = await scheduleAccess(request, env, url);
    if (access.error) return access.error;
    const row = await env.DB.prepare('SELECT data, updated_at FROM schedules WHERE id = ?').bind(access.id).first();
    return json({ data: row?.data ?? null, updatedAt: row?.updated_at ?? null });
}

async function saveSchedule(request, env, url) {
    const access = await scheduleAccess(request, env, url);
    if (access.error) return access.error;
    const body = await request.json().catch(() => ({}));
    const data = typeof body.data === 'string' ? body.data : '';
    if (!data || data.length > MAX_SCHEDULE_BYTES) return json({ error: 'Horario no válido' }, 400);
    try {
        JSON.parse(data);
    } catch {
        return json({ error: 'Horario no válido' }, 400);
    }

    const updatedAt = new Date().toISOString();
    await env.DB.prepare(`INSERT INTO schedules (id, data, updated_at) VALUES (?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`)
        .bind(access.id, data, updatedAt)
        .run();
    return json({ ok: true, updatedAt });
}

// ---------- Cuentas del horario y bloqueo de IPs ----------
// Vercel crea las cuentas (con la contraseña ya derivada con scrypt) y comprueba el acceso; aquí
// se guardan, se limita cuántas se crean desde una misma IP y se aplican los bloqueos.
const USERNAME_PATTERN = /^[a-z0-9][a-z0-9._-]{2,31}$/;
const SIGNUPS_PER_IP_PER_DAY = 5;
const MAX_USERS = 2000;

function ipText(value) {
    const ip = text(value, 64);
    return ip && /^[0-9a-f:.]+$/i.test(ip) ? ip.toLowerCase() : null;
}

async function isBlocked(env, ip) {
    const clean = ipText(ip);
    if (!clean) return false;
    return Boolean(await env.DB.prepare('SELECT ip FROM horario_blocked_ips WHERE ip = ?').bind(clean).first());
}

function serializeUser(row) {
    return {
        id: row.id,
        username: row.username,
        createdAt: row.created_at,
        createdIp: row.created_ip,
        lastLoginAt: row.last_login_at,
        lastIp: row.last_ip,
        scheduleUpdatedAt: row.schedule_updated_at ?? null,
        scheduleBytes: row.schedule_bytes ?? 0
    };
}

async function createUser(request, env) {
    const body = await request.json().catch(() => ({}));
    const username = String(body.username || '').trim().toLowerCase();
    const passwordHash = text(body.passwordHash, 300);
    const ip = ipText(body.ip);
    if (!USERNAME_PATTERN.test(username) || !passwordHash) return json({ error: 'Datos no válidos' }, 400);
    if (await isBlocked(env, ip)) return json({ error: 'Acceso bloqueado' }, 403);

    if (ip) {
        const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
        const recent = await env.DB.prepare('SELECT COUNT(*) AS total FROM horario_users WHERE created_ip = ? AND created_at > ?')
            .bind(ip, since).first();
        if ((recent?.total || 0) >= SIGNUPS_PER_IP_PER_DAY) return json({ error: 'Demasiadas cuentas nuevas desde esta conexión' }, 429);
    }
    const count = await env.DB.prepare('SELECT COUNT(*) AS total FROM horario_users').first();
    if ((count?.total || 0) >= MAX_USERS) return json({ error: 'No se admiten más cuentas por ahora' }, 503);

    const now = new Date().toISOString();
    try {
        const row = await env.DB.prepare(`INSERT INTO horario_users (username, password_hash, created_at, created_ip, last_login_at, last_ip)
            VALUES (?, ?, ?, ?, ?, ?) RETURNING *`)
            .bind(username, passwordHash, now, ip, now, ip)
            .first();
        return json({ user: serializeUser(row) }, 201);
    } catch (error) {
        if (/UNIQUE/i.test(String(error?.message))) return json({ error: 'Ese nombre de usuario ya existe' }, 409);
        throw error;
    }
}

// Para iniciar sesión: devuelve también el hash, que sólo compara Vercel
async function findUser(env, username) {
    const row = await env.DB.prepare('SELECT * FROM horario_users WHERE username = ?')
        .bind(String(username || '').trim().toLowerCase())
        .first();
    if (!row) return json({ error: 'La cuenta no existe' }, 404);
    return json({ user: { ...serializeUser(row), passwordHash: row.password_hash } });
}

async function touchUser(request, env, id) {
    const body = await request.json().catch(() => ({}));
    await env.DB.prepare('UPDATE horario_users SET last_login_at = ?, last_ip = ? WHERE id = ?')
        .bind(new Date().toISOString(), ipText(body.ip), Number(id))
        .run();
    return json({ ok: true });
}

async function listUsers(env) {
    const users = await env.DB.prepare(`SELECT u.*, s.updated_at AS schedule_updated_at, LENGTH(s.data) AS schedule_bytes
        FROM horario_users u LEFT JOIN schedules s ON s.id = 'u:' || u.id
        ORDER BY u.created_at DESC`).all();
    const blocked = await env.DB.prepare('SELECT ip, reason, created_at FROM horario_blocked_ips ORDER BY created_at DESC').all();
    return json({
        users: (users.results || []).map(serializeUser),
        blocked: (blocked.results || []).map(row => ({ ip: row.ip, reason: row.reason, createdAt: row.created_at }))
    });
}

async function deleteUser(env, id) {
    const numericId = Number(id);
    const existing = await env.DB.prepare('SELECT id FROM horario_users WHERE id = ?').bind(numericId).first();
    if (!existing) return json({ error: 'La cuenta no existe' }, 404);
    await env.DB.batch([
        env.DB.prepare('DELETE FROM schedules WHERE id = ?').bind(`u:${numericId}`),
        env.DB.prepare('DELETE FROM horario_users WHERE id = ?').bind(numericId)
    ]);
    return json({ ok: true });
}

async function blockIp(request, env) {
    const body = await request.json().catch(() => ({}));
    const ip = ipText(body.ip);
    if (!ip) return json({ error: 'IP no válida' }, 400);
    await env.DB.prepare(`INSERT INTO horario_blocked_ips (ip, reason, created_at) VALUES (?, ?, ?)
        ON CONFLICT(ip) DO UPDATE SET reason = excluded.reason`)
        .bind(ip, text(body.reason, 200), new Date().toISOString())
        .run();
    return json({ ok: true, ip });
}

async function unblockIp(env, ip) {
    const clean = ipText(ip);
    if (!clean) return json({ error: 'IP no válida' }, 400);
    await env.DB.prepare('DELETE FROM horario_blocked_ips WHERE ip = ?').bind(clean).run();
    return json({ ok: true });
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
            if (url.pathname === '/schedule' && request.method === 'GET') {
                return readSchedule(request, env, url);
            }
            if (url.pathname === '/schedule' && request.method === 'PUT') {
                return saveSchedule(request, env, url);
            }
            if (url.pathname === '/horario/access' && request.method === 'GET') {
                return json({ blocked: await isBlocked(env, url.searchParams.get('ip')) });
            }
            if (url.pathname === '/horario/users' && request.method === 'GET') {
                return listUsers(env);
            }
            if (url.pathname === '/horario/users' && request.method === 'POST') {
                return createUser(request, env);
            }
            if (url.pathname === '/horario/users/find' && request.method === 'GET') {
                return findUser(env, url.searchParams.get('username'));
            }
            const userMatch = url.pathname.match(/^\/horario\/users\/(\d{1,10})(\/seen)?$/);
            if (userMatch && !userMatch[2] && request.method === 'DELETE') {
                return deleteUser(env, userMatch[1]);
            }
            if (userMatch && userMatch[2] && request.method === 'POST') {
                return touchUser(request, env, userMatch[1]);
            }
            if (url.pathname === '/horario/blocked' && request.method === 'POST') {
                return blockIp(request, env);
            }
            if (url.pathname === '/horario/blocked' && request.method === 'DELETE') {
                return unblockIp(env, url.searchParams.get('ip'));
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

export { canonicalJobUrl, hybridOutsideAndalusia, normalizeJob };
