import { createHmac, timingSafeEqual } from 'node:crypto';

const COOKIE_NAME = '__Host-pg_admin';
const SESSION_SECONDS = 60 * 60 * 12;

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

export function verifyCredentials(username, password) {
    const expectedUser = process.env.ADMIN_USERNAME || 'admin';
    const expectedPassword = process.env.ADMIN_PASSWORD;
    if (!expectedPassword) return false;
    return safeEqual(username, expectedUser) && safeEqual(password, expectedPassword);
}

export function createSession(username) {
    const payload = Buffer.from(JSON.stringify({
        username,
        expiresAt: Date.now() + SESSION_SECONDS * 1000
    })).toString('base64url');

    return `${payload}.${signature(payload)}`;
}

export function readSession(request) {
    const token = parseCookies(request.headers.cookie)[COOKIE_NAME];
    if (!token) return null;

    const separator = token.lastIndexOf('.');
    if (separator === -1) return null;
    const payload = token.slice(0, separator);
    const receivedSignature = token.slice(separator + 1);
    if (!safeEqual(receivedSignature, signature(payload))) return null;

    try {
        const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
        if (!session.username || session.expiresAt <= Date.now()) return null;
        if (!safeEqual(session.username, process.env.ADMIN_USERNAME || 'admin')) return null;
        return session;
    } catch {
        return null;
    }
}

export function sessionCookie(token, request) {
    const forwardedProto = request.headers['x-forwarded-proto'];
    const isSecure = process.env.VERCEL || forwardedProto === 'https';
    return [
        `${COOKIE_NAME}=${token}`,
        'Path=/',
        'HttpOnly',
        'SameSite=Strict',
        `Max-Age=${SESSION_SECONDS}`,
        isSecure ? 'Secure' : ''
    ].filter(Boolean).join('; ');
}

export function clearSessionCookie(request) {
    const forwardedProto = request.headers['x-forwarded-proto'];
    const isSecure = process.env.VERCEL || forwardedProto === 'https';
    return [
        `${COOKIE_NAME}=`,
        'Path=/',
        'HttpOnly',
        'SameSite=Strict',
        'Max-Age=0',
        isSecure ? 'Secure' : ''
    ].filter(Boolean).join('; ');
}

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
