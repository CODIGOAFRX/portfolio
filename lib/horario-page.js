// Página del horario semanal. Solo se sirve con sesión (api/horario-page.js); la rejilla y las
// actividades las pinta horario/app.js.
export const ASSET_VERSION = '20261026-fondo';

// Iconos y metas de web app, compartidos con la página de inicio de sesión
// (lib/horario-login-page.js): iOS los lee al añadir el horario a la pantalla de inicio.
export const ICON_TAGS = `    <link rel="icon" href="/horario/icon.svg" type="image/svg+xml">
    <link rel="icon" href="/horario/iconos/horario-192.png" type="image/png" sizes="192x192">
    <link rel="apple-touch-icon" href="/horario/iconos/horario-180.png" sizes="180x180">
    <link rel="manifest" href="/horario/iconos/horario.webmanifest">
    <meta name="apple-mobile-web-app-title" content="Horario">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">`;

export const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[ch]));

// `account` es el usuario de la sesión: separa la copia local de cada cuenta en el navegador
export function renderHorarioPage({ account = '', role = 'user' } = {}) {
    const name = escapeHtml(account);
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="robots" content="noindex, nofollow">
    <meta name="theme-color" content="#ffffff">
    <title>Horario semanal / Pedro Gómez</title>
${ICON_TAGS}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/horario/horario.css?v=${ASSET_VERSION}">
    <script src="/horario/app.js?v=${ASSET_VERSION}" type="module"></script>
</head>
<body class="app" data-account="${name}" data-role="${escapeHtml(role)}">
    <header class="bar">
        <nav class="topnav">
            <a href="/" class="brand">Pedro Gómez.</a>
            <div class="bar-actions">
                <span class="sync" id="sync" role="status" aria-live="polite"></span>
                <button type="button" class="btn btn-primary" id="new-event" aria-keyshortcuts="N">
                    <span>Nueva actividad</span>
                    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 4v12M4 10h12"/></svg>
                </button>
                <button type="button" class="btn-icon" id="menu-button" aria-haspopup="menu" aria-expanded="false" aria-controls="menu" aria-label="Más opciones">
                    <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="4.5" cy="10" r="1.3"/><circle cx="10" cy="10" r="1.3"/><circle cx="15.5" cy="10" r="1.3"/></svg>
                </button>
            </div>
        </nav>

        <div class="bar-inner">
            <div class="bar-lead">
                <p class="eyebrow" id="mode-eyebrow">Se repite cada semana</p>
                <h1 class="bar-title">Horario <span>semanal.</span></h1>
                <div class="modes">
                    <div class="modebar" role="tablist" aria-label="Qué editas">
                        <button type="button" role="tab" class="mode-item" data-mode="template" aria-selected="true">Semana tipo</button>
                        <button type="button" role="tab" class="mode-item" data-mode="week" aria-selected="false">Cambios de la semana</button>
                    </div>
                    <div class="weeknav" id="weeknav" hidden>
                        <button type="button" class="btn-icon week-step" id="week-prev" aria-label="Semana anterior">
                            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12 5 7 10l5 5"/></svg>
                        </button>
                        <span class="week-label" id="week-label"></span>
                        <button type="button" class="btn-icon week-step" id="week-next" aria-label="Semana siguiente">
                            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M8 5l5 5-5 5"/></svg>
                        </button>
                        <button type="button" class="btn btn-quiet week-today" id="week-today" hidden>Volver a esta semana</button>
                    </div>
                </div>
                <p class="bar-summary" id="summary"></p>
            </div>

            <div class="seg" role="tablist" aria-label="Vista">
                <span class="seg-thumb" aria-hidden="true"></span>
                <button type="button" role="tab" class="seg-item" data-view="week" aria-selected="true">Semana</button>
                <button type="button" role="tab" class="seg-item" data-view="day" aria-selected="false">Día</button>
            </div>
        </div>

        <nav class="daybar" id="daybar" aria-label="Día"></nav>
    </header>

    <main class="board" id="board">
        <div class="grid-wrap" id="grid-wrap">
            <div class="grid" id="grid" data-view="week"></div>
        </div>

        <div class="empty" id="empty" hidden>
            <p class="empty-title">Tu semana tipo está en blanco.</p>
            <p class="empty-copy">Lo que añadas se repite cada semana. Arrastra sobre un día para crear una actividad, o pulsa <kbd>N</kbd>.</p>
            <button type="button" class="btn btn-primary" id="empty-new">Nueva actividad</button>
        </div>
    </main>

    <div class="menu" id="menu" role="menu" aria-labelledby="menu-button" hidden>
        <div class="menu-range" role="group" aria-label="Franja horaria">
            <span class="menu-label">Franja horaria</span>
            <div class="menu-range-fields">
                <label><span class="sr-only">Desde</span><select id="range-start"></select></label>
                <span aria-hidden="true">–</span>
                <label><span class="sr-only">Hasta</span><select id="range-end"></select></label>
            </div>
        </div>
        <div class="menu-sep" role="separator"></div>
        <div class="menu-hints">
            <span class="menu-label">Atajos</span>
            <dl>
                <dt>Duplicar</dt><dd>Ctrl + arrastrar</dd>
                <dt>Copiar · cortar</dt><dd>Ctrl C · Ctrl X</dd>
                <dt>Pegar bajo el ratón</dt><dd>Ctrl V</dd>
                <dt>Nueva actividad</dt><dd>N</dd>
                <dt>Deshacer</dt><dd>Ctrl Z</dd>
            </dl>
        </div>
        <div class="menu-sep" role="separator"></div>
        <button type="button" role="menuitem" class="menu-item" data-action="print">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 7.5V3.5h8v4M6 14H4.5a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H14M6 11.5h8v5H6z"/></svg>
            Imprimir
        </button>
        <button type="button" role="menuitem" class="menu-item" data-action="export">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3.5v9M6.5 9 10 12.5 13.5 9M4 15.5h12"/></svg>
            Descargar copia
        </button>
        <button type="button" role="menuitem" class="menu-item" data-action="import">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 12.5v-9M6.5 7 10 3.5 13.5 7M4 15.5h12"/></svg>
            Restaurar copia
        </button>
        <button type="button" role="menuitem" class="menu-item menu-item-danger" data-action="clear">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 6h11M8 6V4.5h4V6M6 6l.7 9.5h6.6L14 6"/></svg>
            <span class="menu-item-label">Vaciar horario</span>
        </button>
        <div class="menu-sep" role="separator"></div>
        <a role="menuitem" class="menu-item" href="/">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12 5 7 10l5 5"/></svg>
            pedrogomez.dev
        </a>
        <p class="menu-account"><span class="menu-label">Sesión</span><span>${name}</span></p>
        <button type="button" role="menuitem" class="menu-item" data-action="logout">
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M8 4H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3M12 6.5 15.5 10 12 13.5M15.5 10H8"/></svg>
            Cerrar sesión
        </button>
        <input type="file" id="import-file" accept="application/json,.json" hidden>
    </div>

    <dialog class="editor" id="editor" aria-labelledby="editor-title">
        <form class="editor-card" id="editor-form" method="dialog" novalidate>
            <h2 class="sr-only" id="editor-title">Actividad</h2>
            <input class="editor-name" id="ev-title" name="title" type="text" maxlength="80" placeholder="Nueva actividad" autocomplete="off" required aria-label="Título">

            <fieldset class="editor-days">
                <legend class="editor-label" id="ev-days-label">Se repite cada</legend>
                <div class="day-chips" id="ev-days"></div>
            </fieldset>

            <div class="editor-row editor-time">
                <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="6.5"/><path d="M10 6.5V10l2.5 1.5"/></svg>
                <label><span class="sr-only">Empieza</span><input id="ev-start" type="time" step="300" required></label>
                <span class="editor-dash" aria-hidden="true">–</span>
                <label><span class="sr-only">Termina</span><input id="ev-end" type="time" step="300" required></label>
                <span class="editor-duration" id="ev-duration"></span>
            </div>

            <div class="editor-row">
                <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 17s5-4.6 5-8.5a5 5 0 0 0-10 0C5 12.4 10 17 10 17z"/><circle cx="10" cy="8.5" r="1.8"/></svg>
                <input id="ev-place" type="text" maxlength="80" placeholder="Lugar" autocomplete="off" aria-label="Lugar">
            </div>

            <div class="editor-row editor-row-top">
                <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 5.5h11M4.5 10h11M4.5 14.5h7"/></svg>
                <textarea id="ev-notes" rows="2" maxlength="500" placeholder="Notas" aria-label="Notas"></textarea>
            </div>

            <fieldset class="swatches" id="ev-colors">
                <legend class="sr-only">Color</legend>
            </fieldset>

            <p class="editor-error" id="ev-error" role="alert" hidden></p>

            <div class="editor-actions">
                <button type="button" class="btn btn-quiet btn-danger" id="ev-delete">Eliminar</button>
                <span class="editor-spacer"></span>
                <button type="button" class="btn btn-quiet" id="ev-cancel">Cancelar</button>
                <button type="submit" class="btn btn-primary" id="ev-save">Guardar</button>
            </div>
        </form>
    </dialog>

    <div class="toast" id="toast" role="status" aria-live="polite" hidden>
        <span id="toast-text"></span>
        <button type="button" class="toast-action" id="toast-action"></button>
    </div>
</body>
</html>`;
}
