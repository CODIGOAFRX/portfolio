export function renderAdminPage() {
    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Candidaturas / Pedro Gómez</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/admin.css?v=20260819-1">
</head>
<body>
    <nav class="admin-nav">
        <a href="/" class="admin-logo">Pedro Gómez.</a>
        <div class="admin-nav-actions">
            <a href="/">Portfolio</a>
            <form action="/api/logout" method="post">
                <button type="submit" class="nav-button">Cerrar sesión</button>
            </form>
        </div>
    </nav>

    <main class="admin-main">
        <header class="admin-hero">
            <p class="eyebrow">Panel privado / Búsqueda de empleo</p>
            <h1>Seguimiento de<br><span>candidaturas.</span></h1>
            <p class="hero-copy">Ofertas de Gmail, LinkedIn, InfoJobs, Indeed y Tecnoempleo, evaluadas según tu perfil técnico.</p>
        </header>

        <section class="metrics" aria-label="Resumen de candidaturas">
            <article><span id="metric-total">—</span><p>Ofertas analizadas</p></article>
            <article><span id="metric-pending">—</span><p>Pendientes</p></article>
            <article><span id="metric-applied">—</span><p>Solicitadas</p></article>
            <article><span id="metric-fit">—</span><p>Encaje medio</p></article>
        </section>

        <section class="dashboard-section">
            <div class="section-heading">
                <div>
                    <p class="section-number">01 / Oportunidades</p>
                    <h2>Ofertas encontradas</h2>
                </div>
                <p id="sync-note" class="sync-note">Cargando datos…</p>
            </div>

            <div class="toolbar">
                <label class="search-field">
                    <span>Buscar</span>
                    <input id="job-search" type="search" placeholder="Puesto, empresa o tecnología" autocomplete="off">
                </label>
                <label class="sort-field">
                    <span>Ordenar</span>
                    <select id="job-sort">
                        <option value="date">Más recientes</option>
                        <option value="fit">Mejor encaje</option>
                    </select>
                </label>
            </div>

            <div class="status-tabs" role="tablist" aria-label="Estado">
                <button type="button" class="status-tab active" data-status="pending">Pendientes</button>
                <button type="button" class="status-tab" data-status="applied">Solicitadas</button>
                <button type="button" class="status-tab" data-status="dismissed">Descartadas</button>
                <button type="button" class="status-tab" data-status="all">Todas</button>
            </div>

            <div id="jobs-list" class="jobs-list" aria-live="polite"></div>
            <div id="empty-state" class="empty-state" hidden>
                <p>No hay ofertas que coincidan con este filtro.</p>
            </div>
        </section>
    </main>

    <script src="/admin.js?v=20260819-1" defer></script>
</body>
</html>`;
}
