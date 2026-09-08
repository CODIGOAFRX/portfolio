// Local static preview with the SAME CSP rules as production (including the worker).
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = process.cwd();
const config = JSON.parse(await readFile(resolve(root, 'vercel.json'), 'utf8'));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.md': 'text/plain; charset=utf-8' };
const server = http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let path = resolve(root, '.' + pathname);
    if (path !== root && !path.startsWith(root + sep)) { response.writeHead(403).end(); return; }
    for (const rule of config.headers) {
      const matches = rule.source.includes('(') ? new RegExp('^' + rule.source + '$').test(pathname) : rule.source === pathname;
      if (matches) for (const header of rule.headers) response.setHeader(header.key, header.value);
    }
    try { if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html'); }
    catch { if (!extname(path)) path += '.html'; }
    const contents = await readFile(path);
    response.setHeader('Content-Type', types[extname(path)] || 'application/octet-stream');
    response.end(contents);
  } catch { response.writeHead(404).end('Not found'); }
});
server.listen(Number(process.env.PORT || 8000), '127.0.0.1', () => console.log('Tune preview: http://127.0.0.1:' + server.address().port + '/proyecto/tune-interrogacion/'));
