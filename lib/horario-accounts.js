// Cuentas del horario. Hay tres tipos:
//   - propietario: HORARIO_USERNAME / HORARIO_PASSWORD (variables de entorno), con el horario
//     original (`main` en D1). No aparece en la lista de usuarios ni se puede borrar.
//   - usuario: cualquiera puede crear su cuenta desde /horario/login; se guarda en D1 a través del
//     Worker con la contraseña derivada con scrypt, y su horario es `u:<id>`.
//   - administrador: usuario «admin» con HORARIO_ADMIN_PASSWORD. Ve las cuentas, las borra y
//     bloquea IPs en /horario/admin. Sin esa variable, no hay administrador.
import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import { horarioAuth, safeSecretEqual } from './auth.js';
import { callWorker } from './worker-api.js';

const scrypt = promisify(scryptCallback);
const KEY_LENGTH = 64;
const SCRYPT = { N: 16384, r: 8, p: 1 };

export const ADMIN_USERNAME = 'admin';
export const USERNAME_PATTERN = /^[a-z0-9][a-z0-9._-]{2,31}$/;
export const PASSWORD_MIN = 8;
export const PASSWORD_MAX = 200;

export async function hashPassword(password) {
    const salt = randomBytes(16);
    const key = await scrypt(String(password), salt, KEY_LENGTH, SCRYPT);
    return `scrypt$${SCRYPT.N}$${SCRYPT.r}$${SCRYPT.p}$${salt.toString('base64url')}$${key.toString('base64url')}`;
}

export async function verifyPassword(password, stored) {
    const [scheme, n, r, p, salt, hash] = String(stored || '').split('$');
    if (scheme !== 'scrypt' || !salt || !hash) return false;
    const expected = Buffer.from(hash, 'base64url');
    const key = await scrypt(String(password), Buffer.from(salt, 'base64url'), expected.length, {
        N: Number(n), r: Number(r), p: Number(p)
    });
    return key.length === expected.length && timingSafeEqual(key, expected);
}

// Nombre de usuario: minúsculas, números, punto, guion y guion bajo; de 3 a 32 caracteres.
export function normalizeUsername(value) {
    return String(value ?? '').trim().toLowerCase();
}

export function signupProblem(username, password) {
    if (!USERNAME_PATTERN.test(username)) {
        return 'El usuario debe tener entre 3 y 32 caracteres: letras sin tildes, números, punto, guion o guion bajo.';
    }
    if (isReservedUsername(username)) return 'Ese nombre de usuario ya existe.';
    if (String(password).length < PASSWORD_MIN) return `La contraseña necesita al menos ${PASSWORD_MIN} caracteres.`;
    if (String(password).length > PASSWORD_MAX) return 'La contraseña es demasiado larga.';
    return null;
}

export function isReservedUsername(username) {
    const owner = normalizeUsername(process.env.HORARIO_USERNAME || 'horario');
    return username === ADMIN_USERNAME || username === owner;
}

// IP del visitante tal como la entrega Vercel (la primera de x-forwarded-for)
export function clientIp(request) {
    const forwarded = String(request.headers['x-forwarded-for'] || '').split(',')[0].trim();
    const ip = forwarded || String(request.headers['x-real-ip'] || '').trim() || request.socket?.remoteAddress || '';
    return /^[0-9a-f:.]{2,64}$/i.test(ip) ? ip.toLowerCase().replace(/^::ffff:/, '') : '';
}

// Documento del horario de cada sesión; el administrador no tiene horario propio
export function scheduleIdFor(session) {
    if (session?.role === 'user') return `u:${session.uid}`;
    if (session?.role === 'admin') return null;
    return 'main';
}

export async function isIpBlocked(ip) {
    if (!ip) return false;
    const { response, payload } = await callWorker(`/horario/access?ip=${encodeURIComponent(ip)}`);
    if (!response.ok) throw new Error('No se ha podido comprobar el acceso');
    return Boolean(payload?.blocked);
}

// Comprueba unas credenciales de inicio de sesión y devuelve la sesión que les corresponde
export async function authenticate(username, password, ip) {
    const name = normalizeUsername(username);
    const adminPassword = process.env.HORARIO_ADMIN_PASSWORD;
    if (name === ADMIN_USERNAME && adminPassword && safeSecretEqual(password, adminPassword)) {
        return { username: ADMIN_USERNAME, extra: { role: 'admin' } };
    }
    if (horarioAuth.verifyCredentials(String(username).trim(), password)) {
        return { username: String(username).trim(), extra: { role: 'owner' } };
    }
    if (!USERNAME_PATTERN.test(name) || isReservedUsername(name)) return null;

    const { response, payload } = await callWorker(`/horario/users/find?username=${encodeURIComponent(name)}`);
    if (response.status === 404) return null;
    if (!response.ok) throw new Error('No se ha podido comprobar la cuenta');
    const user = payload?.user;
    if (!user || !(await verifyPassword(password, user.passwordHash))) return null;
    await callWorker(`/horario/users/${user.id}/seen`, { method: 'POST', body: { ip } }).catch(() => {});
    return { username: user.username, extra: { role: 'user', uid: user.id } };
}

// Crea una cuenta y devuelve su sesión, o { error, status } si no se puede
export async function register(username, password, ip) {
    const name = normalizeUsername(username);
    const problem = signupProblem(name, password);
    if (problem) return { error: problem, status: 400 };

    const passwordHash = await hashPassword(password);
    const { response, payload } = await callWorker('/horario/users', {
        method: 'POST',
        body: { username: name, passwordHash, ip }
    });
    if (response.status === 409) return { error: 'Ese nombre de usuario ya existe.', status: 409 };
    if (response.status === 403) return { error: 'No se pueden crear cuentas desde esta conexión.', status: 403 };
    if (response.status === 429) return { error: 'Se han creado demasiadas cuentas desde esta conexión. Prueba mañana.', status: 429 };
    if (!response.ok || !payload?.user) return { error: 'No se ha podido crear la cuenta. Vuelve a intentarlo.', status: 502 };
    return { username: payload.user.username, extra: { role: 'user', uid: payload.user.id } };
}
