# Añadir ORBIS 2 a pedrogomez.dev

La estructura pública del portfolio usa páginas estáticas bajo `proyecto/` y Vercel. ORBIS está integrado en ese repositorio bajo `proyecto/orbis-2/`; su fuente editable se conserva en `proyecto/orbis-2/source/`. Los pasos siguientes sirven para actualizar o reinstalar la herramienta.

## Opción rápida: carpeta compilada

1. Descomprime `ORBIS-2-portfolio.zip` en la raíz de tu copia de `CODIGOAFRX/portfolio`. El ZIP contiene `proyecto/orbis-2/`.
2. Añade la tarjeta de `docs/portfolio-card.json` al mismo array de proyectos de `script.js` donde está ORBIS. Puedes conservar la tarjeta original como antecedente o sustituirla por la de ORBIS 2.
3. Revisa los cambios y súbelos usando el flujo habitual del portfolio.
4. La URL será `https://www.pedrogomez.dev/proyecto/orbis-2/` **después** de desplegar el portfolio. No es una publicación hecha por este trabajo.

Usa la barra final del enlace: las rutas de assets y demo son relativas. La configuración actual de Vercel admite `media-src 'self' blob:`, scripts y fuentes del propio dominio; ORBIS no necesita `unsafe-eval`, micrófono ni reglas nuevas. Se prueba localmente una copia de esa CSP con el build bajo la subruta.

## Opción con fuente editable

Conserva este proyecto aparte, en la carpeta `orbisV2`, o dentro del monorepo como `apps/orbis-2/`. No cambies el `package.json` de la raíz del portfolio por el de esta aplicación.

```sh
npm ci
npm run build
```

Copia **el contenido** de `dist/` a `proyecto/orbis-2/` de tu portfolio. Cada build utiliza nombres con hash; para futuras actualizaciones sustituye únicamente la carpeta de ORBIS 2, sin borrar otras herramientas. No subas `node_modules/`, `work/` ni `test-results/`.

## Verificación después de desplegar

- Abrir el enlace directo con barra final y recargar.
- Cargar la demo, pulsar play y comprobar la esfera y los medidores.
- Cargar un WAV/MP3 propio, buscar otra posición y repetir.
- Revisar en móvil y activar pantalla completa.
- Confirmar que las peticiones de audio local son `blob:` y no hay subida del archivo.

## Pruebas locales equivalentes

`npm run test:production` compila y ejecuta las pruebas con Chromium sobre la subruta y las cabeceras CSP del portfolio. Esto verifica la integración estática, pero no sustituye la comprobación del dominio real una vez que publiques.
