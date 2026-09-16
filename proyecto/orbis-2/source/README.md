# ORBIS 2 — El sonido toma forma

Prototipo web de ORBIS para Pedro Gómez. React + TypeScript + Three.js + Web Audio API. Procesa audio local y transforma su espectro en una esfera 3D: los graves la expanden lateralmente, los agudos la recogen y los medios crean ondas fluidas. El volumen geométrico se conserva y la cámara permanece fija.

## Empezar

Requisito: Node.js 22.12 o posterior (desarrollado con Node 24).

```sh
npm ci
npm run dev
```

Abre la dirección que muestra Vite. Pulsa **Probar demo**, después **Reproducir**, o selecciona/arrastra un archivo. La demo «Órbita nocturna» es una composición sintetizada de 32 segundos creada para este prototipo; no es una canción de Pedro ni una grabación ajena.

```sh
npm run build        # compilación estática en dist/
npm run preview      # revisar el resultado compilado
npm test             # contrato de análisis y deformación
npx playwright install chromium
npm run test:e2e     # interacción y audio real en Chromium
npm run test:production # misma batería, build bajo /proyecto/orbis-2/ con CSP del portfolio
```

## Incluye

- Carga por selector o arrastrar y soltar. El archivo nunca se envía a un servidor.
- Reproducir, pausar, volver al inicio, buscar posición, repetir, volumen y silencio.
- Esfera 3D de malla deformable, iluminación y reflejos procedurales.
- Lienzo blanco a ventana completa, esfera cromada y ajustes desplegables en la parte inferior. Tres presets: Cromo, Nácar y Trama; colores libres y fondo blanco u oscuro.
- Sensibilidad, movimiento y suavizado independientes.
- Medidores de tres bandas dentro de Ajustes. No se presentan como una valoración de la mezcla.
- Vista inmersiva permanente y pantalla completa real cuando el navegador la admite.
- Atajos: Espacio (play/pausa), F (pantalla completa), Esc (salir). Los atajos no interfieren con campos ni botones enfocados.
- Diseño móvil, controles semánticos, foco visible, reducción del movimiento ambiental y mensajes de error.
- Fuentes incluidas localmente: la app no depende de Google Fonts, APIs ni cuentas.

## Diseño y arquitectura

Consulta [PLAN.md](docs/PLAN.md) para las decisiones y el mapeo del prototipo original a la web.

```text
Archivo local / demo
  → HTMLAudioElement
  → MediaElementAudioSourceNode
  → AnalyserNode (FFT 4096)
  → GainNode (volumen de escucha)
  → altavoces

AnalyserNode → energía por bandas + RMS
            → envolventes de ataque/relajación
            → ondas suaves + compensación del volumen de la malla
            → Three.js
```

El análisis ocurre antes del control de volumen. Silenciar la escucha no detiene la visualización. Al pausar, las bandas vuelven suavemente a cero. El análisis y la geometría se actualizan en el bucle de renderizado, mientras la UI de medidores se refresca a 10 Hz. El navegador detiene el renderizado de pestañas ocultas; la reproducción puede continuar.

### Archivos principales

- `src/audio.ts`: ciclo de vida del audio, URLs locales, grafo Web Audio y suavizado.
- `src/analysis.ts`: análisis matemático y contrato graves/agudos → geometría.
- `src/deformation.ts`: ondas fluidas y normalización exacta del volumen por tetraedros de la malla cerrada.
- `src/Orb.tsx`: cámara ortográfica fija, reflejos de cielo y mar generados en código, materiales y recursos GPU.
- `src/App.tsx`: sesión, controles, carga, accesibilidad y reproducción.
- `src/style.css`: diseño adaptable.
- `scripts/generate-demo.mjs`: genera de forma reproducible `public/demo.wav`.
- `docs/INTEGRACION.md`: instalación en el portfolio real.
- `docs/portfolio-card.json`: contenido listo para la tarjeta del portfolio.

## Límites de esta versión

- Requiere WebGL 2 y Web Audio. Se muestra un aviso cuando no se puede crear el contexto gráfico. El formato y códec aceptados dependen del navegador; MP3 y WAV PCM son los formatos de referencia. No se limita artificialmente el tamaño del archivo: el elemento de audio evita decodificarlo entero en memoria JavaScript.
- No incluye exportación de vídeo, micrófono, captura del audio del sistema, análisis BPM/tonalidad, historial ni backend. La exportación vertical pertenece a la siguiente fase del objetivo.
- Pruebas automáticas sobre Chromium en Windows y anchuras de escritorio y móvil. No se han validado dispositivos físicos iOS/Safari ni Firefox; el soporte de pantalla completa varía y se conserva un modo inmersivo como alternativa.
- La frecuencia dominante es una lectura de bin FFT, no una estimación de tonalidad. Se calcula internamente, sin presentarla como afinador.
- Las bandas son indicadores visuales normalizados con ganancia artística y no porcentajes de reparto espectral ni LUFS. RMS procede de la señal digital antes del volumen de escucha.

## Origen y créditos

El proyecto se ha preparado tras revisar [pedrogomez.dev](https://www.pedrogomez.dev/), [CODIGOAFRX/ORBIS](https://github.com/CODIGOAFRX/ORBIS) y la estructura pública de [CODIGOAFRX/portfolio](https://github.com/CODIGOAFRX/portfolio).

ORBIS original: **Pedro Jesús Gómez Pérez y David Erik García Arenas**, proyecto final DAM 2024/2025, MEDAC Nevada. El repositorio original declara una licencia académica con derechos reservados. Este prototipo reimplementa la experiencia en la web; no distribuye Blender, CRIWARE, grabaciones ni ejecutables del proyecto original.

Las licencias de las dependencias distribuidas se incluyen en `public/licenses/` y se copian al build.


Reflejos de cielo y mar generados en código, sin imágenes urbanas. Graves: ancho y aplastamiento; agudos: estiramiento vertical; medios: ondulación secundaria. No se envía audio a servicios externos.
