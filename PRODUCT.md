# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Reclutadores y tech leads que deciden si contratan a Pedro Gómez. Llegan desde LinkedIn, el CV o un
enlace directo y necesitan ver en segundos qué hace, que su trabajo está en producción y cómo contactarle.
Suelen revisar la web en escritorio durante un proceso de selección, y a veces en el móvil.

## Product Purpose

pedrogomez.dev es el portfolio de Pedro Gómez, desarrollador de software de principio a fin (backend con
Java, Spring Boot y Python; frontend con React y TypeScript; despliegue en Cloudflare y Vercel). Existe
para conseguir entrevistas y ofertas: el éxito es que quien lo visita entienda su perfil, pruebe sus
proyectos en vivo y le escriba o descargue un CV.

## Positioning

Todo lo que se enseña funciona: los proyectos son demos en producción dentro del propio dominio
(AFR-MIND, PERA ERP, AFORO, FinanX, Catábasis, Tune, ORBIS 2, SCORM a PDF) y productos reales para
clientes (Biblioteca y Leads de Estación Diseño, AfroPX Music, Historia de la Moda). La propia web es una muestra
de oficio: transiciones atadas al scroll y escenas hechas a mano, sin plantillas.

## Operating Context

- Dos CV descargables: `CV_Pedro_Java.pdf` y `CV_Pedro_Python.pdf`.
- Enlaces a GitHub (CODIGOAFRX) y LinkedIn.
- Zonas privadas en el mismo dominio: `/admin` (panel de candidaturas) y `/horario` (planificador de horario).
- Despliegue en Vercel (estático + funciones en `api/`) con Workers de Cloudflare para algunas demos.

## Capabilities and Constraints

- HTML, CSS y JavaScript sin frameworks ni dependencias en la portada; CSP estricta (`script-src 'self'`).
- Animaciones con scroll en la portada: intro «Corte transversal» (`intro.js`), red → línea del tiempo
  (`net.js`), trayectoria, portal de proyectos y órbitas del stack (`scenes.js`), globo de fondo (`script.js`).
- Todo debe funcionar sin JavaScript y con `prefers-reduced-motion` (página normal, sin fijados).
- Idioma: español de España.

## Evidence on Hand

- Proyectos en vivo bajo `/proyecto/*` y enlaces a sus repositorios.
- Premio al mejor expediente del DAM (MEDAC Nevada) y Máster en Big Data e IA (UCAM).
- Experiencia: Estación Diseño (2026–hoy), Kyndryl para El Corte Inglés (2025).
- Una recomendación real en la sección 07.
- No hay métricas de uso, clientes ni cifras que no estén ya en la web: no se inventan.

## Product Principles

1. Lo que se enseña, se puede probar: cada afirmación lleva a una demo, un repositorio o un producto en producción.
2. El oficio se demuestra en la propia web; cada animación cuenta algo del perfil, no decora.
3. Rápido de leer para quien contrata: nombre, perfil, prueba y contacto, sin rodeos.
4. Contenido honesto: datos, fechas y código reales, nada de relleno.

## Accessibility & Inclusion

Contenido real en HTML (los efectos son capas visuales `aria-hidden`), navegación por teclado, contraste
AA y alternativa completa con movimiento reducido.
