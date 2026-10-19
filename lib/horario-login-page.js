// Página de inicio de sesión del horario. La sirve api/horario-page.js con un 200 tanto en
// /horario (sin sesión) como en /horario/login: sin redirecciones, porque iOS descarga la página
// sin cookies para buscar el icono de la pantalla de inicio y no sigue los 302.
import { ASSET_VERSION, ICON_TAGS } from './horario-page.js';

export function renderHorarioLoginPage() {
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
    <script src="/horario/login.js?v=${ASSET_VERSION}" defer></script>
</head>
<body class="login">
    <nav class="login-nav">
        <a href="/" class="brand">Pedro Gómez.</a>
        <a href="/">Volver al portfolio</a>
    </nav>

    <main class="login-main" id="login">
        <section class="login-intro">
            <p class="eyebrow" style="--i:0">Área privada</p>
            <h1 style="--i:1">Horario<br><span>semanal.</span></h1>
            <p style="--i:2">Tu semana tipo, de lunes a domingo y hora a hora. Se repite cada semana.</p>
        </section>

        <section class="login-card" aria-labelledby="login-title" style="--i:3">
            <p class="eyebrow">Identificación</p>
            <h2 id="login-title">Iniciar sesión</h2>
            <form class="login-form" id="login-form" action="/api/horario-session" method="post">
                <div class="fields">
                    <label class="field">
                        <input id="username" name="username" type="text" autocomplete="username" autocapitalize="none" spellcheck="false" required autofocus>
                        <span class="field-label">Usuario</span>
                    </label>
                    <label class="field">
                        <input id="password" name="password" type="password" autocomplete="current-password" required>
                        <span class="field-label">Contraseña</span>
                    </label>
                    <button type="submit" class="submit" id="submit">
                        <span>Entrar al horario</span>
                        <svg class="arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5"/></svg>
                        <svg class="spinner" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3a7 7 0 1 1-7 7"/></svg>
                        <svg class="check" viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 10.5 8.5 14.5 15.5 6"/></svg>
                    </button>
                </div>
                <p class="login-error" id="login-error" role="alert"></p>
            </form>
        </section>
    </main>
</body>
</html>`;
}
