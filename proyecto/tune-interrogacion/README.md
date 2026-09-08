# Tune? 0.3 — código fuente y analizador local

La interfaz es ahora HTML/CSS/JavaScript mantenible en este repositorio, sin
necesitar el proyecto React/Vite original. Se conserva el diseño anterior.
El bundle React de `assets/` queda como copia histórica y no se carga.

## Ejecutar y comprobar

Desde la raíz del portfolio, con Node 24:

```sh
npm ci
npm run preview:tune
# http://127.0.0.1:8000/proyecto/tune-interrogacion/
npm test
npm run check
npm run test:tune:browser
```

Detén la vista previa antes de las pruebas de navegador: estas arrancan su
propio servidor con las cabeceras de `vercel.json`. En Windows usan Edge;
en Linux/macOS instala Chromium con `npx playwright install chromium`.
No abras `index.html` mediante `file://`: los workers necesitan HTTP(S).
No hay un paso de build. Vercel publica estos archivos estáticos directamente.

## Arquitectura

- `index.html`, `app.js`, `app.css`: interfaz, estados, cancelación, reproducción
  local, resultados y elección explícita de mitad/doble tempo.
- `audio-input.js`: límites, conversión mono con protección contra cancelación
  de fase, selección de hasta 180 segundos después del silencio inicial.
- `analyzer.worker.js`: carga del motor, progreso, errores y ejecución aislada.
- `analysis-core.js`: comprobaciones espectrales, tempo multifeature, refinamiento
  por intervalos de beats y contraste de perfiles tonales EDMA/BGATE.
- `vendor/`: distribución recuperada de Essentia.js con C++ compilado a WASM.
  El motor informa `2.1-beta6-dev`. No se ha modificado su binario.

Web Audio decodifica y remuestrea a 44.1 kHz. RhythmExtractor2013 recibe esa
frecuencia y hasta 120 segundos, con rango de búsqueda 40–208 BPM. El análisis
tonal usa filtrado antialias antes de bajar a 22.05 kHz, HPCP de 36 componentes
y corrección de desafinación. Las puntuaciones internas no son porcentajes de
acierto. Se descartan tonalidades sin evidencia suficiente y tempos débiles.
Una comprobación independiente de ataques en la banda grave puede corregir
mitad/doble tempo si al menos 12 ataques son regulares y el 90 % de sus intervalos
coinciden dentro del 8 %. Esas correcciones se siguen indicando como ambiguas.

## Fallos corregidos

La CSP publicada (`script-src 'self'`) impedía arrancar el motor. Esta versión
antigua de Emscripten requiere tanto WebAssembly como `new Function` para sus
bindings. Por eso `wasm-unsafe-eval` por sí solo no basta: `unsafe-eval` se permite
**solo en la respuesta HTTP del worker exacto**. El documento, el resto de Tune,
las API y el portfolio conservan su CSP estricta. Las reglas son mutuamente
excluyentes para evitar aplicar dos políticas incompatibles al mismo recurso.
Una futura recompilación de Essentia con Emscripten sin ejecución dinámica
permitiría reducir este permiso; no se deben parchear a ciegas los bindings.

El tempo se forzaba dos veces al rango 90–210: en el motor y en la interfaz.
Ahora se muestra la estimación decimal original. Mitad/doble son elecciones
visibles del usuario. Se han eliminado la dependencia de metadatos del elemento
Audio (algunos contenedores reportan duración infinita), los errores de inicio
sin capturar y el enlace roto a `source.html`.

## Validación y límites

Las pruebas ejecutan el WASM real con progresiones sintéticas conocidas,
transposiciones mayores/menores, tempos, silencio, ruido, seno aislado,
percusión, estéreo en contrafase e introducciones silenciosas. Playwright prueba
además la CSP real, decodificación a 48 kHz, archivos corruptos, fallo de carga,
cancelación, reintento y diseño móvil. Las señales se generan de forma
determinista en `tests/helpers/tune-engine.mjs`.

Estas pruebas son regresiones técnicas, **no un benchmark de canciones reales**
ni evidencia de superioridad frente a Tunebat. El modo mayor/menor, los relativos,
la mitad/doble velocidad, los cambios de tonalidad y la música sin pulso estable
siguen siendo ambiguos. La comprobación de evidencia tonal es heurística.
El análisis está limitado a un fragmento continuo, no resume toda una canción
de 10 minutos. Los formatos dependen de los códecs del navegador; no hay decoder
FFmpeg incluido. Máximo 50 MB, 6–600 segundos, mono o estéreo.

Verificación del 8 de septiembre de 2026 (Node 24 y Edge en Windows):
19 pruebas de proyecto aprobadas y 4 pruebas de navegador aprobadas. El conjunto
sintético pasó las 24 tonalidades y 60, 70, 100, 120, 174 y 200 BPM con desviación
menor de 0.5 BPM. Silencio, ruido blanco continuo y seno aislado devolvieron
tonalidad/tempo sin determinar; la percusión de prueba devolvió tempo sin
tonalidad. También se ejecutó el evaluador de manifest con una señal de 70 BPM.

Para comparar versiones con tus propios audios etiquetados:

```sh
npm run preview:tune
# En otra terminal:
node scripts/benchmark-tune.mjs ruta/al/manifest.json
```

El manifest es una lista como `[{"file":"audio.wav","bpm":120,"key":"C major"}]`.
Las rutas de audio son relativas al manifest. El informe separa acierto de tempo
estricto, acierto admitiendo mitad/doble y tonalidad exacta. Los archivos nunca
se suben. Conserva un conjunto de evaluación independiente del usado al ajustar
los umbrales, e incluye géneros variados y etiquetas revisadas por músicos.

## Fuentes y licencias

Tune: AGPL-3.0-or-later, como el núcleo anterior. Essentia: Music Technology Group,
Universitat Pompeu Fabra, AGPL-3.0-or-later. Consulta `source.html` y
`LICENSE-AGPL-3.0.txt`; conserva los avisos de los archivos de `vendor/`.

- https://github.com/MTG/essentia.js
- https://github.com/MTG/essentia
- https://essentia.upf.edu/reference/std_KeyExtractor.html
- https://essentia.upf.edu/reference/std_RhythmExtractor2013.html
