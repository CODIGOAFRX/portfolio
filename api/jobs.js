import { isSameOrigin, readSession } from '../lib/auth.js';
import { callWorker } from '../lib/worker-api.js';

export default async function handler(request, response) {
    try {
        if (!readSession(request)) {
            return response.status(401).json({ error: 'Sesión no válida' });
        }
    } catch {
        return response.status(503).json({ error: 'El acceso privado no está configurado' });
    }

    if (!['GET', 'PATCH'].includes(request.method)) {
        response.setHeader('Allow', 'GET, PATCH');
        return response.status(405).end();
    }
    if (request.method === 'PATCH' && !isSameOrigin(request)) {
        return response.status(403).json({ error: 'Solicitud no permitida' });
    }

    try {
        const path = request.method === 'GET'
            ? '/jobs'
            : `/jobs/${encodeURIComponent(String(request.body?.id ?? ''))}`;
        const result = await callWorker(path, {
            method: request.method,
            body: request.method === 'PATCH' ? { status: request.body?.status } : undefined
        });
        response.setHeader('Cache-Control', 'no-store');
        return response.status(result.response.status).json(result.payload);
    } catch {
        return response.status(502).json({ error: 'No se ha podido conectar con la base de candidaturas' });
    }
}
