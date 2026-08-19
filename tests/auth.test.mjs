import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession, readSession, verifyCredentials } from '../lib/auth.js';

process.env.ADMIN_USERNAME = 'admin';
process.env.ADMIN_PASSWORD = 'test-password';
process.env.SESSION_SECRET = 'a-test-session-secret-that-is-longer-than-thirty-two-characters';

test('valid credentials are accepted and invalid credentials are rejected', () => {
    assert.equal(verifyCredentials('admin', 'test-password'), true);
    assert.equal(verifyCredentials('admin', 'wrong-password'), false);
    assert.equal(verifyCredentials('other', 'test-password'), false);
});

test('a signed session can be read and a modified one is rejected', () => {
    const token = createSession('admin');
    const request = { headers: { cookie: `__Host-pg_admin=${token}` } };
    assert.equal(readSession(request).username, 'admin');

    const tampered = `${token.slice(0, -1)}x`;
    assert.equal(readSession({ headers: { cookie: `__Host-pg_admin=${tampered}` } }), null);
});
