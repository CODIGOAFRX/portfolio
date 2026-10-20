import { horarioAuth, isSameOrigin } from '../lib/auth.js';
import { authenticate, clientIp, isIpBlocked, register } from '../lib/horario-accounts.js';

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

const home = role => (role === 'admin' ? '/horario/admin' : '/horario');

// GET dice si ya hay sesión (login.js salta al horario sin pedir nada); POST inicia sesión o crea
// una cuenta (`mode: 'signup'`), en JSON desde login.js o con el formulario clásico sin JS;
// DELETE la cierra.
export default async function handler(request, response) {
    response.setHeader('Cache-Control', 'no-store');

    if (!['GET', 'POST', 'DELETE'].includes(request.method)) {
        response.setHeader('Allow', 'GET, POST, DELETE');
        return response.status(405).end();
    }
    if (request.method === 'GET') {
        try {
            const session = horarioAuth.readSession(request);
            if (!session) return response.status(401).json({ ok: false });
            horarioAuth.renewSession(session, request, response);
            return response.status(200).json({ ok: true, role: session.role || 'owner', home: home(session.role) });
        } catch {
            return response.status(503).json({ ok: false });
        }
    }
    if (!isSameOrigin(request)) {
        return response.status(403).json({ error: 'Solicitud no permitida' });
    }

    if (request.method === 'DELETE') {
        response.setHeader('Set-Cookie', horarioAuth.clearSessionCookie(request));
        return response.status(204).end();
    }

    const json = wantsJson(request);
    const body = readBody(request);
    const signup = body.mode === 'signup';
    const username = String(body.username || '');
    const password = String(body.password || '');
    const ip = clientIp(request);
    const fail = async (status, message, code) => {
        if (status === 401) await new Promise(resolve => setTimeout(resolve, FAILURE_DELAY_MS));
        const page = signup ? '/horario/login?modo=alta&' : '/horario/login?';
        return json ? response.status(status).json({ error: message }) : response.redirect(303, `${page}error=${code}`);
    };

    // Sin secreto de sesión no se puede emitir la cookie: mejor no crear la cuenta
    if (String(process.env.SESSION_SECRET || '').length < 32) {
        return fail(503, 'El acceso al horario todavía no está configurado.', 'config');
    }

    // Si el Worker no responde, la comprobación de bloqueo no impide entrar al propietario: sin
    // Worker tampoco se pueden leer ni guardar horarios, y ahí se vuelve a comprobar la IP.
    if (await isIpBlocked(ip).catch(() => false)) {
        return fail(403, 'El acceso al horario está bloqueado desde esta conexión.', 'bloqueo');
    }

    let account;
    try {
        account = signup ? await register(username, password, ip) : await authenticate(username, password, ip);
        if (account?.error) return fail(account.status, account.error, 'alta');
    } catch {
        return fail(503, 'No se ha podido conectar con el servidor del horario. Vuelve a intentarlo.', 'conexion');
    }

    if (!account) return fail(401, 'El usuario o la contraseña no son correctos.', '1');

    const token = horarioAuth.createSession(account.username, account.extra);
    response.setHeader('Set-Cookie', horarioAuth.sessionCookie(token, request));
    const target = home(account.extra.role);
    return json ? response.status(200).json({ ok: true, role: account.extra.role, home: target }) : response.redirect(303, target);
}
