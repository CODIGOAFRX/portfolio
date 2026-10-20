// Horario en local, de punta a punta y sin tocar producción: sirve /horario, /horario/login y
// /horario/admin con las funciones reales de api/ (con un adaptador mínimo de Vercel) y ejecuta el
// Worker real (worker/src/index.js) en el mismo proceso, con D1 sustituido por node:sqlite.
//
//   node scripts/dev-horario.mjs                    → http://127.0.0.1:8020/horario
//   PORT=8030 DB=./horario-dev.sqlite node scripts/dev-horario.mjs
//
// Cuentas de prueba: propietario «pedro» / «pedro-local» y administrador «admin» / «admin»
// (se pueden cambiar con HORARIO_USERNAME, HORARIO_PASSWORD y HORARIO_ADMIN_PASSWORD).
// Para simular otra IP, manda la cabecera X-Forwarded-For.
import http from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import { randomBytes } from 'node:crypto';
import { resolve, extname } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const port = Number(process.env.PORT || 8020);
const origin = `http://127.0.0.1:${port}`;
Object.assign(process.env, {
    SESSION_SECRET: process.env.SESSION_SECRET || randomBytes(32).toString('hex'),
    WORKER_API_URL: `${origin}/__worker`,
    WORKER_INTERNAL_TOKEN: 'dev-internal-token',
    HORARIO_USERNAME: process.env.HORARIO_USERNAME || 'pedro',
    HORARIO_PASSWORD: process.env.HORARIO_PASSWORD || 'pedro-local',
    HORARIO_ADMIN_PASSWORD: process.env.HORARIO_ADMIN_PASSWORD ?? 'admin'
});

// ---------- D1 sobre node:sqlite (sólo lo que usa el Worker) ----------
const sqlite = new DatabaseSync(process.env.DB || ':memory:');
sqlite.exec(await readFile(resolve(root, 'worker/schema.sql'), 'utf8'));
for (const file of (await readdir(resolve(root, 'worker/migrations'))).sort()) {
    if (file.endsWith('.sql') && !file.startsWith('0002')) sqlite.exec(await readFile(resolve(root, 'worker/migrations', file), 'utf8'));
}
class Statement {
    constructor(sql, args = []) { this.sql = sql; this.args = args; }
    bind(...args) { return new Statement(this.sql, args); }
    async first() { return sqlite.prepare(this.sql).get(...this.args) ?? null; }
    async all() { return { results: sqlite.prepare(this.sql).all(...this.args) }; }
    async run() { return { meta: sqlite.prepare(this.sql).run(...this.args) }; }
}
const DB = {
    prepare: sql => new Statement(sql),
    async batch(statements) {
        sqlite.exec('BEGIN');
        try {
            const results = [];
            for (const statement of statements) results.push(await statement.run());
            sqlite.exec('COMMIT');
            return results;
        } catch (error) {
            sqlite.exec('ROLLBACK');
            throw error;
        }
    }
};
const worker = (await import(pathToFileURL(resolve(root, 'worker/src/index.js')).href)).default;
const workerEnv = { DB, INTERNAL_API_TOKEN: process.env.WORKER_INTERNAL_TOKEN, INGESTION_TOKEN: 'dev-ingestion-token' };

// ---------- adaptador de Vercel ----------
const ROUTES = {
    '/horario': ['horario-page', {}],
    '/horario/login': ['horario-page', { view: 'login' }],
    '/horario/admin': ['horario-page', { view: 'admin' }]
};
const handlers = new Map();
async function apiHandler(name) {
    if (!handlers.has(name)) handlers.set(name, (await import(pathToFileURL(resolve(root, 'api', `${name}.js`)).href)).default);
    return handlers.get(name);
}

function readRaw(request) {
    return new Promise(done => {
        const chunks = [];
        request.on('data', chunk => chunks.push(chunk));
        request.on('end', () => done(Buffer.concat(chunks).toString('utf8')));
    });
}

function vercelResponse(response) {
    response.status = code => { response.statusCode = code; return response; };
    response.json = value => {
        if (!response.getHeader('Content-Type')) response.setHeader('Content-Type', 'application/json; charset=utf-8');
        response.end(JSON.stringify(value));
        return response;
    };
    response.send = body => { response.end(body); return response; };
    response.redirect = (code, location) => { response.writeHead(code, { Location: location }); response.end(); return response; };
    return response;
}

const TYPES = { '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };

http.createServer(async (request, response) => {
    const url = new URL(request.url, origin);
    try {
        if (url.pathname.startsWith('/__worker/')) {
            const raw = await readRaw(request);
            const forwarded = new Request(`https://worker${url.pathname.slice('/__worker'.length)}${url.search}`, {
                method: request.method,
                headers: request.headers,
                body: ['GET', 'HEAD'].includes(request.method) ? undefined : raw
            });
            const result = await worker.fetch(forwarded, workerEnv);
            response.writeHead(result.status, Object.fromEntries(result.headers));
            return response.end(await result.text());
        }

        const route = ROUTES[url.pathname.replace(/\/$/, '')];
        const api = url.pathname.match(/^\/api\/(horario(?:-[a-z]+)?)$/);
        if (route || api) {
            const raw = await readRaw(request);
            const type = String(request.headers['content-type'] || '');
            request.query = { ...Object.fromEntries(url.searchParams), ...(route ? route[1] : {}) };
            request.body = type.includes('application/json') ? JSON.parse(raw || '{}')
                : type.includes('urlencoded') ? Object.fromEntries(new URLSearchParams(raw)) : raw;
            request.headers['x-forwarded-for'] ||= '127.0.0.1';
            request.headers['x-forwarded-proto'] = 'https'; // cookies __Host- con Secure, como en Vercel
            return (await apiHandler(route ? route[0] : api[1]))(request, vercelResponse(response));
        }

        if (url.pathname.startsWith('/horario/')) {
            const file = resolve(root, `.${decodeURIComponent(url.pathname)}`);
            if (!file.startsWith(resolve(root, 'horario'))) throw Object.assign(new Error('fuera'), { code: 'ENOENT' });
            response.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
            return response.end(await readFile(file));
        }
        response.writeHead(302, { Location: '/horario' });
        response.end();
    } catch (error) {
        response.statusCode = error.code === 'ENOENT' ? 404 : 500;
        if (response.statusCode === 500) console.error(error);
        response.end(response.statusCode === 404 ? 'No encontrado' : 'Error');
    }
}).listen(port, '127.0.0.1', () => {
    console.log(`Horario en local: ${origin}/horario`);
    console.log(`Propietario: ${process.env.HORARIO_USERNAME} · Admin: admin (HORARIO_ADMIN_PASSWORD)`);
});
