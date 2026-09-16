# Validación de ORBIS 2.0.2 — 16/09/2026

- Build de producción: correcto (TypeScript + Vite).
- 14 pruebas matemáticas aprobadas. Incluyen señales por bandas y conservación del volumen de la malla real de 192 × 128 segmentos.
- 105 combinaciones de silencio/bandas/señal mixta, sensibilidad e instante: error relativo de volumen inferior a 10^-6 y variación de altura inferior al 8 %. El RMS por sí solo no modifica la geometría.
- Cámara ortográfica fija: no depende del audio. La instrumentación de desarrollo comprueba volumen real y encuadre durante tonos WAV reproducidos.
- 5 pruebas de navegador aprobadas sobre el build bajo /proyecto/orbis-2/ y la CSP del portfolio: lienzo blanco completo, panel de ajustes inferior, materiales/colores/fondo, controles de reproducción, tonos reales, recuperación ante archivos inválidos, bucle, arrastre local, móvil de 390 y 320 px.
- Revisión visual de escritorio, panel inferior, móvil y tonos graves/agudos.
- Resolución nítida estable, sin reducción automática del raster. Malla de 24.897 vértices. La nueva prueba de respuesta exige desplazamiento RMS superior al 5 % del radio con niveles musicales moderados. No se promete una tasa fija de fotogramas en cualquier equipo.
- npm audit: 0 vulnerabilidades detectadas.

Límites: navegador Chromium sobre Windows, sin verificación en dispositivos físicos iOS/Android ni Safari/Firefox. La exportación de vídeo no forma parte de esta revisión. Vite avisa del tamaño de la biblioteca 3D (~197 kB comprimidos del JavaScript principal); la compilación es correcta.
`nRevisión del cromado: la prueba extensa de controles superó el límite original de 45 s con renderizado de software; pasó al ejecutarla sola con un límite de 90 s (1,1 min). Las otras cuatro pruebas pasaron con el límite original.
