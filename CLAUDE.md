# Portfolio de Pedro Gómez (pedrogomez.dev)

Web estática (HTML, CSS y JavaScript sin frameworks) con funciones de Vercel en `api/` y un Worker de
Cloudflare en `worker/`. Todo el texto de la web y de los comentarios va en español de España.

- Contexto de producto: [PRODUCT.md](PRODUCT.md). Sistema visual: [DESIGN.md](DESIGN.md).
- Vista local con las mismas cabeceras y reescrituras que Vercel: `node scripts/serve-local.mjs` (puerto 8010).
- Comprobaciones: `npm run check` (sintaxis). Tests: en Windows `node --test` se queda colgado; ejecuta
  cada archivo con `node tests/<archivo>.test.mjs`.
- Cada cambio en un `.js` o `.css` de la portada sube su `?v=` en `index.html` para romper la caché.

## Escenas de la portada

| Archivo | Escena |
|---|---|
| `intro-boot.js` + `intro.js` | Intro «Corte transversal»: el nombre se abre y enseña las capas de una petición real de AFORO |
| `net.js` | Transición entre AFR-MIND y la trayectoria: la red del CV se ordena en una línea del tiempo |
| `scenes.js` | Trayectoria, portal de proyectos y órbitas del stack |
| `script.js` | Globo de fondo (`WireGlobe`), navegación y proyectos |

Reglas: todas las escenas avanzan y retroceden con la posición del scroll (nada que se reproduzca solo),
funcionan sin JavaScript y tienen alternativa con `prefers-reduced-motion`.

## Skills de este proyecto

Instaladas en `.claude/skills/` (proyecto) o a nivel de usuario. Úsalas así:

| Skill | Dónde | Cuándo usarla |
|---|---|---|
| `impeccable` | proyecto | Para cualquier trabajo de diseño o UI. Usa `/impeccable audit` antes de dar un diseño por terminado y `/impeccable polish` como pasada final. Lee `PRODUCT.md` y `DESIGN.md`. Su hook revisa los archivos de UI tras cada edición. |
| `design-taste-frontend` (taste-skill) | proyecto y usuario | Al diseñar o rediseñar secciones públicas (hero, landing, proyecto): dirección de arte y reglas anti «hecho por IA». |
| `image-to-code` | proyecto | Cuando el punto de partida es una captura o un boceto. |
| `ui-ux-pro-max` | usuario | Para consultar paletas, tipografías, guías de UX y presets de animación antes de decidir. |
| `web-design-guidelines` | proyecto y usuario | Al revisar UI: «revisa la accesibilidad», «audita el diseño». |
| `playwright-cli` | proyecto y usuario | Para abrir la web en un navegador real, hacer capturas y probar flujos (`npx playwright cli <comando>`). |
| `awesome-design` | proyecto | Sólo si se decide adoptar el DESIGN.md de una marca concreta. Ahora mismo se sigue el lenguaje propio de la web (ver `DESIGN.md`). |

Subagentes en `.claude/agents/`: `frontend-developer`, `javascript-pro`, `ui-designer`,
`accessibility-tester` y `code-reviewer` (de VoltAgent), más los de impeccable (`impeccable-*`).

Antes de dar por terminado un cambio visual:

1. Sigue `DESIGN.md` (paleta blanco y negro, un único rojo `#e5322d` por escena, Georgia + Arial).
2. Comprueba escritorio (1440×900) y móvil (390×844).
3. Pasa `/impeccable audit` sobre lo que has tocado.
