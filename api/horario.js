import { horarioAuth, isSameOrigin } from '../lib/auth.js';
import { normalizeSchedule } from '../lib/horario-schedule.js';
import { callWorker } from '../lib/worker-api.js';

// Datos del horario: GET lo lee y PUT lo sustituye entero. El almacenamiento vive en el worker de
// Cloudflare (D1), igual que las candidaturas.
export default async function handler(request, response) {
    response.setHeader('Cache-Control', 'no-store');

    try {
        if (!horarioAuth.readSession(request)) {
            return response.status(401).json({ error: 'Sesión no válida' });
        }
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

    try {
        if (request.method === 'GET') {
            const { response: upstream, payload } = await callWorker('/schedule');
            if (!upstream.ok) return response.status(502).json({ error: 'No se ha podido leer el horario' });
            const schedule = payload?.data ? normalizeSchedule(JSON.parse(payload.data)) : null;
            return response.status(200).json({ schedule, updatedAt: payload?.updatedAt || null });
        }

        const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
        const schedule = normalizeSchedule(body?.schedule);
        const { response: upstream, payload } = await callWorker('/schedule', {
            method: 'PUT',
            body: { data: JSON.stringify(schedule) }
        });
        if (!upstream.ok) return response.status(502).json({ error: 'No se ha podido guardar el horario' });
        return response.status(200).json({ ok: true, updatedAt: payload?.updatedAt || null });
    } catch {
        return response.status(502).json({ error: 'No se ha podido conectar con el almacenamiento del horario' });
    }
}
