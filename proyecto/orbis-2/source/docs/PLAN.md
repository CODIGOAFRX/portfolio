# ORBIS 2 — revisión minimalista

## Requisitos de la revisión (16/09/2026)

- Lienzo que ocupa toda la ventana desde la entrada. Identidad ORBIS pequeña arriba a la izquierda y carga de archivo justo debajo.
- Fondo blanco y cromo neutro brillante por defecto. La esfera es el elemento central y mayoritario.
- Se elimina la barra lateral. Apariencia, colores, material, fondo, sensibilidad, fluidez, suavizado y medidores están en Ajustes, un panel inferior plegable. Reproductor compacto anclado abajo.
- La forma debe fluir sin inflarse con el volumen del audio. El movimiento vertical es contenido.
- Publicación directa en el portfolio una vez validado.

## Motor de deformación

La FFT y las envolventes de audio se conservan. La diferencia de graves/agudos dirige una pequeña escala lateral exponencial. La profundidad compensa el producto de escalas y el eje vertical solo recibe un cambio pequeño (máximo nominal 2,5%). Tres ondas espaciales continuas, acotadas y de distintas direcciones animan la superficie. Los desplazamientos locales en Y se atenúan.

Después de cada deformación se calcula el volumen real de la malla cerrada mediante la suma de tetraedros firmados. Todos los vértices reciben la corrección cúbica necesaria para recuperar el volumen de referencia. No basta con conservar el producto de escalas: esta corrección incluye el volumen añadido por las ondas locales.

Se elimina por completo la expansión global por RMS. El RMS no determina el tamaño de la figura. La cámara es ortográfica y su encuadre depende únicamente del viewport, nunca del audio. La malla tiene 128 × 96 segmentos y normales recalculadas. Las ondas se interpolan con el suavizado temporal de las bandas.

## Apariencia

Material metálico blanco (metalness 1, roughness 0,055), entorno HDR neutro generado localmente con bandas continuas de luz y reflejos oscuros, sin descargas externas. Se conserva Nácar y Malla y se permite elegir color y fondo. El ajuste predeterminado siempre empieza en blanco/cromo.

## Comprobación

Pruebas matemáticas sobre la malla de resolución real: silencio, graves, medios, agudos y señal mixta; tres sensibilidades y siete instantes. Se comprueba volumen, extensión vertical, límites laterales, continuidad de un fotograma al siguiente y ausencia de expansión por RMS.

Pruebas de navegador: lienzo blanco sin desplazamiento de página, disposición inferior de los ajustes, estilos y fondo, reproducción y controles, tonos WAV reales, volumen/cámara en el render de desarrollo, errores recuperables, arrastre local y viewports de 390 y 320 px. La batería se repite sobre el build bajo la subruta del portfolio con su CSP.

## Antecedentes

La investigación inicial revisó el README, analizador Python, puente de Blender, mockups y créditos de https://github.com/CODIGOAFRX/ORBIS. Esta revisión sustituye el diseño inicial de panel lateral oscuro y la expansión por RMS. Mantiene la arquitectura React + TypeScript + Three.js + Web Audio, la demo sintetizada, la privacidad local y el alojamiento estático.

La exportación de vídeo sigue fuera de esta revisión.
