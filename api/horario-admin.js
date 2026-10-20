import { horarioAuth, isSameOrigin } from '../lib/auth.js';
import { clientIp } from '../lib/horario-accounts.js';
import { callWorker } from '../lib/worker-api.js';

// Panel del administrador del horario (/horario/admin). Sólo con la sesión de «admin».
//   GET                                → cuentas y IPs bloqueadas
//   DELETE ?user=<id>                  → borra una cuenta y su horario
//   POST { action: 'block', ip, reason } → bloquea una IP
//   DELETE ?ip=<ip>                    → la desbloquea
export default async function handler(request, response) {
    response.setHeader('Cache-Control', 'no-store');

    let session;
    try {
        session = horarioAuth.readSession(request);
    } catch {
        return response.status(503).json({ error: 'El acceso al horario no está configurado' });
    }
    if (!session) return response.status(401).json({ error: 'Sesión no válida' });
    if (session.role !== 'admin') return response.status(403).json({ error: 'Sólo para el administrador' });

    if (!['GET', 'POST', 'DELETE'].includes(request.method)) {
        response.setHeader('Allow', 'GET, POST, DELETE');
        return response.status(405).end();
    }
    if (request.method !== 'GET' && !isSameOrigin(request)) {
        return response.status(403).json({ error: 'Solicitud no permitida' });
    }

    const relay = (upstream, payload) => response.status(upstream.status).json(payload || {});
    try {
        if (request.method === 'GET') {
            const { response: upstream, payload } = await callWorker('/horario/users');
            if (!upstream.ok) return relay(upstream, payload);
            return response.status(200).json({ ...payload, you: { ip: clientIp(request) } });
        }

        if (request.method === 'DELETE') {
            const user = String(request.query?.user || '');
            const ip = String(request.query?.ip || '');
            if (/^\d{1,10}$/.test(user)) {
                const { response: upstream, payload } = await callWorker(`/horario/users/${user}`, { method: 'DELETE' });
                return relay(upstream, payload);
            }
            if (ip) {
                const { response: upstream, payload } = await callWorker(`/horario/blocked?ip=${encodeURIComponent(ip)}`, { method: 'DELETE' });
                return relay(upstream, payload);
            }
            return response.status(400).json({ error: 'Falta la cuenta o la IP' });
        }

        const body = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : (request.body || {});
        if (body.action !== 'block') return response.status(400).json({ error: 'Acción no válida' });
        if (String(body.ip || '').trim() === clientIp(request)) {
            return response.status(400).json({ error: 'Esa es tu propia IP: si la bloqueas, te quedas fuera.' });
        }
        const { response: upstream, payload } = await callWorker('/horario/blocked', {
            method: 'POST',
            body: { ip: String(body.ip || '').trim(), reason: body.reason }
        });
        return relay(upstream, payload);
    } catch {
        return response.status(502).json({ error: 'No se ha podido conectar con el almacenamiento del horario' });
    }
}
