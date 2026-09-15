# ORBIS 2

Aplicación estática publicada en `/proyecto/orbis-2/`. React, TypeScript, Three.js y Web Audio API; los archivos de audio se procesan localmente.

El código editable y las pruebas se conservan en `source/`. Para actualizar:

```sh
cd proyecto/orbis-2/source
npm ci
npm run build
npm test
```

Copia el contenido de `source/dist/` al directorio superior `proyecto/orbis-2/`, conservando `source/` y este README. No publiques `node_modules/` ni los resultados de las pruebas.

La ruta usa barra final porque los assets y la demo tienen URLs relativas. Los permisos CSP del portfolio ya permiten el audio local mediante `blob:`; no requiere servidor de audio ni cambios de permisos.

Origen: ORBIS, de Pedro Jesús Gómez Pérez y David Erik García Arenas. Créditos, plan y límites de la versión en `source/README.md` y `source/docs/`.
