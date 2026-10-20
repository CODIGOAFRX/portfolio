import { horarioAuth, isSameOrigin } from '../lib/auth.js';
import { clientIp, scheduleIdFor } from '../lib/horario-accounts.js';
import { normalizeSchedule } from '../lib/horario-schedule.js';
import { callWorker } from '../lib/worker-api.js';

// Datos del horario: GET lo lee y PUT lo sustituye entero. Cada cuenta tiene su documento (el
// propietario, `main`; cada usuario, `u:<id>`) y el almacenamiento vive en el Worker de
// Cloudflare (D1), igual que las candidaturas. Si la cuenta se ha borrado o la IP está
// bloqueada, el Worker lo dice y aquí se cierra la sesión.
export default async function handler(request, response) {
    response.setHeader('Cache-Control', 'no-store');

    let session;
    try {
        session = horarioAuth.readSession(request);
        if (!session) return response.status(401).json({ error: 'Sesión no válida' });
    } catch {
        return response.status(503).json({ error: 'El acceso al horario no está configurado' });
    }

    if (!['GET', 'PUT'].includes(request.method)) {
        response.setHeader('Allow', 'GET, PUT');
        return response.status(405).end();
    }
    if (request.method === 'PUT' && !isSameOrigin(request)) {
        return response.status(403).json({ error: 'Solicitud no permitida' });
    }
    const id = scheduleIdFor(session);
    if (!id) return response.status(403).json({ error: 'El administrador no tiene horario propio' });

    const path = `/schedule?id=${encodeURIComponent(id)}`;
    const headers = { 'X-Client-IP': clientIp(request) };
    const closed = upstream => {
        if (upstream.status !== 403 && upstream.status !== 404) return false;
        response.setHeader('Set-Cookie', horarioAuth.clearSessionCookie(request));
        response.status(401).json({ error: upstream.status === 403 ? 'Acceso bloqueado' : 'La cuenta ya no existe' });
        return true;
    };

    try {
        if (request.method === 'GET') {
            const { response: upstream, payload } = await callWorker(path, { headers });
            if (closed(upstream)) return;
            if (!upstream.ok) return response.status(502).json({ error: 'No se ha podido leer el horario' });
            const schedule = payload?.data ? normalizeSchedule(JSON.parse(payload.data)) : null;
            return response.status(200).json({ schedule, updatedAt: payload?.updatedAt || null });
        }

        const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
        const schedule = normalizeSchedule(body?.schedule);
        const { response: upstream, payload } = await callWorker(path, {
            method: 'PUT',
            headers,
            body: { data: JSON.stringify(schedule) }
        });
        if (closed(upstream)) return;
        if (!upstream.ok) return response.status(502).json({ error: 'No se ha podido guardar el horario' });
        return response.status(200).json({ ok: true, updatedAt: payload?.updatedAt || null });
    } catch {
        return response.status(502).json({ error: 'No se ha podido conectar con el almacenamiento del horario' });
    }
}
