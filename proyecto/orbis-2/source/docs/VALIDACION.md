# Validación — recuperación de la lectura espectral

- TypeScript y build Vite correctos.
- 16 pruebas matemáticas aprobadas. La malla real conserva el volumen con error relativo inferior a 10^-6 en 105 combinaciones.
- Graves moderados: ancho superior a 2,4 y altura inferior a 1,75 (esfera inicial: 2 × 2).
- Agudos moderados: altura superior a 2,5 y ancho inferior a 1,85.
- Agudos añadidos a una base de graves: aumento de altura superior al 30 %.
- Las señales puras producen un elipsoide completo, sin picos; silencio redondo y estacionario.
- WAV reproducidos en Chromium: graves 2,50 × 1,69; agudos 1,80 × 2,64; mezcla 2,25 × 2,23. Volumen constante en la malla renderizada.
- Prueba de reproducción de la demo y revisión visual de graves, agudos y mezcla.

El límite de la prueba extensa de controles es de 90 s para el renderizado de software del navegador de pruebas. La tasa de fotogramas depende de la GPU. Sin verificación en dispositivos físicos iOS/Android ni Safari/Firefox. No se incluye exportación de vídeo.

Las cinco pruebas de navegador de producción han pasado (cuatro en la batería y la de controles tras corregir el soporte HTTP Range del servidor de pruebas).
