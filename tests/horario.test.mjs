import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession, horarioAuth, readSession, sessionCookie } from '../lib/auth.js';
import { normalizeSchedule } from '../lib/horario-schedule.js';
import { renderHorarioPage } from '../lib/horario-page.js';

process.env.ADMIN_USERNAME = 'admin';
process.env.ADMIN_PASSWORD = 'test-password';
process.env.HORARIO_USERNAME = 'admin';
process.env.HORARIO_PASSWORD = 'horario-password';
process.env.SESSION_SECRET = 'a-test-session-secret-that-is-longer-than-thirty-two-characters';

test('the schedule has its own credentials', () => {
    assert.equal(horarioAuth.verifyCredentials('admin', 'horario-password'), true);
    assert.equal(horarioAuth.verifyCredentials('admin', 'test-password'), false);
});

test('a schedule session never opens the admin panel, and vice versa', () => {
    const horarioToken = horarioAuth.createSession('admin');
    const adminToken = createSession('admin');

    assert.equal(horarioAuth.readSession({ headers: { cookie: `__Host-pg_horario=${horarioToken}` } }).username, 'admin');
    assert.equal(readSession({ headers: { cookie: `__Host-pg_admin=${horarioToken}` } }), null);
    assert.equal(horarioAuth.readSession({ headers: { cookie: `__Host-pg_horario=${adminToken}` } }), null);
});

test('the schedule is sanitised before it is stored', () => {
    const schedule = normalizeSchedule({
        settings: { startHour: 22, endHour: 6 },
        events: [
            { id: 'ok', title: '  Inglés  ', day: 0, start: 541, end: 630, color: 'blue', place: 'Aula 3' },
            { id: 'ok', title: 'Duplicada', day: 1, start: 600, end: 660 },
            { id: 'bad-day', title: 'Día imposible', day: 9, start: 600, end: 660 },
            { id: 'backwards', title: 'Al revés', day: 2, start: 700, end: 600 },
            { id: 'no-title', title: '   ', day: 3, start: 600, end: 660 },
            { id: '<script>', title: 'x'.repeat(200), day: 4, start: 60, end: 120, color: 'neon' }
        ]
    });

    assert.deepEqual(schedule.settings, { startHour: 7, endHour: 23 });
    assert.equal(schedule.events.length, 2);
    assert.deepEqual(schedule.events[0], {
        id: 'ok', title: 'Inglés', day: 0, start: 540, end: 630, color: 'blue', place: 'Aula 3', notes: ''
    });
    assert.equal(schedule.events[1].id, 'script');
    assert.equal(schedule.events[1].title.length, 80);
    assert.equal(schedule.events[1].color, 'ink');
});

test('the private page loads the app without inline scripts', () => {
    const html = renderHorarioPage();

    assert.match(html, /<script src="\/horario\/app\.js\?v=[^"]+" type="module"><\/script>/);
    assert.doesNotMatch(html, /<script>(?!<\/script>)/);
    assert.match(html, /name="robots" content="noindex, nofollow"/);
});

test('the schedule cookie survives opening the app from the home screen', () => {
    const request = { headers: { 'x-forwarded-proto': 'https' } };
    const horarioCookie = horarioAuth.sessionCookie('token', request);
    const adminCookie = sessionCookie('token', request);

    assert.match(horarioCookie, /SameSite=Lax/);
    assert.match(horarioCookie, new RegExp(`Max-Age=${60 * 60 * 24 * 365}`));
    assert.match(adminCookie, /SameSite=Strict/);
});

test('passwords are stored as scrypt hashes and verified against them', async () => {
    const { hashPassword, verifyPassword } = await import('../lib/horario-accounts.js');
    const stored = await hashPassword('una-contraseña-larga');

    assert.match(stored, /^scrypt\$16384\$8\$1\$[\w-]+\$[\w-]+$/);
    assert.doesNotMatch(stored, /una-contraseña-larga/);
    assert.equal(await verifyPassword('una-contraseña-larga', stored), true);
    assert.equal(await verifyPassword('otra', stored), false);
    assert.equal(await verifyPassword('una-contraseña-larga', 'texto-plano'), false);
});

test('new accounts need a valid, unreserved username and a long enough password', async () => {
    const { signupProblem } = await import('../lib/horario-accounts.js');

    assert.equal(signupProblem('ana.lopez', 'secreto123'), null);
    assert.match(signupProblem('ab', 'secreto123'), /entre 3 y 32/);
    assert.match(signupProblem('josé', 'secreto123'), /sin tildes/);
    assert.match(signupProblem('admin', 'secreto123'), /ya existe/);
    assert.match(signupProblem(process.env.HORARIO_USERNAME, 'secreto123'), /ya existe/);
    assert.match(signupProblem('ana.lopez', 'corta'), /al menos 8/);
});

test('each kind of schedule session opens only its own document', async () => {
    const { scheduleIdFor } = await import('../lib/horario-accounts.js');
    const read = token => horarioAuth.readSession({ headers: { cookie: `__Host-pg_horario=${token}` } });

    const user = read(horarioAuth.createSession('ana', { role: 'user', uid: 7 }));
    assert.equal(scheduleIdFor(user), 'u:7');
    assert.equal(scheduleIdFor(read(horarioAuth.createSession('admin', { role: 'owner' }))), 'main');

    // Sin HORARIO_ADMIN_PASSWORD no hay administrador, aunque la cookie diga que lo es
    delete process.env.HORARIO_ADMIN_PASSWORD;
    assert.equal(read(horarioAuth.createSession('admin', { role: 'admin' })), null);
    process.env.HORARIO_ADMIN_PASSWORD = 'admin-password';
    const admin = read(horarioAuth.createSession('admin', { role: 'admin' }));
    assert.equal(admin.role, 'admin');
    assert.equal(scheduleIdFor(admin), null);

    // Un usuario sin id válido no vale, y nadie se hace pasar por el propietario con otro nombre
    assert.equal(read(horarioAuth.createSession('ana', { role: 'user', uid: 'x' })), null);
    assert.equal(read(horarioAuth.createSession('ana', { role: 'owner' })), null);
});

test('the visitor IP comes from the first x-forwarded-for address', async () => {
    const { clientIp } = await import('../lib/horario-accounts.js');

    assert.equal(clientIp({ headers: { 'x-forwarded-for': '203.0.113.9, 10.0.0.1' } }), '203.0.113.9');
    assert.equal(clientIp({ headers: { 'x-real-ip': '2001:DB8::1' } }), '2001:db8::1');
    assert.equal(clientIp({ headers: { 'x-forwarded-for': '<script>' } }), '');
});

test('weekly changes are kept per Monday and cleaned before saving', async () => {
    const { normalizeSchedule } = await import('../lib/horario-schedule.js');
    const schedule = normalizeSchedule({
        events: [{ id: 'clase', title: 'Clase', day: 0, start: 540, end: 600 }],
        weeks: {
            '2026-10-26': {
                events: [{ id: 'extra', title: 'Examen', day: 2, start: 600, end: 660, color: 'red' }],
                hidden: ['clase', 'clase', '<b>']
            },
            '2026-10-27': { events: [{ id: 'x', title: 'No es lunes', day: 0, start: 60, end: 120 }] },
            '2026-02-30': { hidden: ['clase'] },
            '2026-11-02': { events: [], hidden: [] },
            'cualquiera': { hidden: ['clase'] }
        }
    });

    assert.deepEqual(Object.keys(schedule.weeks), ['2026-10-26']);
    assert.deepEqual(schedule.weeks['2026-10-26'].hidden, ['clase', 'b']);
    assert.equal(schedule.weeks['2026-10-26'].events[0].title, 'Examen');
    assert.deepEqual(normalizeSchedule({}).weeks, {});
});

test('done tasks are stored as a compact snapshot per week', async () => {
    const { normalizeSchedule } = await import('../lib/horario-schedule.js');
    const { weeks } = normalizeSchedule({
        weeks: {
            '2026-10-26': {
                done: [
                    { id: 'clase', title: 'Clase', day: 0, start: 540, end: 600, color: 'red', notes: 'x' },
                    { id: 'clase', title: 'Repetida', day: 1, start: 60, end: 120 },
                    { id: 'mala', title: '', day: 0, start: 60, end: 120 }
                ]
            },
            '2026-11-02': { done: [] }
        }
    });

    assert.deepEqual(Object.keys(weeks), ['2026-10-26']);
    assert.deepEqual(weeks['2026-10-26'].done, [{ id: 'clase', title: 'Clase', day: 0, start: 540, end: 600 }]);
    assert.deepEqual(weeks['2026-10-26'].events, []);
});
