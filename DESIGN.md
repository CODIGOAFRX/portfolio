---
name: Pedro Gómez — portfolio
description: Editorial en blanco y negro, un único acento rojo y escenas atadas al scroll.
colors:
  paper: "#ffffff"
  paper-soft: "#fafafa"
  surface-soft: "#f5f5f2"
  surface-warm: "#eeece7"
  ink: "#111111"
  ink-secondary: "#666666"
  ink-tertiary: "#a0a0a0"
  rule: "#eeeeee"
  night: "#0a0a0a"
  night-ink: "#f1f1ef"
  accent: "#e5322d"
  pera-green: "#13261b"
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(5rem, 9vw, 10.8rem)"
    fontWeight: 400
    lineHeight: 0.84
    letterSpacing: "-0.065em"
  heading:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "0.05em"
  code:
    fontFamily: "ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: "0.9rem"
rounded:
  none: "0"
  dot: "50%"
spacing:
  page-x: "6vw"
  section-y: "10vh"
components:
  text-link:
    textColor: "{colors.ink}"
    padding: "0 0 0.25rem"
  text-link-accent:
    textColor: "{colors.ink}"
  navbar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "1.5rem 6vw"
---

## Overview

Una revista impresa en una pantalla: papel blanco, tinta negra, una serif grande para los titulares y una
sans neutra para el texto. El color está racionado: un único rojo (`accent`) marca lo que importa en cada
escena (el punto de «en producción», el trazo de una petición, la etapa «Hoy»). Los proyectos destacados
tienen su propio mundo (el negro de AFR-MIND, el verde de PERA ERP, el papel antiguo de Catábasis) y
vuelven siempre al papel blanco.

La personalidad está en el movimiento: escenas fijadas que avanzan y retroceden exactamente con el scroll,
nunca animaciones que se disparan solas.

## Colors

- `paper` / `paper-soft`: fondo general y de la trayectoria.
- `ink`, `ink-secondary`, `ink-tertiary`: texto principal, secundario y metadatos.
- `night` / `night-ink`: bloque de AFR-MIND y arranque de la transición red → línea del tiempo.
- `accent` (#e5322d): sólo para un elemento por escena. Nunca en fondos grandes ni en texto largo.

## Typography

- Display y titulares: Georgia, tracking negativo, peso 400–500. El nombre del hero es la pieza tipográfica principal.
- Texto: Arial/Helvetica, 1rem, interlineado 1.5, medida 65–75 caracteres.
- Etiquetas: mayúsculas pequeñas con espaciado (0.05–0.24em).
- Monoespaciada sólo para código real (por ejemplo, las capas de la intro).

## Layout

Márgenes laterales de `6vw`, contenido máximo de 1400px, secciones con 10–15vh de aire vertical.
Las escenas con scroll usan un escenario `position: sticky` de `100lvh` dentro de una sección más alta.

## Elevation & Depth

Plano. La profundidad sale de capas y escala, no de sombras. Sombras sólo suaves y con desplazamiento
(capturas de proyectos).

## Shapes

Esquinas rectas. El único círculo es el punto (estado, etapas, nodos).

## Components

- Enlaces de texto con subrayado de 1px (`text-link`); el de AFR-MIND con subrayado rojo.
- Barra de navegación blanca translúcida con desenfoque y el logo que alterna «Desarrollador.» / «Pedro Gómez.».
- Fichas de proyecto (`case-study`): navegador con captura + texto con `dl` de hechos.

## Do's and Don'ts

- Sí: escenas atadas al scroll, reversibles, con alternativa para movimiento reducido y sin JS.
- Sí: datos y código reales en las escenas (AFORO en la intro, notas del CV en la red).
- No: animaciones que se reproducen solas al pasar un punto, gradientes de texto, glassmorphism decorativo,
  tarjetas iguales de icono + título + texto, emojis como iconos.
- No: más de un rojo por escena.
