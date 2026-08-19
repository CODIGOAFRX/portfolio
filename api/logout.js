import { clearSessionCookie, isSameOrigin } from '../lib/auth.js';

export default function handler(request, response) {
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST');
        return response.status(405).end();
    }
    if (!isSameOrigin(request)) {
        return response.status(403).send('Solicitud no permitida');
    }

    response.setHeader('Set-Cookie', clearSessionCookie(request));
    response.setHeader('Cache-Control', 'no-store');
    return response.redirect(303, '/login');
}
