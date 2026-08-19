import { safeSecretEqual } from '../lib/auth.js';
import { callWorker } from '../lib/worker-api.js';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST');
        return response.status(405).end();
    }

    const authorization = request.headers.authorization || '';
    const receivedToken = authorization.startsWith('Bearer ') ? authorization.slice(7) : '';
    if (!process.env.INGESTION_TOKEN || !safeSecretEqual(receivedToken, process.env.INGESTION_TOKEN)) {
        return response.status(401).json({ error: 'No autorizado' });
    }

    try {
        const result = await callWorker('/jobs/import', {
            method: 'POST',
            body: request.body,
            token: process.env.INGESTION_TOKEN
        });
        response.setHeader('Cache-Control', 'no-store');
        return response.status(result.response.status).json(result.payload);
    } catch {
        return response.status(502).json({ error: 'No se ha podido actualizar la base de candidaturas' });
    }
}
