import { createHmac, timingSafeEqual } from 'node:crypto';

const SESSION_SECONDS = 60 * 60 * 12;

// Cada área privada tiene su propia cookie y sus propias credenciales. La sesión firma también el
// área, así una cookie del horario no sirve como cookie del panel aunque compartan usuario.
const REALMS = {
    admin: {
        cookie: '__Host-pg_admin',
        userEnv: 'ADMIN_USERNAME',
        passwordEnv: 'ADMIN_PASSWORD',
        defaultUser: 'admin',
        seconds: SESSION_SECONDS
    },
    horario: {
        cookie: '__Host-pg_horario',
        userEnv: 'HORARIO_USERNAME',
        passwordEnv: 'HORARIO_PASSWORD',
        defaultUser: 'horario',
        seconds: 60 * 60 * 24 * 30
    }
};

function safeEqual(left, right) {
    const leftBuffer = Buffer.from(String(left ?? ''));
    const rightBuffer = Buffer.from(String(right ?? ''));

    if (leftBuffer.length !== rightBuffer.length) {
        const padding = Buffer.alloc(leftBuffer.length);
        timingSafeEqual(leftBuffer, padding);
        return false;
    }

    return timingSafeEqual(leftBuffer, rightBuffer);
}

function signature(payload) {
    const secret = process.env.SESSION_SECRET;
    if (!secret || secret.length < 32) {
        throw new Error('SESSION_SECRET no está configurado correctamente');
    }

    return createHmac('sha256', secret).update(payload).digest('base64url');
}

function parseCookies(cookieHeader = '') {
    return cookieHeader.split(';').reduce((cookies, part) => {
        const separator = part.indexOf('=');
        if (separator === -1) return cookies;
        const key = part.slice(0, separator).trim();
        const value = part.slice(separator + 1).trim();
        if (key) cookies[key] = value;
        return cookies;
    }, {});
}

function expectedUser(realm) {
    return process.env[realm.userEnv] || realm.defaultUser;
}

function isSecureRequest(request) {
    const forwardedProto = request.headers['x-forwarded-proto'];
    return process.env.VERCEL || forwardedProto === 'https';
}

function realmAuth(name) {
    const realm = REALMS[name];

    return {
        verifyCredentials(username, password) {
            const expectedPassword = process.env[realm.passwordEnv];
            if (!expectedPassword) return false;
            return safeEqual(username, expectedUser(realm)) && safeEqual(password, expectedPassword);
        },

        createSession(username) {
            const payload = Buffer.from(JSON.stringify({
                username,
                realm: name,
                expiresAt: Date.now() + realm.seconds * 1000
            })).toString('base64url');

            return `${payload}.${signature(payload)}`;
        },

        readSession(request) {
            const token = parseCookies(request.headers.cookie)[realm.cookie];
            if (!token) return null;

            const separator = token.lastIndexOf('.');
            if (separator === -1) return null;
            const payload = token.slice(0, separator);
            const receivedSignature = token.slice(separator + 1);
            if (!safeEqual(receivedSignature, signature(payload))) return null;

            try {
                const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
                // Las sesiones del panel anteriores a las áreas no llevan `realm`.
                if ((session.realm || 'admin') !== name) return null;
                if (!session.username || session.expiresAt <= Date.now()) return null;
                if (!safeEqual(session.username, expectedUser(realm))) return null;
                return session;
            } catch {
                return null;
            }
        },

        sessionCookie(token, request) {
            return [
                `${realm.cookie}=${token}`,
                'Path=/',
                'HttpOnly',
                'SameSite=Strict',
                `Max-Age=${realm.seconds}`,
                isSecureRequest(request) ? 'Secure' : ''
            ].filter(Boolean).join('; ');
        },

        clearSessionCookie(request) {
            return [
                `${realm.cookie}=`,
                'Path=/',
                'HttpOnly',
                'SameSite=Strict',
                'Max-Age=0',
                isSecureRequest(request) ? 'Secure' : ''
            ].filter(Boolean).join('; ');
        }
    };
}

const adminAuth = realmAuth('admin');
export const horarioAuth = realmAuth('horario');

export const verifyCredentials = adminAuth.verifyCredentials;
export const createSession = adminAuth.createSession;
export const readSession = adminAuth.readSession;
export const sessionCookie = adminAuth.sessionCookie;
export const clearSessionCookie = adminAuth.clearSessionCookie;

export function isSameOrigin(request) {
    const origin = request.headers.origin;
    if (!origin) return true;
    try {
        return new URL(origin).host === request.headers.host;
    } catch {
        return false;
    }
}

export function safeSecretEqual(left, right) {
    return safeEqual(left, right);
}
