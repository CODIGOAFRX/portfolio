// Panel del administrador del horario (/horario/admin): cuentas creadas, borrado de cuentas y
// bloqueo de IPs. Sólo se sirve con la sesión de «admin» (api/horario-page.js); los datos llegan
// por /api/horario-admin y los pinta horario/admin.js.
import { ASSET_VERSION, ICON_TAGS } from './horario-page.js';

export function renderHorarioAdminPage() {
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="robots" content="noindex, nofollow">
    <meta name="theme-color" content="#ffffff">
    <title>Cuentas del horario / Pedro Gómez</title>
${ICON_TAGS}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/horario/horario.css?v=${ASSET_VERSION}">
    <script src="/horario/admin.js?v=${ASSET_VERSION}" type="module"></script>
</head>
<body class="admin">
    <nav class="login-nav">
        <a href="/" class="brand">Pedro Gómez.</a>
        <button type="button" class="btn btn-quiet" id="logout">Cerrar sesión</button>
    </nav>

    <main class="admin-main">
        <header class="admin-head">
            <p class="eyebrow">Administración del horario</p>
            <h1 class="bar-title">Cuentas <span>del horario.</span></h1>
            <p class="bar-summary" id="admin-summary" role="status" aria-live="polite">Cargando…</p>
        </header>

        <section class="admin-section" aria-labelledby="users-title">
            <h2 class="admin-title" id="users-title">Cuentas</h2>
            <div class="admin-table-wrap">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th scope="col">Usuario</th>
                            <th scope="col">Alta</th>
                            <th scope="col">Último acceso</th>
                            <th scope="col">IP</th>
                            <th scope="col">Horario</th>
                            <th scope="col"><span class="sr-only">Acciones</span></th>
                        </tr>
                    </thead>
                    <tbody id="users"></tbody>
                </table>
            </div>
            <p class="admin-empty" id="users-empty" hidden>Todavía nadie ha creado una cuenta.</p>
        </section>

        <section class="admin-section" aria-labelledby="blocked-title">
            <h2 class="admin-title" id="blocked-title">IPs bloqueadas</h2>
            <p class="admin-note">Una IP bloqueada no puede entrar, crear cuentas ni leer o guardar horarios. Tu IP ahora: <code id="your-ip">—</code></p>
            <form class="admin-block" id="block-form">
                <label class="field">
                    <input id="block-ip" name="ip" type="text" inputmode="text" autocomplete="off" spellcheck="false" required placeholder=" ">
                    <span class="field-label">IP</span>
                </label>
                <label class="field">
                    <input id="block-reason" name="reason" type="text" maxlength="200" autocomplete="off" placeholder=" ">
                    <span class="field-label">Motivo (opcional)</span>
                </label>
                <button type="submit" class="btn btn-primary">Bloquear IP</button>
            </form>
            <ul class="admin-blocked" id="blocked"></ul>
            <p class="admin-empty" id="blocked-empty" hidden>No hay IPs bloqueadas.</p>
        </section>

        <p class="login-error" id="admin-error" role="alert"></p>
    </main>
</body>
</html>`;
}
