import { readSession } from '../lib/auth.js';
import { renderAdminPage } from '../lib/admin-page.js';

export default function handler(request, response) {
    if (request.method !== 'GET') {
        response.setHeader('Allow', 'GET');
        return response.status(405).end();
    }

    try {
        if (!readSession(request)) {
            return response.redirect(302, '/login');
        }
    } catch {
        return response.status(503).send('El acceso privado todavía no está configurado.');
    }

    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.setHeader('Cache-Control', 'private, no-store');
    return response.status(200).send(renderAdminPage());
}
