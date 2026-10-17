// Vista local del portfolio con las mismas reglas que Vercel (vercel.json): cabeceras y CSP,
// URLs sin .html y reescrituras. Además hace de proxy de la API de la demo de PERA ERP
// (/proyecto/pera-erp/api/* → PERA_API_URL, por defecto la pasarela local en el 8080),
// que en producción será una reescritura de Vercel hacia el servidor de PERA.
//
//   node scripts/serve-local.mjs            → http://127.0.0.1:8010
//   PORT=8000 PERA_API_URL=http://localhost:8080 node scripts/serve-local.mjs
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = process.cwd();
const config = JSON.parse(await readFile(resolve(root, 'vercel.json'), 'utf8'));
const peraApi = (process.env.PERA_API_URL || 'http://localhost:8080').replace(/\/$/, '');
const PERA_API_PREFIX = '/proyecto/pera-erp/api/';
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.woff2': 'font/woff2', '.woff': 'font/woff', '.wav': 'audio/wav',
  '.txt': 'text/plain; charset=utf-8', '.md': 'text/plain; charset=utf-8', '.pdf': 'application/pdf',
};

// Patrón de Vercel (:param, :path*, (regex)) → expresión regular.
function sourcePattern(source) {
  const body = source
    .replace(/:(\w+)\*/g, '(?<$1>.*)')
    .replace(/:(\w+)/g, '(?<$1>[^/]+)');
  return new RegExp('^' + body + '$');
}

function applyHeaders(pathname, response) {
  for (const rule of config.headers ?? []) {
    if (sourcePattern(rule.source).test(pathname)) for (const header of rule.headers) response.setHeader(header.key, header.value);
  }
}

function rewrite(pathname) {
  for (const rule of config.rewrites ?? []) {
    if (/^https?:/.test(rule.destination)) continue;
    const match = sourcePattern(rule.source).exec(pathname);
    if (match) return rule.destination.replace(/:(\w+)\*?/g, (_, name) => match.groups?.[name] ?? '');
  }
  return null;
}

async function findFile(pathname) {
  let path = resolve(root, '.' + pathname);
  if (path !== root && !path.startsWith(root + sep)) return null;
  try {
    if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
    await stat(path);
    return path;
  } catch {
    if (!extname(path)) {
      try { await stat(path + '.html'); return path + '.html'; } catch { return null; }
    }
    return null;
  }
}

async function proxyApi(request, response, pathname, search) {
  const target = peraApi + '/api/' + pathname.slice(PERA_API_PREFIX.length) + search;
  const headers = { ...request.headers };
  // Petición de servidor a servidor: sin el origen del navegador, que la pasarela rechazaría por
  // CORS. En producción hay que añadir el dominio del portfolio a CORS_ALLOWED_ORIGINS de PERA.
  delete headers.host;
  delete headers.origin;
  delete headers.referer;
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  try {
    const upstream = await fetch(target, { method: request.method, headers, body: chunks.length ? Buffer.concat(chunks) : undefined });
    const passthrough = {};
    upstream.headers.forEach((value, key) => { if (!['content-encoding', 'transfer-encoding', 'connection'].includes(key)) passthrough[key] = value; });
    response.writeHead(upstream.status, passthrough);
    response.end(Buffer.from(await upstream.arrayBuffer()));
  } catch {
    response.writeHead(502, { 'Content-Type': 'application/problem+json' });
    response.end(JSON.stringify({ title: 'PERA no responde', status: 502, detail: `No hay servidor en ${peraApi}.` }));
  }
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, 'http://localhost');
  const pathname = decodeURIComponent(url.pathname);
  if (pathname.startsWith(PERA_API_PREFIX)) return proxyApi(request, response, pathname, url.search);
  applyHeaders(pathname, response);
  // Como en Vercel: primero el fichero que exista; si no, las reescrituras.
  let path = await findFile(pathname);
  if (!path) {
    const rewritten = rewrite(pathname);
    if (rewritten) path = await findFile(rewritten);
  }
  if (!path) { response.writeHead(404).end('Not found'); return; }
  const contents = await readFile(path);
  response.setHeader('Content-Type', types[extname(path).toLowerCase()] || 'application/octet-stream');
  response.end(contents);
});

server.listen(Number(process.env.PORT || 8010), '127.0.0.1', () => {
  const base = 'http://127.0.0.1:' + server.address().port;
  console.log(`Portfolio: ${base}/`);
  console.log(`PERA ERP:  ${base}/proyecto/pera-erp/  (API de la demo → ${peraApi})`);
});
