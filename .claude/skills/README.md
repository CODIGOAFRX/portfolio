# Skills del proyecto

Skills de diseño y pruebas que Claude Code carga en este proyecto. Son copias revisadas de sus
repositorios originales (licencias en cada carpeta). Para actualizarlas, se vuelven a copiar desde el
commit indicado o uno posterior, revisando antes el contenido.

| Carpeta | Origen | Commit |
|---|---|---|
| `design-taste-frontend/` | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) `skills/taste-skill` | `717446e` |
| `image-to-code/` | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) `skills/image-to-code-skill` | `717446e` |
| `web-design-guidelines/` | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) `skills/web-design-guidelines` (MIT según su README) | `063bee9` |
| `playwright-cli/` | [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) `skills/playwright-cli` | `b85c7a7` |
| `awesome-design/` | [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) `design-md/` (el `SKILL.md` es propio) | `13be5c0` |

Notas:

- `playwright-cli` usa el Playwright del propio proyecto: `npx playwright cli <comando>`; no hace falta
  instalar nada global.
- `image-to-code` está pensada para entornos con generación de imágenes; sin ella sirve como guía de
  análisis visual.
- Las reglas de las skills son de terceros y genéricas: se aplican con criterio sobre el lenguaje ya
  definido de la web (editorial, blanco y negro, un único acento rojo).
- Esta carpeta no se despliega (`.vercelignore`).
