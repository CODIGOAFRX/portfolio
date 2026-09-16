# Página de proyecto con visualizador persistente

## Contenido

Seis apartados: idea, origen, arquitectura de escritorio, ORBIS 2 en navegador, proceso de desarrollo y créditos. Fuentes: README de https://github.com/CODIGOAFRX/ORBIS, README del Demo Kit y orbis_live_blender/orbis_live_link.py. La adaptación web se describe a partir de su implementación. Se acredita el proyecto original a Pedro Jesús Gómez Pérez y David Erik García Arenas. La asistencia de IA se atribuye solo al desarrollo de esta versión web.

## Comportamiento

El visualizador inicial conserva el material, la deformación y el motor de audio de la versión restaurada. Al recorrer el primer 80 % de la altura de la ventana, el mismo canvas reduce su tamaño y se desplaza hacia la esquina inferior derecha. El contenido aparece debajo del primer viewport; la columna de texto deja una zona libre para el orbe, también en móvil. El reproductor y los ajustes permanecen accesibles. Pantalla completa oculta la historia y devuelve el canvas a tamaño completo; al salir se recupera la posición de lectura.

La actualización del scroll usa un listener pasivo con requestAnimationFrame, sin recrear React/Three.js ni reiniciar el audio. La cámara responde al nuevo tamaño de su contenedor con el ResizeObserver existente. No se modifica la geometría ni su relación con las bandas.

## Comprobación

Build de TypeScript/Vite, controles y audio bajo CSP del portfolio, scroll real, persistencia del canvas, reproducción durante lectura, regreso al inicio, pantalla completa desde mitad de página, ajustes visibles y tamaños móviles de 390/320 px. Revisión visual en escritorio y móvil.

Resultado: build correcto y seis pruebas de navegador aprobadas (cuatro de controles/audio, una de movil y una de scroll/pantalla completa). Los cuatro archivos del motor de visualizacion y audio coinciden exactamente con la version restaurada.
