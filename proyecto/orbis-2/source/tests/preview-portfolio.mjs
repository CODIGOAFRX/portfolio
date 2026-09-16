import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve("dist");
const prefix = "/proyecto/orbis-2/";
const csp =
  "default-src 'self'; script-src 'self'; worker-src 'self'; media-src 'self' blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'";
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
};
createServer(async (req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;
  if (pathname === prefix.slice(0, -1)) {
    res.writeHead(301, { Location: prefix });
    res.end();
    return;
  }
  if (!pathname.startsWith(prefix)) {
    res.writeHead(404);
    res.end();
    return;
  }
  const path = resolve(
    root,
    decodeURIComponent(pathname.slice(prefix.length)) || "index.html",
  );
  if (!path.startsWith(root + sep)) {
    res.writeHead(403);
    res.end();
    return;
  }
  try {
    const body = await readFile(path);
    res.writeHead(200, {
      "Content-Type": mime[extname(path)] || "application/octet-stream",
      "Content-Length": body.length,
      "Content-Security-Policy": csp,
      "X-Content-Type-Options": "nosniff",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end();
  }
}).listen(4175, "127.0.0.1", () =>
  console.log("Portfolio preview: http://127.0.0.1:4175" + prefix),
);
