import { createSession, isSameOrigin, sessionCookie, verifyCredentials } from '../lib/auth.js';

function readFormBody(request) {
    if (typeof request.body === 'string') {
        return Object.fromEntries(new URLSearchParams(request.body));
    }
    return request.body || {};
}

export default function handler(request, response) {
    if (request.method !== 'POST') {
        response.setHeader('Allow', 'POST');
        return response.status(405).end();
    }
    if (!isSameOrigin(request)) {
        return response.status(403).send('Solicitud no permitida');
    }

    const { username = '', password = '' } = readFormBody(request);
    if (!verifyCredentials(String(username), String(password))) {
        return response.redirect(303, '/login?error=1');
    }

    const token = createSession(String(username));
    response.setHeader('Set-Cookie', sessionCookie(token, request));
    response.setHeader('Cache-Control', 'no-store');
    return response.redirect(303, '/admin');
}
