import { horarioAuth, isSameOrigin } from '../lib/auth.js';

const FAILURE_DELAY_MS = 400;

function readBody(request) {
    if (typeof request.body === 'string') {
        const type = String(request.headers['content-type'] || '');
        if (type.includes('application/json')) {
            try { return JSON.parse(request.body); } catch { return {}; }
        }
        return Object.fromEntries(new URLSearchParams(request.body));
    }
    return request.body || {};
}

function wantsJson(request) {
    return String(request.headers['content-type'] || '').includes('application/json');
}

// POST inicia sesión (JSON desde login.js o formulario clásico sin JS); DELETE la cierra.
export default async function handler(request, response) {
    response.setHeader('Cache-Control', 'no-store');

    if (!['POST', 'DELETE'].includes(request.method)) {
        response.setHeader('Allow', 'POST, DELETE');
        return response.status(405).end();
    }
    if (!isSameOrigin(request)) {
        return response.status(403).json({ error: 'Solicitud no permitida' });
    }

    if (request.method === 'DELETE') {
        response.setHeader('Set-Cookie', horarioAuth.clearSessionCookie(request));
        return response.status(204).end();
    }

    const json = wantsJson(request);
    const { username = '', password = '' } = readBody(request);

    let token;
    try {
        if (horarioAuth.verifyCredentials(String(username).trim(), String(password))) {
            token = horarioAuth.createSession(String(username).trim());
        }
    } catch {
        return json
            ? response.status(503).json({ error: 'El acceso al horario todavía no está configurado.' })
            : response.redirect(303, '/horario/login?error=config');
    }

    if (!token) {
        await new Promise(resolve => setTimeout(resolve, FAILURE_DELAY_MS));
        return json
            ? response.status(401).json({ error: 'El usuario o la contraseña no son correctos.' })
            : response.redirect(303, '/horario/login?error=1');
    }

    response.setHeader('Set-Cookie', horarioAuth.sessionCookie(token, request));
    return json ? response.status(200).json({ ok: true }) : response.redirect(303, '/horario');
}
