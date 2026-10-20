import { horarioAuth } from '../lib/auth.js';
import { renderHorarioPage } from '../lib/horario-page.js';
import { renderHorarioLoginPage } from '../lib/horario-login-page.js';
import { renderHorarioAdminPage } from '../lib/horario-admin-page.js';

// /horario, /horario/login y /horario/admin (vercel.json). Con sesión se sirve el horario de esa
// cuenta (o el panel, al administrador); sin ella, el formulario de acceso con un 200 en la misma
// URL. No se redirige a otra dirección porque iOS, al añadir la web a la pantalla de inicio,
// vuelve a pedir la página sin cookies para leer el icono y no sigue redirecciones: con un 302 se
// quedaba sin icono y ponía una «H».
export default function handler(request, response) {
    if (!['GET', 'HEAD'].includes(request.method)) {
        response.setHeader('Allow', 'GET, HEAD');
        return response.status(405).end();
    }

    let session;
    try {
        session = horarioAuth.readSession(request);
    } catch {
        return response.status(503).send('El acceso al horario todavía no está configurado.');
    }

    const view = request.query?.view;
    const admin = session?.role === 'admin';
    if (session && view === 'login') return response.redirect(302, admin ? '/horario/admin' : '/horario');
    if (session && admin !== (view === 'admin')) return response.redirect(302, admin ? '/horario/admin' : '/horario');
    if (session) horarioAuth.renewSession(session, request, response);

    const html = !session
        ? renderHorarioLoginPage({ mode: request.query?.modo === 'alta' ? 'signup' : 'login' })
        : admin
            ? renderHorarioAdminPage()
            : renderHorarioPage({ account: session.username, role: session.role || 'owner' });
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    // no-cache y no no-store: el HTML no lleva datos (llegan por /api/horario) y iOS necesita
    // poder guardarlo en caché para crear el icono de la pantalla de inicio.
    response.setHeader('Cache-Control', 'private, no-cache');
    response.status(200);
    return request.method === 'HEAD' ? response.end() : response.send(html);
}
