# Validación — 15 de septiembre de 2026

- Build de producción: correcto (TypeScript + Vite).
- Vitest: 9 pruebas aprobadas. Clasificación de 80/800/6000 Hz a 44.1 y 48 kHz, silencio, dirección de la deformación y límites de escala.
- Playwright Chromium: 6 pruebas aprobadas sobre el build servido bajo /proyecto/orbis-2/ y la Content-Security-Policy del portfolio real.
- Casos: demo; play/pausa; buscar; volver al inicio; volumen/silencio; presets; pantalla completa; ayuda; WAV reales graves/medios/agudos; caída al silencio; archivo corrupto; sustitución y recuperación; fin y replay; drag-and-drop; ausencia de subidas; móvil de 390 px sin desbordamiento; repetición más allá del final; rechazo de archivos no sonoros sin bloquear la pausa.
- Revisión visual de capturas de escritorio, móvil y tonos graves/agudos.
- npm audit: 0 vulnerabilidades detectadas tras actualizar la herramienta de pruebas. Auditoría de dependencias de producción: 0.
- Después de la batería, se ajustó únicamente el CSS para ocultar anotaciones que podían coincidir con la esfera durante reproducción. La compilación final volvió a pasar.

Límites: validación automática con Chromium en Windows, no con dispositivos físicos ni Safari/Firefox. El rendimiento depende del hardware. No se ha publicado ni modificado remotamente el portfolio. Vite avisa del tamaño del paquete de renderizado 3D (~200 kB comprimidos del JavaScript principal); no es un error de compilación.
