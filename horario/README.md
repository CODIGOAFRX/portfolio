# Horario

Horario semanal privado, de lunes a domingo por horas, que vive en [pedrogomez.dev/horario](https://pedrogomez.dev/horario). Se edita arrastrando, como en papel, y se añade a la pantalla de inicio del iPhone como si fuera una app.

Cualquiera puede crear su cuenta y tener su propio horario; un administrador ve las cuentas, las borra y bloquea IPs. La página no se indexa.

## Qué hace

- **Cuentas abiertas.** En `/horario/login` hay dos pestañas, *Entrar* y *Crear cuenta*. Cada cuenta tiene su horario (en D1, `u:<id>`), y el original del propietario sigue en `main`. Contraseñas con scrypt; como mucho 5 cuentas nuevas por IP y día.
- **Administrador.** El usuario `admin` (contraseña en `HORARIO_ADMIN_PASSWORD`) entra a `/horario/admin`: lista de cuentas con alta, último acceso, IP y horario; borrar una cuenta (con su horario) y bloquear o desbloquear IPs. Una IP bloqueada no puede entrar, crear cuentas ni leer o guardar horarios. No deja bloquear la IP propia.
- **Semana tipo y cambios de la semana.** La semana tipo se repite siempre. En *Cambios de la semana* (con flechas para ir a otras semanas) lo fijo sale en gris y lo que añades va en color, encima, solo para esa semana. Una actividad gris se puede quitar, cambiar o arrastrar a otro hueco solo esa semana; la siguiente vuelve a ser la semana tipo.
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
| Acceso (entrar y crear cuenta) | `horario/login.js`, `lib/horario-login-page.js`, `api/horario-session.js` |
| Cuentas, contraseñas e IPs | `lib/horario-accounts.js` |
| Panel del administrador | `api/horario-admin.js`, `lib/horario-admin-page.js`, `horario/admin.js` |
| Página servida con sesión | `api/horario-page.js`, `lib/horario-page.js` |
| API del horario (leer y guardar) | `api/horario.js` |
| Sesión (cookie propia, separada del panel de candidaturas) | `api/horario-session.js`, `lib/auth.js` |
| Formato y saneado del horario | `lib/horario-schedule.js` |
| Almacenamiento en D1 | `worker/src/index.js` (`/schedule`, `/horario/*`), `worker/migrations/0003_schedules.sql`, `0004_horario_users.sql` |
| Vista local de punta a punta | `scripts/dev-horario.mjs` (Worker real sobre `node:sqlite`) |
| Pruebas | `tests/horario.test.mjs` |

- **Frontend:** JavaScript y CSS sin frameworks, con la estética de la web (blanco, negro y grises).
- **Backend:** funciones de Vercel que validan la sesión y sanean el documento antes de mandarlo al Worker de Cloudflare, que lo guarda en D1.

El horario es un único documento:

```js
{
  version: 1,
  settings: { startHour: 7, endHour: 23 },
  events: [{ id, title, day, start, end, color, place, notes }],     // semana tipo
  weeks: { 'AAAA-MM-DD': { events: [...], hidden: [id, …] } }      // cambios por semana (su lunes)
}
// day: 0 = lunes … 6 = domingo · start/end: minutos desde las 00:00, múltiplos de 5
```

## Configuración

Variables en `.env` (ver `.env.example`):

- `HORARIO_USERNAME` y `HORARIO_PASSWORD`: credenciales del propietario (el horario original).
- `HORARIO_ADMIN_PASSWORD`: contraseña del usuario `admin`. Vacía = sin administrador.
- Las del Worker del portfolio, que es quien guarda los datos.

Antes de desplegar el Worker con esta versión hay que crear las tablas nuevas en D1:

```bash
cd worker
npx wrangler d1 execute pedro-candidaturas-db --remote --file migrations/0004_horario_users.sql
npx wrangler deploy
```

Probar en local, sin tocar producción (propietario `pedro` / `pedro-local`, admin `admin` / `admin`):

```bash
node scripts/dev-horario.mjs
node tests/horario.test.mjs
```
