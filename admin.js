const state = {
    jobs: [],
    status: 'pending',
    search: '',
    sort: 'date'
};

const list = document.getElementById('jobs-list');
const emptyState = document.getElementById('empty-state');

function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
}

function validExternalUrl(value) {
    try {
        const url = new URL(value);
        return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
    } catch {
        return null;
    }
}

function dateLabel(value) {
    if (!value) return 'Fecha no indicada';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'Fecha no indicada';
    return new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
}

function statusLabel(value) {
    return { pending: 'Pendiente', applied: 'Solicitada', dismissed: 'Descartada' }[value] || value;
}

function updateMetrics() {
    const jobs = state.jobs;
    const average = jobs.length ? Math.round(jobs.reduce((total, job) => total + Number(job.fitScore || 0), 0) / jobs.length) : 0;
    document.getElementById('metric-total').textContent = jobs.length;
    document.getElementById('metric-pending').textContent = jobs.filter(job => job.status === 'pending').length;
    document.getElementById('metric-applied').textContent = jobs.filter(job => job.status === 'applied').length;
    document.getElementById('metric-fit').textContent = `${average}%`;
}

function filteredJobs() {
    const query = state.search.trim().toLocaleLowerCase('es');
    const jobs = state.jobs.filter(job => {
        const statusMatches = state.status === 'all' || job.status === state.status;
        const haystack = [job.title, job.company, job.location, job.summary, ...(job.technologies || [])].join(' ').toLocaleLowerCase('es');
        return statusMatches && (!query || haystack.includes(query));
    });

    return jobs.sort((left, right) => state.sort === 'fit'
        ? Number(right.fitScore || 0) - Number(left.fitScore || 0)
        : new Date(right.receivedAt || right.createdAt || 0) - new Date(left.receivedAt || left.createdAt || 0));
}

async function changeStatus(id, status, button) {
    button.disabled = true;
    try {
        const response = await fetch('/api/jobs', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status })
        });
        if (response.status === 401) {
            window.location.assign('/login');
            return;
        }
        if (!response.ok) throw new Error('No se pudo actualizar');
        const payload = await response.json();
        const index = state.jobs.findIndex(job => job.id === payload.job.id);
        if (index !== -1) state.jobs[index] = payload.job;
        updateMetrics();
        render();
    } catch {
        button.disabled = false;
        button.textContent = 'Reintentar';
    }
}

function markAppliedAfterOpening(job) {
    if (job.status !== 'pending') return;
    const previousStatus = job.status;
    job.status = 'applied';

    window.setTimeout(() => {
        updateMetrics();
        render();
    }, 120);

    fetch('/api/jobs', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: job.id, status: 'applied' }),
        keepalive: true
    }).then(response => {
        if (response.status === 401) window.location.assign('/login');
        if (!response.ok) throw new Error('No se pudo actualizar');
        return response.json();
    }).then(payload => {
        const index = state.jobs.findIndex(item => item.id === payload.job.id);
        if (index !== -1) state.jobs[index] = payload.job;
        updateMetrics();
    }).catch(() => {
        job.status = previousStatus;
        updateMetrics();
        render();
    });
}

function createJobCard(job) {
    const article = node('article', 'job-card');
    const score = node('div', 'fit-score');
    score.append(String(job.fitScore ?? 0), node('small', '', '%'));
    article.appendChild(score);

    const content = node('div', 'job-content');
    content.appendChild(node('p', 'job-kicker', `${job.source || 'Fuente'} · ${dateLabel(job.receivedAt)} · ${statusLabel(job.status)}`));
    content.appendChild(node('h3', 'job-title', job.title || 'Puesto sin título'));
    content.appendChild(node('p', 'job-company', [job.company, job.location, job.workMode].filter(Boolean).join(' · ')));
    if (job.summary) content.appendChild(node('p', 'job-summary', job.summary));

    if (job.technologies?.length) {
        const tags = node('div', 'tag-list');
        job.technologies.slice(0, 10).forEach(technology => tags.appendChild(node('span', 'tag', technology)));
        content.appendChild(tags);
    }
    article.appendChild(content);

    const aside = node('aside', 'job-aside');
    const meta = node('div', 'job-meta');
    meta.appendChild(node('p', '', `CV recomendado: ${job.recommendedCv || 'Por decidir'}`));
    meta.appendChild(node('p', '', `Prioridad: ${job.priority || 'Sin clasificar'}`));
    if (job.easyApply) meta.appendChild(node('p', '', 'Solicitud sencilla disponible'));
    aside.appendChild(meta);

    if (job.matchReasons?.length) {
        const reasons = node('ul', 'reason-list');
        job.matchReasons.slice(0, 3).forEach(reason => reasons.appendChild(node('li', '', reason)));
        aside.appendChild(reasons);
    }

    const actions = node('div', 'job-actions');
    const url = validExternalUrl(job.url);
    if (url) {
        const link = node('a', 'apply-button', job.status === 'pending' ? 'Solicitar ↗' : 'Abrir oferta ↗');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.addEventListener('click', () => markAppliedAfterOpening(job));
        actions.appendChild(link);
    } else {
        actions.appendChild(node('span', 'apply-button unavailable', 'Enlace no disponible'));
    }

    const nextActions = job.status === 'pending'
        ? [['dismissed', 'Descartar', 'secondary']]
        : [['pending', 'Volver a pendientes', 'secondary']];
    nextActions.forEach(([status, label, className]) => {
        const button = node('button', className, label);
        button.type = 'button';
        button.addEventListener('click', () => changeStatus(job.id, status, button));
        actions.appendChild(button);
    });
    aside.appendChild(actions);
    article.appendChild(aside);
    return article;
}

function render() {
    list.replaceChildren();
    const jobs = filteredJobs();
    jobs.forEach(job => list.appendChild(createJobCard(job)));
    emptyState.hidden = jobs.length > 0;
}

async function loadJobs() {
    try {
        const response = await fetch('/api/jobs', { headers: { Accept: 'application/json' } });
        if (response.status === 401) {
            window.location.assign('/login');
            return;
        }
        if (!response.ok) throw new Error('No se pudieron cargar las ofertas');
        const payload = await response.json();
        state.jobs = payload.jobs || [];
        updateMetrics();
        render();
        document.getElementById('sync-note').textContent = payload.updatedAt
            ? `Actualizado ${dateLabel(payload.updatedAt)}`
            : `${state.jobs.length} ofertas disponibles`;
    } catch {
        list.replaceChildren(node('p', 'error-state', 'No se ha podido cargar la base de candidaturas. Vuelve a intentarlo en unos minutos.'));
        document.getElementById('sync-note').textContent = 'Error de conexión';
    }
}

document.getElementById('job-search').addEventListener('input', event => {
    state.search = event.target.value;
    render();
});

document.getElementById('job-sort').addEventListener('change', event => {
    state.sort = event.target.value;
    render();
});

document.querySelectorAll('.status-tab').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.status-tab').forEach(tab => tab.classList.remove('active'));
        button.classList.add('active');
        state.status = button.dataset.status;
        render();
    });
});

loadJobs();
