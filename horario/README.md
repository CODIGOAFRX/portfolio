# Horario

Horario semanal privado, de lunes a domingo por horas, que vive en [pedrogomez.dev/horario](https://pedrogomez.dev/horario). Se edita arrastrando, como en papel, y se añade a la pantalla de inicio del iPhone como si fuera una app.

Es de uso personal: la página pide iniciar sesión y no se indexa.

## Qué hace

- **Arrastrar para todo.** Arrastrar sobre un día crea una actividad, arrastrar una actividad la mueve y su borde inferior la alarga. Con Ctrl (o Alt/Cmd) pulsado, arrastrar la duplica.
- **Editor flotante** con título, días, hora, lugar, notas y color. En móvil sale como hoja inferior.
- **Semana y día.** En móvil se ve la semana completa o un día, y se pasa de un día a otro deslizando.
- **Teclado.** `N` nueva, flechas para mover, `Supr` borra, `Ctrl+C/X/V` copia, corta y pega (donde esté el puntero), `Ctrl+Z` deshace.
- **Copias e impresión.** Exportar e importar el horario en JSON e imprimirlo en A4 apaisado.
- **Rápido y sin conexión.** Se pinta al instante desde la copia del navegador y se sincroniza después.
- **App en el iPhone.** Manifest e iconos propios; la sesión dura un año y se renueva en cada visita, así que no pide la contraseña al abrirla.

## Cómo está hecho

| Pieza | Dónde |
| --- | --- |
| Interfaz (rejilla, gestos, editor, menú) | `horario/app.js`, `horario/horario.css` |
| Inicio de sesión | `horario/login.js`, `lib/horario-login-page.js` |
| Página servida con sesión | `api/horario-page.js`, `lib/horario-page.js` |
| API del horario (leer y guardar) | `api/horario.js` |
| Sesión (cookie propia, separada del panel de candidaturas) | `api/horario-session.js`, `lib/auth.js` |
| Formato y saneado del horario | `lib/horario-schedule.js` |
| Almacenamiento en D1 | `worker/src/index.js` (`/schedule`), `worker/migrations/0003_schedules.sql` |
| Pruebas | `tests/horario.test.mjs` |

- **Frontend:** JavaScript y CSS sin frameworks, con la estética de la web (blanco, negro y grises).
- **Backend:** funciones de Vercel que validan la sesión y sanean el documento antes de mandarlo al Worker de Cloudflare, que lo guarda en D1.

El horario es un único documento:

```js
{
  version: 1,
  settings: { startHour: 7, endHour: 23 },
  events: [{ id, title, day, start, end, color, place, notes }]
}
// day: 0 = lunes … 6 = domingo · start/end: minutos desde las 00:00, múltiplos de 5
```

## Configuración

Variables en `.env` (ver `.env.example`):

- `HORARIO_USERNAME` y `HORARIO_PASSWORD`: credenciales de acceso.
- Las del Worker del portfolio, que es quien guarda los datos.

```bash
node --test tests/horario.test.mjs
```
