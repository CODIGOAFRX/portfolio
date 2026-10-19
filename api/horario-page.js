import { horarioAuth } from '../lib/auth.js';
import { renderHorarioPage } from '../lib/horario-page.js';

export default function handler(request, response) {
    if (request.method !== 'GET') {
        response.setHeader('Allow', 'GET');
        return response.status(405).end();
    }

    try {
        const session = horarioAuth.readSession(request);
        if (!session) {
            return response.redirect(302, '/horario/login');
        }
        horarioAuth.renewSession(session, request, response);
    } catch {
        return response.status(503).send('El acceso al horario todavía no está configurado.');
    }

    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.setHeader('Cache-Control', 'private, no-store');
    return response.status(200).send(renderHorarioPage());
}
