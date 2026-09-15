# SCORM → PDF

Aplicación web local y estática para convertir cursos Rise y SCORM HTML en un temario PDF. Diseño basado en el portfolio de Pedro Gómez: blanco, negro, Georgia y Arial. El ZIP no sale del navegador y no se ejecutan los scripts del curso.

## Desarrollo

Requiere Node 22.12+ (probado con Node 24).

```powershell
npm install
npm run dev
```

Abrir http://127.0.0.1:5174. Para reiniciar en Windows también se puede ejecutar `iniciar.cmd`.

```powershell
npm run build
npm run preview
```

`dist/` es autónomo y usa rutas relativas. Se puede alojar dentro de una subcarpeta del portfolio una vez aprobado el funcionamiento. No se ha publicado ni se ha modificado el contenido del portfolio.

## Compatibilidad

- Rise con `runtime-data.js` JSONP/base64: textos, listas, imágenes locales, tarjetas (ambas caras), acordeones, pestañas, procesos ordenados como introducción/pasos/resumen y transcripciones disponibles.
- Preguntas de opción simple/múltiple, verdadero/falso, relación de conceptos y completar huecos. Actividades en anexo y soluciones opcionales con feedback del original.
- SCORM HTML: páginas estáticas referenciadas en el manifiesto, con títulos, texto, tablas e imágenes locales. Aviso de extracción parcial para contenido dinámico.
- Portada, título editable, índice con páginas y enlaces, selección de lecciones, imágenes opcionales, numeración de páginas y notas de conversión.
- Paquetes hasta 250 MB, máximo 15.000 archivos y 600 MB descomprimidos. No se persisten cursos en disco o almacenamiento web.

Storyline, Captivate, versiones de Rise con otra codificación, escenarios, contenido embebido y actividades complejas pueden necesitar adaptadores específicos. No se aplica OCR ni transcripción automática. Los vídeos y audios se referencian; no se incorporan como multimedia reproducible. La vista previa muestra contenido, no paginación exacta.

## Pruebas

```powershell
npx playwright install chromium
npm test
```

Para incluir el curso real, establecer `SCORM_FIXTURE` con la ruta a su ZIP antes de ejecutar `npm test`. El archivo de la escuela no se incorpora al proyecto. Las pruebas comprueban errores de ZIP, sanitización, HTML/tablas, selección, descarga, vista móvil y, con el fixture, seis lecciones, 18 imágenes y 27 preguntas.

`python scripts/audit_pdf.py RUTA_ZIP tmp/course.pdf` comprueba que los fragmentos textuales publicados aparecen en la exportación con soluciones y renderiza las páginas para revisión visual (requiere PyMuPDF).

## Estructura

- `src/extract.ts`: extracción y normalización; lee campos de contenido explícitos y trata el paquete como datos.
- `src/model.ts`: modelo común de cursos, lecciones, bloques y preguntas.
- `src/document.ts`: organización del documento y vista previa segura.
- `src/pdf.ts`: exportación PDF con pdfmake, fuentes embebidas y recursos locales.
- `src/main.ts` y `src/style.css`: interfaz accesible y adaptable a móvil.
- `tests/app.spec.ts`: pruebas de navegador.

Se usa TypeScript con Vite y DOM nativo; esta pantalla no necesita un framework de componentes. El motor PDF y sus fuentes se cargan solo al descargar.

## Estado de integración

Portfolio actualizado con `git pull --ff-only`: `8347d52` → `d232fff` el 15 de septiembre de 2026. La publicación está pendiente de aprobación del usuario tras probar la aplicación en local.
