import assert from 'node:assert/strict';
import { test } from 'node:test';
import handler from '../api/import.js';

test('the importer accepts each configured credential and only forwards the original token', async t => {
    const environment = {
        INGESTION_TOKEN: 'desktop-test-token',
        LAPTOP_INGESTION_TOKEN: 'laptop-test-token',
        WORKER_API_URL: 'https://worker.example.test'
    };
    const saved = Object.fromEntries(Object.keys(environment).map(key => [key, process.env[key]]));
    const savedFetch = globalThis.fetch;
    t.after(() => {
        for (const [key, value] of Object.entries(saved)) {
            if (value === undefined) delete process.env[key];
            else process.env[key] = value;
        }
        globalThis.fetch = savedFetch;
    });
    Object.assign(process.env, environment);

    const requests = [];
    globalThis.fetch = async (url, options) => {
        requests.push({ url, ...options });
        return new Response(JSON.stringify({ ok: true, upserted: 1 }), { status: 200 });
    };

    const body = { jobs: [{ title: 'Example' }] };
    async function request(token, method = 'POST') {
        const headers = new Map();
        const response = {
            setHeader: (name, value) => headers.set(name, value),
            status(code) { this.code = code; return this; },
            json(payload) { this.payload = payload; return this; },
            end() { return this; }
        };
        const authorization = token === undefined ? undefined : 'Bearer ' + token;
        await handler({ method, headers: { authorization }, body }, response);
        return { code: response.code, payload: response.payload, headers };
    }

    assert.equal((await request(undefined)).code, 401);
    assert.equal((await request('')).code, 401);
    assert.equal((await request('invalid-test-token')).code, 401);
    assert.equal((await request(environment.LAPTOP_INGESTION_TOKEN, 'GET')).code, 405);
    assert.equal(requests.length, 0);

    for (const token of [environment.INGESTION_TOKEN, environment.LAPTOP_INGESTION_TOKEN]) {
        const result = await request(token);
        assert.equal(result.code, 200);
        assert.equal(result.headers.get('Cache-Control'), 'no-store');
        assert.equal(result.payload.upserted, 1);
    }

    delete process.env.LAPTOP_INGESTION_TOKEN;
    assert.equal((await request(environment.LAPTOP_INGESTION_TOKEN)).code, 401);
    assert.equal((await request(environment.INGESTION_TOKEN)).code, 200);

    assert.equal(requests.length, 3);
    for (const workerRequest of requests) {
        assert.equal(workerRequest.url, environment.WORKER_API_URL + '/jobs/import');
        assert.equal(workerRequest.method, 'POST');
        assert.equal(workerRequest.headers.Authorization, 'Bearer ' + environment.INGESTION_TOKEN);
        assert.deepEqual(JSON.parse(workerRequest.body), body);
    }

    process.env.LAPTOP_INGESTION_TOKEN = environment.LAPTOP_INGESTION_TOKEN;
    delete process.env.INGESTION_TOKEN;
    assert.equal((await request(environment.LAPTOP_INGESTION_TOKEN)).code, 401);
    assert.equal(requests.length, 3);
});
