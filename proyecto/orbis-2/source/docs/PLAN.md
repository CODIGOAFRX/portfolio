# Plan y decisiones de ORBIS 2

## 1. Investigación del original

Referencias revisadas el 15 de septiembre de 2026:

- Portfolio: https://www.pedrogomez.dev/ y su `script.js`, donde ORBIS enlaza a `CODIGOAFRX/ORBIS`.
- `README.md` raíz y `Orbis_Demo_Kit/README.txt`: prototipo alpha orientado a visualizar audio como geometría orgánica.
- `proyecto_integrado-main/proyecto Integrado/audio_analyzer.py`: captura con SoundDevice, FFT con Hann, RMS y frecuencia dominante con interpolación.
- `orbis_live_blender/orbis_live_link.py`: puente JSON cada 100 ms, parámetros de Geometry Nodes, 12 bandas y balance de amplitud entre graves, medios y agudos.
- `Orbis_Demo_Kit/renders/orbis_pc_mockup.png`: esfera central, controles laterales, reproductor y análisis. Se conserva esa organización y se simplifica su alcance.
- Portfolio actual: tipografía editorial, diseño limpio y esfera como identidad. La versión ORBIS utiliza una superficie oscura de trabajo, acento cobre y tipografía serif secundaria, manteniendo el enlace al portfolio.

## 2. Stack elegido

**React + TypeScript + Vite + Three.js + Web Audio API.** No se necesita Python para esta primera versión: el navegador dispone de análisis FFT y renderizado 3D. Así el resultado es estático, funciona bajo una subcarpeta del portfolio y evita subida de archivos, servidores, sockets, dependencias de Blender e instalación para el visitante.

| Original                          | Versión web                                        |
| --------------------------------- | -------------------------------------------------- |
| SoundDevice / entrada del sistema | Archivo local reproducido por HTMLAudioElement     |
| NumPy, FFT, RMS                   | AnalyserNode + análisis en TypeScript              |
| JSON / socket cada 100 ms         | Memoria compartida entre audio y renderizador      |
| Geometry Nodes de Blender         | Malla Three.js deformada en tiempo real            |
| 12 bandas de referencia           | 3 zonas contiguas que explican la forma            |
| Mockup con controles              | Controles funcionales de reproducción y apariencia |

## 3. Contrato sonoro y visual

- Graves: **20–250 Hz**. Aumentan X y Z y reducen Y.
- Medios: **250–2000 Hz**. Modulan el relieve con ondas espaciales suaves.
- Agudos: **2000–20000 Hz**, hasta Nyquist. Reducen X/Z y aumentan Y.
- RMS: expansión global limitada para expresar la energía.
- La suma de potencia se hace en dominio lineal; no se promedian dB. Se usa una ganancia visual para compensar la ventana del analizador.
- Attack y release dependientes del tiempo evitan tirones y dan una caída natural. El control de suavizado modifica ambos.
- Eje Y fijo: la rotación solo gira en Y para no confundir «ancho» y «alto».
- Escalas y desplazamiento limitados para evitar inversión de la malla. La cámara se aleja si la deformación extrema lo requiere.
- Sensibilidad no modifica el volumen. Movimiento controla giro y desplazamiento de ondas; no impide la deformación del audio cuando está a cero.

No se copian las referencias de «buena mezcla» del prototipo antiguo: una forma no basta para valorar objetivamente una mezcla. Las tres bandas son una nueva agrupación continua, no equivalentes bin a bin a las 12 lecturas antiguas.

## 4. Entrega de primera fase

1. App funcional con carga, demo y reproducción.
2. Esfera reactiva y controles completos.
3. Estados inicial, carga, reproducción, pausa, fin y error.
4. Diseño adaptable y modo inmersivo.
5. Verificación matemática con señales controladas y pruebas de navegador con archivos WAV reales.
6. Build estático, fuentes locales y documentación para integración en `/proyecto/orbis-2/`.

## 5. Segunda fase

Exportación de vídeo vertical: plantear una resolución fija, composición 9:16, captura de canvas y audio del grafo, selección de códecs mediante MediaRecorder, sincronización, progreso, cancelación y pruebas en varios navegadores. Si se requiere exportación determinista independiente del rendimiento, evaluar renderizado por fotogramas y codificación en un worker o servicio específico. No forma parte de este prototipo.
