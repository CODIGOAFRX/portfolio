import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession, horarioAuth, readSession } from '../lib/auth.js';
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
    assert.equal(schedule.events[1].color, 'blue');
});

test('the private page loads the app without inline scripts', () => {
    const html = renderHorarioPage();

    assert.match(html, /<script src="\/horario\/app\.js\?v=[^"]+" type="module"><\/script>/);
    assert.doesNotMatch(html, /<script>(?!<\/script>)/);
    assert.match(html, /name="robots" content="noindex, nofollow"/);
});
