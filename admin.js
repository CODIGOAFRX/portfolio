const state = {
    jobs: [],
    status: 'pending',
    search: '',
    sort: 'date',
    priority: 'all',
    source: 'all'
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

function dateTimeLabel(value) {
    if (!value) return null;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

function statusLabel(value) {
    return { pending: 'Pendiente', applied: 'Solicitada', dismissed: 'Descartada' }[value] || value;
}

function priorityLabel(value) {
    return { high: 'Alta', medium: 'Media', low: 'Baja', dismissed: 'Descartada' }[value] || 'Sin clasificar';
}

function updateMetrics() {
    const jobs = state.jobs;
    const average = jobs.length ? Math.round(jobs.reduce((total, job) => total + Number(job.fitScore || 0), 0) / jobs.length) : 0;
    document.getElementById('metric-total').textContent = jobs.length;
    document.getElementById('metric-pending').textContent = jobs.filter(job => job.status === 'pending').length;
    document.getElementById('metric-applied').textContent = jobs.filter(job => job.status === 'applied').length;
    document.getElementById('metric-fit').textContent = `${average}%`;
    ['pending', 'applied', 'dismissed'].forEach(status => {
        document.querySelector(`[data-count="${status}"]`).textContent = jobs.filter(job => job.status === status).length;
    });
    document.querySelector('[data-count="all"]').textContent = jobs.length;
}

function filteredJobs() {
    const query = state.search.trim().toLocaleLowerCase('es');
    const jobs = state.jobs.filter(job => {
        const statusMatches = state.status === 'all' || job.status === state.status;
        const priorityMatches = state.priority === 'all' || job.priority === state.priority;
        const sourceMatches = state.source === 'all' || job.source === state.source;
        const haystack = [job.title, job.company, job.location, job.summary, ...(job.technologies || [])].join(' ').toLocaleLowerCase('es');
        return statusMatches && priorityMatches && sourceMatches && (!query || haystack.includes(query));
    });

    return jobs.sort((left, right) => {
        if (state.sort === 'fit') return Number(right.fitScore || 0) - Number(left.fitScore || 0);
        if (state.sort === 'company') return String(left.company || '').localeCompare(String(right.company || ''), 'es');
        return new Date(right.receivedAt || right.createdAt || 0) - new Date(left.receivedAt || left.createdAt || 0);
    });
}

async function changeStatus(id, status, button) {
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Guardando…';
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
        document.getElementById('action-note').textContent = `Oferta actualizada como ${statusLabel(status).toLocaleLowerCase('es')}.`;
    } catch {
        button.disabled = false;
        button.textContent = originalText;
        document.getElementById('action-note').textContent = 'No se ha podido guardar el cambio. Inténtalo de nuevo.';
    }
}

function createJobCard(job) {
    const article = node('article', `job-card priority-${job.priority || 'low'}`);
    const score = node('div', 'fit-score');
    score.setAttribute('aria-label', `${job.fitScore ?? 0} por ciento de encaje`);
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
    const priority = node('p', `priority-badge priority-badge-${job.priority || 'low'}`, `Prioridad ${priorityLabel(job.priority)}`);
    meta.appendChild(priority);
    if (job.easyApply) meta.appendChild(node('p', '', 'Solicitud sencilla disponible'));
    aside.appendChild(meta);

    if (job.matchReasons?.length) {
        const reasonsBlock = node('div', 'insight-block');
        reasonsBlock.appendChild(node('p', 'insight-title', 'Por qué encaja'));
        const reasons = node('ul', 'reason-list');
        job.matchReasons.slice(0, 3).forEach(reason => reasons.appendChild(node('li', '', reason)));
        reasonsBlock.appendChild(reasons);
        aside.appendChild(reasonsBlock);
    }

    if (job.gaps?.length) {
        const gapsBlock = node('div', 'insight-block gap-block');
        gapsBlock.appendChild(node('p', 'insight-title', 'A tener en cuenta'));
        const gaps = node('ul', 'gap-list');
        job.gaps.slice(0, 3).forEach(gap => gaps.appendChild(node('li', '', gap)));
        gapsBlock.appendChild(gaps);
        aside.appendChild(gapsBlock);
    }

    const actions = node('div', 'job-actions');
    const url = validExternalUrl(job.url);
    if (url) {
        const link = node('a', 'apply-button', 'Abrir oferta ↗');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        actions.appendChild(link);
    } else {
        actions.appendChild(node('span', 'apply-button unavailable', 'Enlace no disponible'));
    }

    const nextActions = job.status === 'pending'
        ? [['applied', 'Marcar solicitada', 'status-button'], ['dismissed', 'Descartar', 'secondary']]
        : job.status === 'applied'
            ? [['pending', 'Volver a pendientes', 'secondary'], ['dismissed', 'Descartar', 'secondary']]
            : [['pending', 'Recuperar oferta', 'status-button']];
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

function updateSourceOptions() {
    const select = document.getElementById('job-source');
    const sources = [...new Set(state.jobs.map(job => job.source).filter(Boolean))]
        .sort((left, right) => left.localeCompare(right, 'es'));
    select.replaceChildren(new Option('Todas', 'all'));
    sources.forEach(source => select.appendChild(new Option(source, source)));
    select.value = state.source;
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
        updateSourceOptions();
        updateMetrics();
        render();
        document.getElementById('sync-note').textContent = payload.updatedAt
            ? `Actualizado ${dateTimeLabel(payload.updatedAt)}`
            : `${state.jobs.length} ofertas disponibles`;
    } catch {
        const error = node('div', 'error-state');
        error.appendChild(node('p', '', 'No se ha podido cargar la base de candidaturas.'));
        const retry = node('button', '', 'Reintentar');
        retry.type = 'button';
        retry.addEventListener('click', loadJobs);
        error.appendChild(retry);
        list.replaceChildren(error);
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

document.getElementById('job-priority').addEventListener('change', event => {
    state.priority = event.target.value;
    render();
});

document.getElementById('job-source').addEventListener('change', event => {
    state.source = event.target.value;
    render();
});

document.querySelectorAll('.status-tab').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.status-tab').forEach(tab => {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        state.status = button.dataset.status;
        render();
    });
});

document.getElementById('clear-filters').addEventListener('click', () => {
    state.search = '';
    state.priority = 'all';
    state.source = 'all';
    state.status = 'all';
    document.getElementById('job-search').value = '';
    document.getElementById('job-priority').value = 'all';
    document.getElementById('job-source').value = 'all';
    document.querySelectorAll('.status-tab').forEach(tab => {
        const selected = tab.dataset.status === 'all';
        tab.classList.toggle('active', selected);
        tab.setAttribute('aria-selected', String(selected));
    });
    render();
});

loadJobs();
