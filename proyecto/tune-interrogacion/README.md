# Tune? — build publicado

Estos ficheros son el **build de producción** de Tune?, recuperado desde
`https://www.pedrogomez.dev/proyecto/tune-interrogacion/` porque nunca llegaron
a este repositorio: la web publicada tenía la aplicación, pero `main` no.

Se conservan aquí para que un despliegue desde GitHub no borre la página.

**No edites estos ficheros a mano.** El código fuente (React + Vite) vive fuera
de este repositorio; cuando lo recuperes, sustituye esta carpeta por el
resultado de su `npm run build`.

Contenido:

- `index.html`, `assets/` — build de Vite.
- `analyzer.worker.js`, `analysis-core.js` — worker de análisis.
- `vendor/essentia-wasm.umd.js`, `vendor/essentia.js-core.min.js` — Essentia.js
  (wasm embebido). Ver licencia de Essentia.js: AGPL-3.0.

La cabecera CSP de `vercel.json` incluye `worker-src 'self'` y
`media-src 'self' blob:` porque esta página los necesita.
