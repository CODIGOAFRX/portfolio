# Tune? 0.4 — código fuente y analizador local

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
- `analysis-core.js`: comprobaciones espectrales, seguimiento de pulso propio,
  segunda opinión de Essentia y contraste de perfiles tonales EDMA/BGATE.
- `vendor/`: distribución recuperada de Essentia.js con C++ compilado a WASM.
  El motor informa `2.1-beta6-dev`. No se ha modificado su binario.

Web Audio decodifica y remuestrea a 44.1 kHz. El análisis tonal usa filtrado
antialias antes de bajar a 22.05 kHz, HPCP de 36 componentes y corrección de
desafinación. Las puntuaciones internas no son porcentajes de acierto. Se
descartan tonalidades sin evidencia suficiente.

## Cómo se mide el tempo

La cadena es la misma que usan librosa y madmom, escrita aquí para funcionar sin
red y sin dependencias:

1. **Envolvente de ataques.** A 22.05 kHz, ventanas de 1024 muestras con salto de
   220 (unas 100 tramas por segundo), banco de 42 filtros triangulares espaciados
   logarítmicamente entre 30 Hz y 10.5 kHz y flujo espectral SuperFlux (Böck y
   Widmer, 2013): subida de magnitud logarítmica contra la trama anterior suavizada
   en frecuencia, de modo que el vibrato y las subidas lentas no cuentan como
   ataque. Dos tramas reales viajan en una sola FFT compleja.
2. **Autocorrelación generalizada** (p = 0.5) promediada en ventanas solapadas de
   12 segundos, con realce armónico al estilo de Percival y Tzanetakis (2014). Cada
   múltiplo aporta como mucho lo que aporta el propio desfase, así que un compás
   entero no puede ganarle al pulso apoyándose en sus armónicos.
3. **Nivel métrico.** Se escoge el pulso más rápido que el audio sostiene igual de
   bien que el mejor candidato. Nunca se baja de nivel: informar del compás como si
   fuera el tempo es justo la lectura a mitad de velocidad que nadie quiere.
4. **Seguimiento de beats por programación dinámica** (Ellis, 2007) y mediana de
   tramos largos entre beats para fijar el valor con precisión.
5. **Redondeo al entero.** Los beats se producen en cifras redondas: 149.9 medido
   se informa como 150. El valor medido aparece en la nota del análisis.

RhythmExtractor2013 sigue ejecutándose sobre los 44.1 kHz originales, hasta 120
segundos y con rango 40–210 BPM, pero ya no puede vetar un tempo. Solo actúa como
segunda opinión: confirma la lectura o, cuando está seguro, desempata el nivel
métrico. Si el motor nativo falla, el analizador propio responde igualmente.

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
Mitad/doble son elecciones visibles del usuario.

La versión 0.3 devolvía «No hay un pulso claro» cuando la confianza de
RhythmExtractor2013 quedaba por debajo de 1, cosa habitual en beats densos y
rápidos: un archivo de 157 BPM no obtenía ningún tempo. Ese filtro ya no existe.
El analizador propio de la versión 0.4 mide el pulso por su cuenta y el motor
nativo pasa a ser una segunda opinión. También se ha retirado la corrección de
mitad/doble por ataques en la banda grave, sustituida por la decisión de nivel
métrico descrita arriba. Se han eliminado la dependencia de metadatos del elemento
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

Verificación del 10 de septiembre de 2026 (Node 24 y Edge en Windows):
21 pruebas de proyecto aprobadas y 4 pruebas de navegador aprobadas. El conjunto
sintético acertó el entero exacto en 60, 70, 100, 120, 157, 174 y 200 BPM y en las
24 tonalidades. Los patrones escritos de trap (130, 150, 157, 168), boom bap
(90, 96), house (124, 128) y medio tiempo (75, 140) devolvieron la negra correcta,
igual que un extracto de doce segundos. Silencio, ruido blanco continuo y seno
aislado devolvieron tonalidad/tempo sin determinar; la percusión de prueba devolvió
tempo sin tonalidad. Un beat sintético de 149.7 BPM se informó como 150.
La etapa de tempo añade cerca de dos segundos y medio sobre una pista de dos
minutos y medio frente a la versión 0.3.

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
