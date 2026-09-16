# Página de proyecto con visualizador persistente

## Contenido

Seis apartados: idea, origen, arquitectura de escritorio, ORBIS 2 en navegador, proceso de desarrollo y créditos. Fuentes: README de https://github.com/CODIGOAFRX/ORBIS, README del Demo Kit y orbis_live_blender/orbis_live_link.py. La adaptación web se describe a partir de su implementación. Se acredita el proyecto original a Pedro Jesús Gómez Pérez y David Erik García Arenas. La asistencia de IA se atribuye solo al desarrollo de esta versión web.

## Comportamiento

El visualizador inicial conserva el material, la deformación y el motor de audio de la versión restaurada. Al recorrer el primer 80 % de la altura de la ventana, el mismo canvas reduce su tamaño y se desplaza hacia la esquina inferior derecha. El contenido aparece debajo del primer viewport; la columna de texto deja una zona libre para el orbe, también en móvil. El reproductor y los ajustes permanecen accesibles. Pantalla completa oculta la historia y devuelve el canvas a tamaño completo; al salir se recupera la posición de lectura.

La actualización del scroll usa un listener pasivo con requestAnimationFrame, sin recrear React/Three.js ni reiniciar el audio. Durante el scroll, el lienzo conserva sus dimensiones internas y se mueve con translate3d y escala uniforme. Solo un cambio real de ventana redimensiona el buffer: ResizeObserver marca el cambio y el bucle de render lo aplica justo antes de dibujar, en el mismo fotograma. No se modifica la geometría ni su relación con las bandas.

## Comprobación

Build de TypeScript/Vite, controles y audio bajo CSP del portfolio, scroll real, persistencia del canvas, reproducción durante lectura, regreso al inicio, pantalla completa desde mitad de página, ajustes visibles y tamaños móviles de 390/320 px. Revisión visual en escritorio y móvil.

## Corrección de continuidad durante el scroll

El redimensionado continuo borraba el buffer después del dibujo y antes de que el navegador lo mostrara. La transición utiliza ahora el compositor CSS y mantiene el mismo centro y tamaño visual final. Una prueba recorre la transición en ambos sentidos, muestrea los píxeles de 48 fotogramas en escritorio y otros 48 en móvil, y exige cero fotogramas vacíos y cero cambios de tamaño del buffer. Se conserva la deformación, el material y el análisis de audio.
