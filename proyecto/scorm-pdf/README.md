# SCORM a PDF

Aplicación estática publicada en `/proyecto/scorm-pdf/`.

El código fuente y las pruebas se conservan en `source/`; Vercel excluye esa carpeta del despliegue. Los cursos privados y los PDF de pruebas no forman parte del repositorio.

Para actualizar el bundle desde `source/`:

```sh
npm ci
npm run build -- --base=/proyecto/scorm-pdf/
```

Copiar el contenido generado en `source/dist/` a esta carpeta y revisar los cambios antes de publicar. La aplicación procesa archivos e imágenes localmente. La política CSP necesita `blob:` en `img-src` para decodificar las imágenes del ZIP; no requiere `unsafe-eval`.
