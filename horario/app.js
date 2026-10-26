// Horario semanal (lunes a domingo, por horas). Se pinta al instante desde la copia local y se
// sincroniza con /api/horario. Arrastrar sobre un día crea, arrastrar una actividad la mueve y su
// borde inferior la alarga; con Ctrl (o Alt/Cmd) pulsado, arrastrar la duplica. Teclado: N nueva,
// flechas mueven, Supr borra, Ctrl+C/X/V copia, corta y pega, Ctrl+Z deshace.
//
// Dos capas: la «semana tipo» (events), que se repite, y los «cambios de la semana» (weeks[lunes]):
// en ese modo lo fijo es solo un fondo gris que no se toca; pulsar o arrastrar encima crea
// actividades de esa semana, que van en color por encima.

const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const SHORT = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const LETTERS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
// Mismo orden que lib/horario-schedule.js. Los tonos se pintan en horario.css; aquí solo el
// nombre y el color de la muestra. teal y orange siguen siendo válidos pero ya no se ofrecen.
const COLORS = {
    ink: ['Negro', '#111111'],
    graphite: ['Grafito', '#4a4a4a'],
    stone: ['Gris', '#9a9a9a'],
    mist: ['Niebla', '#e4e4e4'],
    paper: ['Blanco', '#ffffff'],
    red: ['Rojo', '#9e3b32'],
    blue: ['Azul', '#34558b'],
    green: ['Verde', '#3f6e52'],
    yellow: ['Ocre', '#8a6a1f'],
    purple: ['Morado', '#5d4b82'],
    teal: ['Petróleo', '#2f6b6e', true],
    orange: ['Teja', '#a5552a', true]
};
// Copia local por cuenta: en un mismo navegador pueden entrar personas distintas
const ACCOUNT = document.body.dataset.account || '';
const STORAGE_KEY = ACCOUNT ? `horario:v1:${ACCOUNT}` : 'horario:v1';
const PREFS_KEY = 'horario:prefs';
const SNAP = 15;
const MAX_EVENTS = 400;
const MAX_WEEK_EVENTS = 200;
const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

const $ = id => document.getElementById(id);
const grid = $('grid');
const wrap = $('grid-wrap');
const editor = $('editor');
const form = $('editor-form');
const menu = $('menu');
const menuButton = $('menu-button');
const mobile = matchMedia('(max-width: 759px)');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

const prefs = readJson(PREFS_KEY) || {};
const local = readJson(STORAGE_KEY) || adoptLegacyCopy();

const state = {
    schedule: normalizeSchedule(local?.schedule),
    dirty: Boolean(local?.dirty),
    rev: 0,
    view: prefs.view === 'day' ? 'day' : 'week',
    mode: prefs.mode === 'week' ? 'week' : 'template',
    week: currentWeek(),
    day: todayIndex(),
    history: [],
    future: [],
    firstPaint: true
};

const nodes = new Map();
const baseNodes = new Map();
let cols = [];
let heads = [];
let gesture = null;
let editing = null;
let clipboard = null;
let hover = null;

// ---------------------------------------------------------------- utilidades

function readJson(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch {
        return null;
    }
}

// Antes de las cuentas, la copia local se guardaba sin nombre. Sólo puede ser del propietario:
// se la queda él (con sus cambios sin sincronizar) y nadie más la ve.
function adoptLegacyCopy() {
    if (document.body.dataset.role !== 'owner') return null;
    const legacy = readJson('horario:v1');
    try {
        localStorage.removeItem('horario:v1');
    } catch {
        // Sin almacenamiento local no hay copia que mover.
    }
    if (legacy) writeJson(STORAGE_KEY, legacy);
    return legacy;
}

function writeJson(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // Modo privado o almacenamiento lleno: la sincronización con el servidor sigue.
    }
}

function todayIndex() {
    return (new Date().getDay() + 6) % 7;
}

// Semanas por su lunes, en hora local: 'AAAA-MM-DD'
function weekKey(date) {
    const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - (date.getDay() + 6) % 7);
    return `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, '0')}-${String(monday.getDate()).padStart(2, '0')}`;
}

function currentWeek() {
    return weekKey(new Date());
}

function weekDate(key, day = 0) {
    const [y, m, d] = key.split('-').map(Number);
    return new Date(y, m - 1, d + day);
}

function shiftWeek(key, weeks) {
    return weekKey(weekDate(key, weeks * 7));
}

function weekLabel(key) {
    const first = weekDate(key);
    const last = weekDate(key, 6);
    const left = first.getMonth() === last.getMonth() ? `${first.getDate()}` : `${first.getDate()} ${MONTHS[first.getMonth()]}`;
    return `${left} – ${last.getDate()} ${MONTHS[last.getMonth()]}`;
}

function nowMinutes() {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
}

function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function snap(minutes, step = SNAP) {
    return Math.round(minutes / step) * step;
}

function fmt(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function parseTime(value) {
    const match = /^(\d{1,2}):(\d{2})/.exec(value || '');
    if (!match) return null;
    return Number(match[1]) * 60 + Number(match[2]);
}

function duration(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (!h) return `${m} min`;
    return m ? `${h} h ${m} min` : `${h} h`;
}

function clone(value) {
    return JSON.parse(JSON.stringify(value));
}

function svg(path, extra = '') {
    return `<svg viewBox="0 0 20 20" aria-hidden="true" ${extra}>${path}</svg>`;
}

function emptySchedule() {
    return { version: 1, settings: { startHour: 7, endHour: 23 }, events: [], weeks: {} };
}

// Misma forma que lib/horario-schedule.js (el servidor vuelve a sanear al guardar).
function normalizeSchedule(raw) {
    const base = emptySchedule();
    if (!raw || typeof raw !== 'object') return base;
    let startHour = clamp(Math.round(Number(raw.settings?.startHour ?? 7)) || 0, 0, 23);
    let endHour = clamp(Math.round(Number(raw.settings?.endHour ?? 23)) || 24, 1, 24);
    if (endHour <= startHour) [startHour, endHour] = [7, 23];

    return { version: 1, settings: { startHour, endHour }, events: normalizeEvents(raw.events, MAX_EVENTS), weeks: normalizeWeeks(raw.weeks) };
}

function normalizeWeeks(raw) {
    const weeks = {};
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return weeks;
    for (const key of Object.keys(raw).filter(key => /^\d{4}-\d{2}-\d{2}$/.test(key)).sort().reverse().slice(0, 26)) {
        const events = normalizeEvents(raw[key]?.events, MAX_WEEK_EVENTS);
        const hidden = [...new Set((Array.isArray(raw[key]?.hidden) ? raw[key].hidden : [])
            .map(id => String(id).replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40)).filter(Boolean))];
        if (events.length || hidden.length) weeks[key] = { events, hidden };
    }
    return weeks;
}

function normalizeEvents(list, max) {
    const seen = new Set();
    const events = [];
    for (const item of Array.isArray(list) ? list.slice(0, max) : []) {
        if (!item || typeof item !== 'object') continue;
        const id = String(item.id || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40);
        const title = String(item.title || '').trim().slice(0, 80);
        const day = Math.round(Number(item.day));
        const start = snap(clamp(Math.round(Number(item.start)) || 0, 0, 1435), 5);
        const end = snap(clamp(Math.round(Number(item.end)) || 0, 5, 1440), 5);
        if (!id || !title || seen.has(id) || !(day >= 0 && day <= 6) || end <= start) continue;
        seen.add(id);
        events.push({
            id,
            title,
            day,
            start,
            end,
            color: COLORS[item.color] ? item.color : 'ink',
            place: String(item.place || '').trim().slice(0, 80),
            notes: String(item.notes || '').trim().slice(0, 500)
        });
    }
    return events;
}

const range = () => ({
    start: state.schedule.settings.startHour * 60,
    end: state.schedule.settings.endHour * 60
});

const inWeek = () => state.mode === 'week';

// Cambios de la semana que se está viendo. Solo se crea el registro al modificar algo.
function weekDoc(create = false) {
    const found = state.schedule.weeks[state.week];
    if (found || !create) return found || { events: [], hidden: [] };
    state.schedule.weeks[state.week] = { events: [], hidden: [] };
    return state.schedule.weeks[state.week];
}

// Lo que se edita ahora: la semana tipo o las actividades de esta semana
function editableEvents(create = false) {
    return inWeek() ? weekDoc(create).events : state.schedule.events;
}

function setEditableEvents(list) {
    if (inWeek()) weekDoc(true).events = list;
    else state.schedule.events = list;
}

const editableLimit = () => (inWeek() ? MAX_WEEK_EVENTS : MAX_EVENTS);
const findEvent = id => editableEvents().find(event => event.id === id);

// Semanas vacías o de hace más de dos meses no se guardan
function pruneWeeks() {
    const oldest = shiftWeek(currentWeek(), -8);
    for (const [key, week] of Object.entries(state.schedule.weeks)) {
        if (key < oldest || (!week.events.length && !week.hidden.length)) delete state.schedule.weeks[key];
    }
}

// ---------------------------------------------------------------- historial y guardado

function snapshot() {
    return clone(state.schedule);
}

function pushHistory(previous) {
    state.history.push(previous);
    if (state.history.length > 60) state.history.shift();
    state.future = [];
}

function commit(mutate) {
    pushHistory(snapshot());
    mutate();
    changed();
}

function changed({ rebuild = false } = {}) {
    pruneWeeks();
    state.rev += 1;
    state.dirty = true;
    writeJson(STORAGE_KEY, { schedule: state.schedule, dirty: true });
    if (rebuild) buildGrid();
    render();
    queueSave();
}

function undo() {
    if (!state.history.length) return;
    state.future.push(snapshot());
    const previous = state.history.pop();
    const rebuild = previous.settings.startHour !== state.schedule.settings.startHour
        || previous.settings.endHour !== state.schedule.settings.endHour;
    state.schedule = previous;
    changed({ rebuild });
    toast('Cambio deshecho', 'Rehacer', redo);
}

function redo() {
    if (!state.future.length) return;
    state.history.push(snapshot());
    const next = state.future.pop();
    const rebuild = next.settings.startHour !== state.schedule.settings.startHour
        || next.settings.endHour !== state.schedule.settings.endHour;
    state.schedule = next;
    changed({ rebuild });
}

const sync = { timer: 0, busy: false, again: false, hideTimer: 0 };

function queueSave() {
    setSync('saving');
    clearTimeout(sync.timer);
    sync.timer = setTimeout(save, 650);
}

async function save() {
    if (sync.busy) {
        sync.again = true;
        return;
    }
    sync.busy = true;
    const rev = state.rev;
    try {
        const response = await fetch('/api/horario', {
            method: 'PUT',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ schedule: state.schedule })
        });
        if (response.status === 401) return toLogin();
        if (!response.ok) throw new Error(String(response.status));
        if (state.rev === rev) {
            state.dirty = false;
            writeJson(STORAGE_KEY, { schedule: state.schedule, dirty: false });
            setSync('saved');
        }
    } catch {
        setSync(navigator.onLine === false ? 'offline' : 'error');
    } finally {
        sync.busy = false;
        if (sync.again) {
            sync.again = false;
            save();
        }
    }
}

async function pull() {
    try {
        const response = await fetch('/api/horario', { credentials: 'same-origin', cache: 'no-store' });
        if (response.status === 401) return toLogin();
        if (!response.ok) throw new Error(String(response.status));
        const { schedule } = await response.json();

        if (state.dirty) return save();
        if (!schedule) {
            if (state.schedule.events.length || Object.keys(state.schedule.weeks).length) save();
            else setSync('saved');
            return;
        }
        const incoming = normalizeSchedule(schedule);
        if (JSON.stringify(incoming) !== JSON.stringify(state.schedule)) {
            const rebuild = incoming.settings.startHour !== state.schedule.settings.startHour
                || incoming.settings.endHour !== state.schedule.settings.endHour;
            state.schedule = incoming;
            writeJson(STORAGE_KEY, { schedule: incoming, dirty: false });
            if (rebuild) buildGrid();
            render();
        }
        setSync('saved');
    } catch {
        setSync('offline');
    }
}

function setSync(kind) {
    const el = $('sync');
    clearTimeout(sync.hideTimer);
    el.dataset.state = kind;
    el.style.opacity = '1';
    if (kind === 'saving') {
        el.innerHTML = '<span class="sync-dot"></span><span class="sync-label">Guardando…</span>';
    } else if (kind === 'saved') {
        el.innerHTML = `${svg('<path d="M5 10.5 8.5 14 15 6.5"/>')}<span class="sync-label">Guardado</span>`;
        sync.hideTimer = setTimeout(() => { el.style.opacity = '0'; }, 2400);
    } else if (kind === 'offline') {
        el.innerHTML = '<span class="sync-dot"></span><span class="sync-label">Sin conexión · guardado en este dispositivo</span>';
    } else {
        el.innerHTML = '<span class="sync-label">No se ha podido guardar.</span> <button type="button">Reintentar</button>';
        el.querySelector('button').addEventListener('click', save);
    }
}

function toLogin() {
    location.replace('/horario/login');
}

// ---------------------------------------------------------------- rejilla

function buildGrid() {
    const { startHour, endHour } = state.schedule.settings;
    const hours = endHour - startHour;
    const today = todayIndex();
    grid.style.setProperty('--hours', hours);
    grid.dataset.view = state.view;
    nodes.clear();
    baseNodes.clear();

    const head = document.createElement('div');
    head.className = 'grid-head';
    head.innerHTML = '<div class="corner"></div>' + DAYS.map((name, day) => `
        <button type="button" class="col-head${day === today ? ' is-today' : ''}" data-day="${day}">
            <span class="col-name"><span class="col-long">${name}</span><span class="col-short">${SHORT[day]}</span><span class="col-date"></span></span>
            <span class="col-meta"></span>
        </button>`).join('');

    const body = document.createElement('div');
    body.className = 'grid-body';
    const labels = Array.from({ length: hours }, (_, i) => `<span class="hour" style="--i:${i}">${fmt((startHour + i) * 60)}</span>`).join('');
    body.innerHTML = `<div class="gutter">${labels}<span class="now-label" hidden></span></div>`
        + DAYS.map((name, day) => `<div class="col${day === today ? ' is-today' : ''}" data-day="${day}" role="group" aria-label="${name}"></div>`).join('');

    grid.replaceChildren(head, body);
    heads = [...head.querySelectorAll('.col-head')];
    cols = [...body.querySelectorAll('.col')];

    const now = document.createElement('div');
    now.className = 'now';
    now.setAttribute('aria-hidden', 'true');
    cols[today].append(now);

    applyView();
    applyMode();
    updateNow();
    fillRangeSelects();
}

// Semana tipo o cambios de una semana: fechas en las columnas, «hoy» solo en la semana actual y
// los textos que dependen de qué se está editando.
function applyMode() {
    const week = inWeek();
    const isCurrent = !week || state.week === currentWeek();
    const today = todayIndex();
    document.body.dataset.mode = state.mode;
    document.querySelectorAll('.mode-item').forEach(item => {
        item.setAttribute('aria-selected', String(item.dataset.mode === state.mode));
    });
    $('weeknav').hidden = !week;
    $('week-label').textContent = weekLabel(state.week);
    $('week-today').hidden = isCurrent;
    $('mode-eyebrow').textContent = week
        ? (isCurrent ? `Cambios de esta semana · ${weekLabel(state.week)}` : `Cambios de la semana del ${weekLabel(state.week)}`)
        : 'Se repite cada semana';
    heads.forEach((head, day) => {
        head.querySelector('.col-date').textContent = week ? String(weekDate(state.week, day).getDate()) : '';
        head.classList.toggle('is-today', isCurrent && day === today);
    });
    cols.forEach((col, day) => col.classList.toggle('is-today', isCurrent && day === today));
    $('daybar').querySelectorAll('button').forEach((button, day) => button.classList.toggle('is-today', isCurrent && day === today));
    const clear = menu.querySelector('[data-action="clear"] .menu-item-label');
    if (clear) clear.textContent = week ? 'Quitar los cambios de esta semana' : 'Vaciar horario';
    if (cols.length) updateNow();
}

function setMode(mode, week = state.week) {
    if (mode === state.mode && week === state.week) return;
    state.mode = mode;
    state.week = week;
    prefs.mode = mode;
    writeJson(PREFS_KEY, prefs);
    applyMode();
    render();
}

function layoutDay(events) {
    const placed = new Map();
    const sorted = [...events].sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
    let cluster = [];
    let clusterEnd = -1;

    const flush = () => {
        const lanes = [];
        for (const event of cluster) {
            let lane = lanes.findIndex(end => end <= event.start);
            if (lane === -1) lane = lanes.length;
            lanes[lane] = event.end;
            placed.set(event.id, { lane, lanes: 0 });
        }
        for (const event of cluster) placed.get(event.id).lanes = lanes.length;
        cluster = [];
    };

    for (const event of sorted) {
        if (cluster.length && event.start >= clusterEnd) flush();
        cluster.push(event);
        clusterEnd = Math.max(clusterEnd, event.end);
    }
    if (cluster.length) flush();
    return placed;
}

// Coloca un nodo de actividad en su columna y con su tamaño, su texto y su etiqueta accesible
function placeNode(node, event, slot, label) {
    const { start: rangeStart, end: rangeEnd } = range();
    const col = cols[event.day];
    if (node.parentElement !== col) {
        const hadFocus = document.activeElement === node;
        col.append(node);
        if (hadFocus) node.focus({ preventScroll: true });
    }
    const top = Math.max(event.start, rangeStart);
    const bottom = Math.min(event.end, rangeEnd);
    node.hidden = bottom <= top;
    node.dataset.color = event.color;
    node.style.setProperty('--top', `calc(var(--hour) * ${(top - rangeStart) / 60})`);
    node.style.setProperty('--h', `calc(var(--hour) * ${(bottom - top) / 60})`);
    node.style.setProperty('--l', (slot.lane / slot.lanes) * 100);
    node.style.setProperty('--w', 100 / slot.lanes);
    node.style.setProperty('--lane', slot.lane);

    const length = event.end - event.start;
    node.classList.toggle('is-compact', length < 45);
    node.classList.toggle('is-tiny', length <= 20);
    // Líneas de título que caben: con la hora debajo (escritorio, 48 px/h) o solas en las
    // columnas estrechas del móvil (46 px/h, título de 10 px).
    node.style.setProperty('--lines', clamp(Math.floor((length / 60 * 48 - 24) / 16), 1, 4));
    node.style.setProperty('--lines-m', clamp(Math.floor((length / 60 * 46 - 5) / 11.5), 1, 8));

    node.querySelector('.ev-title').textContent = event.title;
    node.querySelector('.ev-meta').textContent = `${fmt(event.start)} – ${fmt(event.end)}${event.place ? ` · ${event.place}` : ''}`;
    node.setAttribute('aria-label', `${event.title}, ${DAYS[event.day].toLowerCase()} de ${fmt(event.start)} a ${fmt(event.end)}${event.place ? `, ${event.place}` : ''}${label}`);
}

function dropNode(map, id, node) {
    map.delete(id);
    node.classList.add('is-leaving');
    setTimeout(() => node.remove(), reducedMotion.matches ? 0 : 220);
}

function render() {
    const week = inWeek() ? weekDoc() : null;
    const events = editableEvents();
    const base = week ? state.schedule.events : [];
    const alive = new Set();
    const aliveBase = new Set();
    const totals = Array(7).fill(0);
    const counts = Array(7).fill(0);
    let entering = 0;

    const enter = node => {
        if (reducedMotion.matches) return;
        node.classList.add('is-entering');
        node.style.setProperty('--d', `${state.firstPaint ? Math.min(entering * 22, 320) : 0}ms`);
        entering += 1;
    };

    for (let day = 0; day < 7; day += 1) {
        // Fondo gris: la semana tipo, que en este modo no se toca. No recibe el puntero, así que
        // pulsar o arrastrar encima crea actividades de esta semana como en un hueco libre.
        const dayBase = base.filter(event => event.day === day);
        const basePlaced = layoutDay(dayBase);
        for (const event of dayBase) {
            totals[day] += event.end - event.start;
            counts[day] += 1;
            aliveBase.add(event.id);
            let node = baseNodes.get(event.id);
            if (!node) {
                node = createEventNode(event.id);
                node.classList.add('is-base');
                node.tabIndex = -1;
                baseNodes.set(event.id, node);
                enter(node);
            }
            placeNode(node, event, basePlaced.get(event.id), ', semana tipo');
        }

        const dayEvents = events.filter(event => event.day === day);
        const placed = layoutDay(dayEvents);
        for (const event of dayEvents) {
            totals[day] += event.end - event.start;
            counts[day] += 1;
            alive.add(event.id);
            let node = nodes.get(event.id);
            if (!node) {
                node = createEventNode(event.id);
                nodes.set(event.id, node);
                enter(node);
            }
            node.classList.toggle('is-week', Boolean(week));
            placeNode(node, event, placed.get(event.id), week ? ', solo esta semana' : '');
        }
    }

    for (const [id, node] of nodes) if (!alive.has(id)) dropNode(nodes, id, node);
    for (const [id, node] of baseNodes) if (!aliveBase.has(id)) dropNode(baseNodes, id, node);

    heads.forEach((head, day) => {
        head.querySelector('.col-meta').textContent = totals[day] ? duration(totals[day]) : '';
    });
    renderDaybar(counts);

    const total = totals.reduce((sum, value) => sum + value, 0);
    if (week) {
        $('summary').textContent = events.length
            ? `${events.length} ${events.length === 1 ? 'añadida' : 'añadidas'} solo esta semana · ${duration(total)} en total`
            : 'Lo fijo sale en gris, de fondo. Lo que añadas encima solo vale esta semana.';
    } else {
        $('summary').textContent = events.length
            ? `${events.length} ${events.length === 1 ? 'actividad' : 'actividades'} · ${duration(total)} a la semana`
            : '';
    }
    $('empty').hidden = Boolean(week) || events.length > 0 || Boolean(editing);
    state.firstPaint = false;
}

function createEventNode(id) {
    const node = document.createElement('button');
    node.type = 'button';
    node.className = 'ev';
    node.dataset.id = id;
    node.innerHTML = '<span class="ev-title"></span><span class="ev-meta"></span><span class="ev-resize" aria-hidden="true"></span>';
    node.addEventListener('animationend', () => node.classList.remove('is-entering', 'is-flash'));
    return node;
}

function renderDaybar(counts) {
    const bar = $('daybar');
    const today = todayIndex();
    if (!bar.children.length) {
        bar.setAttribute('role', 'tablist');
        bar.innerHTML = DAYS.map((name, day) => `
            <button type="button" role="tab" data-day="${day}" aria-label="${name}" class="${day === today ? 'is-today' : ''}">
                <span class="daybar-name">${LETTERS[day]}</span>
                <span class="daybar-dots"></span>
            </button>`).join('');
    }
    [...bar.children].forEach((button, day) => {
        button.setAttribute('aria-selected', String(day === state.day));
        button.tabIndex = day === state.day ? 0 : -1;
        button.querySelector('.daybar-dots').innerHTML = '<i></i>'.repeat(Math.min(counts[day], 3));
    });
}

function applyView() {
    grid.dataset.view = state.view;
    document.body.dataset.view = state.view;
    cols.forEach((col, day) => col.classList.toggle('is-active', day === state.day));
    heads.forEach((head, day) => head.classList.toggle('is-active', day === state.day));
    document.querySelectorAll('.seg-item').forEach(item => {
        item.setAttribute('aria-selected', String(item.dataset.view === state.view));
    });
    document.querySelector('.seg').style.setProperty('--seg', state.view === 'day' ? 1 : 0);
    $('daybar').querySelectorAll('button').forEach((button, day) => {
        button.setAttribute('aria-selected', String(day === state.day));
        button.tabIndex = day === state.day ? 0 : -1;
    });
    heads.forEach((head, day) => {
        head.title = state.view === 'day' ? 'Volver a la semana' : `Ver solo el ${DAYS[day].toLowerCase()}`;
    });
    if (cols.length) updateNow();
}

function transition(update, kind) {
    if (!document.startViewTransition || reducedMotion.matches) {
        update();
        return;
    }
    const root = document.documentElement;
    const named = [];
    const name = (el, value) => {
        el.style.viewTransitionName = value;
        named.push(el);
    };

    if (kind === 'view') {
        const box = wrap.getBoundingClientRect();
        for (const [id, node] of nodes) {
            const rect = node.getBoundingClientRect();
            if (!node.hidden && rect.bottom > box.top && rect.top < box.bottom && rect.width) name(node, `ev-${id}`);
        }
    } else {
        root.classList.add(kind === 'next' ? 'vt-slide-next' : 'vt-slide-prev');
        name(cols[state.day], 'day-col');
    }

    const vt = document.startViewTransition(() => {
        if (kind !== 'view') {
            cols[state.day].style.viewTransitionName = '';
        }
        update();
        if (kind !== 'view') name(cols[state.day], 'day-col');
    });
    vt.finished.finally(() => {
        named.forEach(el => { el.style.viewTransitionName = ''; });
        root.classList.remove('vt-slide-next', 'vt-slide-prev');
    });
}

function setView(view, day = state.day) {
    if (view === state.view && day === state.day) return;
    if (view === state.view && view === 'day') return setDay(day);
    transition(() => {
        state.view = view;
        state.day = day;
        applyView();
    }, 'view');
    prefs.view = view;
    writeJson(PREFS_KEY, prefs);
}

function setDay(day) {
    day = (day + 7) % 7;
    if (day === state.day) return;
    const direction = (day > state.day) ? 'next' : 'prev';
    transition(() => {
        state.day = day;
        applyView();
    }, direction);
}

function updateNow() {
    const minutes = nowMinutes();
    const { start, end } = range();
    const today = todayIndex();
    const visible = minutes >= start && minutes <= end && (!inWeek() || state.week === currentWeek());
    const y = `calc(var(--hour) * ${(minutes - start) / 60})`;
    const line = grid.querySelector('.now');
    const label = grid.querySelector('.now-label');
    if (line && line.parentElement !== cols[today]) cols[today].append(line);
    if (line) {
        line.hidden = !visible;
        line.style.setProperty('--now-y', y);
    }
    if (label) {
        label.hidden = !visible || (state.view === 'day' && state.day !== today);
        label.textContent = fmt(minutes);
        label.style.setProperty('--now-y', y);
        grid.querySelectorAll('.hour').forEach(hour => {
            const at = start + Number(hour.style.getPropertyValue('--i')) * 60;
            hour.style.opacity = visible && !label.hidden && Math.abs(at - minutes) < 14 ? '0' : '';
        });
    }
}

function minuteAt(col, clientY) {
    const rect = col.getBoundingClientRect();
    const { start, end } = range();
    return start + ((clientY - rect.top) / rect.height) * (end - start);
}

function dayAt(clientX, fallback) {
    if (state.view === 'day') return fallback;
    let best = fallback;
    let distance = Infinity;
    cols.forEach((col, day) => {
        const rect = col.getBoundingClientRect();
        if (clientX >= rect.left && clientX < rect.right) {
            best = day;
            distance = 0;
        } else if (distance) {
            const d = Math.min(Math.abs(clientX - rect.left), Math.abs(clientX - rect.right));
            if (d < distance) {
                distance = d;
                best = day;
            }
        }
    });
    return best;
}

function scrollToMinute(minutes, behavior = 'auto') {
    const { start, end } = range();
    const col = cols[0];
    if (!col) return;
    const px = ((minutes - start) / (end - start)) * col.offsetHeight;
    wrap.scrollTo({ top: Math.max(0, px - 24), behavior });
}

// ---------------------------------------------------------------- gestos

function onPointerDown(event) {
    if (event.button !== 0 || editing) return;
    const col = event.target.closest('.col');
    if (!col) return;
    const node = event.target.closest('.ev');
    const day = Number(col.dataset.day);
    const base = {
        pointerId: event.pointerId,
        touch: event.pointerType !== 'mouse',
        x: event.clientX,
        y: event.clientY,
        lastX: event.clientX,
        lastY: event.clientY,
        active: false,
        col,
        day
    };

    if (node) {
        const target = findEvent(node.dataset.id);
        if (!target) return;
        gesture = {
            ...base,
            kind: event.target.classList.contains('ev-resize') ? 'resize' : 'move',
            node,
            id: target.id,
            before: snapshot(),
            original: { ...target },
            grab: minuteAt(col, event.clientY) - target.start,
            copy: wantsCopy(event)
        };
    } else {
        gesture = { ...base, kind: 'create', anchor: snap(minuteAt(col, event.clientY)) };
    }

    if (gesture.touch && gesture.kind !== 'create') {
        gesture.timer = setTimeout(() => activate(gesture), 360);
    }
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerCancel);
}

function activate(g) {
    if (gesture !== g || g.active) return;
    g.active = true;
    if (g.kind === 'create') {
        g.ghost = createEventNode('ghost');
        g.ghost.classList.add('is-ghost');
        g.ghost.querySelector('.ev-title').textContent = 'Nueva actividad';
        g.ghost.style.setProperty('--l', 0);
        g.ghost.style.setProperty('--w', 100);
        g.col.append(g.ghost);
        const { start: rangeStart, end: rangeEnd } = range();
        const from = clamp(g.anchor, rangeStart, rangeEnd - SNAP);
        updateGhost(g, from, from + SNAP);
    } else {
        g.node.classList.add(g.kind === 'move' ? 'is-dragging' : 'is-resizing');
        if (g.touch) navigator.vibrate?.(8);
        if (g.kind === 'move') setCopying(g, g.copy);
    }
    if (g.kind !== 'move') document.body.style.cursor = g.kind === 'resize' ? 'ns-resize' : '';
    autoScroll();
}

function wantsCopy(event) {
    return event.ctrlKey || event.metaKey || event.altKey;
}

// Duplicar arrastrando: en el sitio de origen queda una copia (id nuevo) y se sigue arrastrando la
// actividad original. Soltar Ctrl a mitad de gesto lo convierte otra vez en un movimiento normal.
function setCopying(g, copy) {
    if (!g || g.kind !== 'move' || !g.active) return;
    g.copy = copy;
    const hasClone = Boolean(g.cloneId);
    if (copy && !hasClone) {
        if (editableEvents().length >= editableLimit()) {
            g.copy = false;
        } else {
            g.cloneId = uid();
            editableEvents(true).push({ ...g.original, id: g.cloneId });
        }
    } else if (!copy && hasClone) {
        setEditableEvents(editableEvents().filter(item => item.id !== g.cloneId));
        g.cloneId = null;
    }
    g.node.classList.toggle('is-copying', Boolean(g.cloneId));
    document.body.style.cursor = g.cloneId ? 'copy' : 'grabbing';
    if (hasClone !== Boolean(g.cloneId)) render();
}

function onPointerMove(event) {
    const g = gesture;
    if (!g || event.pointerId !== g.pointerId) return;
    g.lastX = event.clientX;
    g.lastY = event.clientY;
    const moved = Math.hypot(event.clientX - g.x, event.clientY - g.y);

    if (!g.active) {
        if (g.touch) {
            if (moved > 8) cancelGesture();
            return;
        }
        if (moved < 4) return;
        activate(g);
    }
    updateGesture(g);
}

function updateGesture(g) {
    const { start: rangeStart, end: rangeEnd } = range();

    if (g.kind === 'create') {
        const current = clamp(snap(minuteAt(g.col, g.lastY)), rangeStart, rangeEnd);
        let from = Math.min(g.anchor, current);
        let to = Math.max(g.anchor, current);
        if (to - from < SNAP) to = Math.min(rangeEnd, from + SNAP);
        if (to - from < SNAP) from = to - SNAP;
        updateGhost(g, from, to);
        return;
    }

    const event = findEvent(g.id);
    if (!event) return;
    if (g.kind === 'move') {
        const length = g.original.end - g.original.start;
        const day = dayAt(g.lastX, event.day);
        const col = cols[day];
        const start = clamp(snap(minuteAt(col, g.lastY) - g.grab), rangeStart, rangeEnd - length);
        if (start === event.start && day === event.day) return;
        event.start = start;
        event.end = start + length;
        event.day = day;
    } else {
        const end = clamp(snap(minuteAt(cols[event.day], g.lastY)), event.start + SNAP, rangeEnd);
        if (end === event.end) return;
        event.end = end;
    }
    render();
}

function updateGhost(g, from, to) {
    const { start } = range();
    g.from = from;
    g.to = to;
    g.ghost.style.setProperty('--top', `calc(var(--hour) * ${(from - start) / 60})`);
    g.ghost.style.setProperty('--h', `calc(var(--hour) * ${(to - from) / 60})`);
    g.ghost.classList.toggle('is-compact', to - from < 45);
    g.ghost.querySelector('.ev-meta').textContent = `${fmt(from)} – ${fmt(to)}`;
}

function autoScroll() {
    const g = gesture;
    if (!g || !g.active) return;
    const box = wrap.getBoundingClientRect();
    const edge = 48;
    let delta = 0;
    if (g.lastY < box.top + edge + 40) delta = -Math.ceil((box.top + edge + 40 - g.lastY) / 6);
    else if (g.lastY > box.bottom - edge) delta = Math.ceil((g.lastY - (box.bottom - edge)) / 6);
    if (delta) {
        const before = wrap.scrollTop;
        wrap.scrollTop += clamp(delta, -18, 18);
        if (wrap.scrollTop !== before) updateGesture(g);
    }
    requestAnimationFrame(autoScroll);
}

function endListeners() {
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerCancel);
    document.body.style.cursor = '';
}

function onPointerUp(event) {
    const g = gesture;
    if (!g || event.pointerId !== g.pointerId) return;
    clearTimeout(g.timer);
    endListeners();
    gesture = null;

    if (g.kind === 'create') {
        if (g.active) {
            openEditor({ draft: { day: g.day, start: g.from, end: g.to }, ghost: g.ghost });
        } else {
            const { start: rangeStart, end: rangeEnd } = range();
            const from = clamp(Math.floor(minuteAt(g.col, g.y) / 30) * 30, rangeStart, rangeEnd - 60);
            g.active = true;
            g.ghost = createEventNode('ghost');
            g.ghost.classList.add('is-ghost');
            g.ghost.querySelector('.ev-title').textContent = 'Nueva actividad';
            g.ghost.style.setProperty('--l', 0);
            g.ghost.style.setProperty('--w', 100);
            g.col.append(g.ghost);
            updateGhost(g, from, Math.min(rangeEnd, from + 60));
            openEditor({ draft: { day: g.day, start: g.from, end: g.to }, ghost: g.ghost });
        }
        return;
    }

    g.node.classList.remove('is-dragging', 'is-resizing');
    if (!g.active) {
        openEditor({ id: g.id, anchor: g.node });
        return;
    }
    g.node.classList.remove('is-copying');
    const event2 = findEvent(g.id);
    const moved = event2 && (event2.start !== g.original.start || event2.end !== g.original.end || event2.day !== g.original.day);
    if (g.cloneId && !moved) {
        state.schedule = g.before;
        render();
        return;
    }
    if (moved) {
        pushHistory(g.before);
        changed();
        if (g.cloneId) {
            g.node.classList.add('is-flash');
            toast(`«${event2.title}» duplicada en ${DAYS[event2.day].toLowerCase()} a las ${fmt(event2.start)}`, 'Deshacer', undo);
        }
    }
}

function onPointerCancel() {
    cancelGesture();
}

function cancelGesture() {
    const g = gesture;
    if (!g) return;
    clearTimeout(g.timer);
    endListeners();
    gesture = null;
    g.ghost?.remove();
    g.node?.classList.remove('is-dragging', 'is-resizing', 'is-copying');
    if (g.active && g.before) {
        state.schedule = g.before;
        render();
    }
}

// Un toque largo en móvil no debe desplazar la página mientras se arrastra.
wrap.addEventListener('touchmove', event => {
    if (gesture?.active) event.preventDefault();
}, { passive: false });

// ---------------------------------------------------------------- editor

function buildEditorControls() {
    $('ev-days').innerHTML = DAYS.map((name, day) => `
        <button type="button" class="day-chip" data-day="${day}" aria-pressed="false" aria-label="${name}">${LETTERS[day]}</button>`).join('');
    $('ev-colors').insertAdjacentHTML('beforeend', Object.entries(COLORS)
        .filter(([, [, , legacy]]) => !legacy)
        .map(([key, [label, hex]]) => `
        <input type="radio" name="color" value="${key}" class="swatch" style="--c:${hex}" aria-label="${label}" title="${label}">`).join(''));
}

function openEditor({ id = null, draft = null, ghost = null, anchor = null }) {
    closeMenu();
    const event = id ? findEvent(id) : null;
    const data = event || {
        title: '',
        day: draft.day,
        start: draft.start,
        end: draft.end,
        color: prefs.color && COLORS[prefs.color] ? prefs.color : 'ink',
        place: '',
        notes: ''
    };
    editing = { id, ghost, anchor: anchor || ghost, days: new Set([data.day]), openedAt: performance.now() };

    $('ev-title').value = data.title;
    $('ev-start').value = fmt(data.start);
    $('ev-end').value = fmt(Math.min(data.end, 1439));
    if (data.end === 1440) $('ev-end').value = '23:59';
    $('ev-place').value = data.place;
    $('ev-notes').value = data.notes;
    form.querySelectorAll('.swatch').forEach(swatch => { swatch.checked = swatch.value === data.color; });
    $('ev-delete').hidden = !event;
    $('ev-days-label').textContent = inWeek() ? 'Solo esta semana, el' : 'Se repite cada';
    $('ev-error').hidden = true;
    $('ev-save').textContent = event ? 'Guardar' : 'Añadir';
    syncDayChips();
    syncDuration();
    tintGhost();

    editor.classList.remove('is-closing');
    editor.showModal();
    positionEditor();
    $('empty').hidden = true;
    if (event) {
        nodes.get(id)?.classList.add('is-selected');
        $('ev-title').focus();
        $('ev-title').setSelectionRange(9999, 9999);
    } else {
        $('ev-title').focus();
    }
}

function positionEditor() {
    if (mobile.matches) {
        editor.style.left = '';
        editor.style.top = '';
        return;
    }
    const anchor = editing?.anchor;
    const card = editor.getBoundingClientRect();
    const width = card.width;
    const height = card.height;
    const gap = 12;
    let left;
    let top;
    let origin;

    if (anchor && anchor.isConnected) {
        const rect = anchor.getBoundingClientRect();
        if (rect.right + gap + width <= innerWidth - 12) {
            left = rect.right + gap;
            origin = 'left';
        } else if (rect.left - gap - width >= 12) {
            left = rect.left - gap - width;
            origin = 'right';
        } else {
            left = clamp(rect.left + rect.width / 2 - width / 2, 12, innerWidth - width - 12);
            origin = 'center';
        }
        top = clamp(rect.top - 8, 12, innerHeight - height - 12);
        origin += ` ${clamp(rect.top + 16 - top, 16, height - 16)}px`;
    } else {
        left = (innerWidth - width) / 2;
        top = Math.max(12, (innerHeight - height) / 2.4);
        origin = 'center';
    }
    editor.style.left = `${Math.round(left)}px`;
    editor.style.top = `${Math.round(top)}px`;
    editor.querySelector('.editor-card').style.setProperty('--origin', origin);
}

function syncDayChips() {
    $('ev-days').querySelectorAll('.day-chip').forEach(chip => {
        chip.setAttribute('aria-pressed', String(editing.days.has(Number(chip.dataset.day))));
    });
}

function syncDuration() {
    const start = parseTime($('ev-start').value);
    let end = parseTime($('ev-end').value);
    if (end === 1439) end = 1440;
    $('ev-duration').textContent = start !== null && end !== null && end > start ? duration(end - start) : '';
    const g = editing?.ghost;
    if (g && start !== null && end !== null && end > start) {
        const { start: rangeStart } = range();
        g.style.setProperty('--top', `calc(var(--hour) * ${(start - rangeStart) / 60})`);
        g.style.setProperty('--h', `calc(var(--hour) * ${(end - start) / 60})`);
        g.querySelector('.ev-meta').textContent = `${fmt(start)} – ${fmt(end)}`;
    }
}

function tintGhost() {
    const g = editing?.ghost;
    if (!g) return;
    g.dataset.color = form.elements.color.value || 'ink';
    g.querySelector('.ev-title').textContent = $('ev-title').value.trim() || 'Nueva actividad';
}

function editorError(message, field) {
    const el = $('ev-error');
    el.textContent = message;
    el.hidden = false;
    field?.focus();
}

function saveEditor() {
    const title = $('ev-title').value.trim();
    const start = parseTime($('ev-start').value);
    let end = parseTime($('ev-end').value);
    if (end === 1439) end = 1440;
    if (!title) return editorError('Ponle un nombre a la actividad.', $('ev-title'));
    if (!editing.days.size) return editorError('Elige al menos un día.');
    if (start === null || end === null) return editorError('Revisa las horas.', $('ev-start'));
    if (end <= start) return editorError('La hora de fin tiene que ser posterior a la de inicio.', $('ev-end'));

    const fields = {
        title: title.slice(0, 80),
        start: snap(start, 5),
        end: snap(end, 5),
        color: form.elements.color.value || (editing.id ? findEvent(editing.id)?.color : '') || 'ink',
        place: $('ev-place').value.trim().slice(0, 80),
        notes: $('ev-notes').value.trim().slice(0, 500)
    };
    const days = [...editing.days].sort((a, b) => a - b);
    const id = editing.id;
    const added = [];

    commit(() => {
        let remaining = days;
        if (id) {
            const event = findEvent(id);
            const day = days.includes(event.day) ? event.day : days[0];
            Object.assign(event, fields, { day });
            remaining = days.filter(d => d !== day);
        }
        for (const day of remaining) {
            if (editableEvents().length >= editableLimit()) break;
            const event = { id: uid(), day, ...fields };
            editableEvents(true).push(event);
            added.push(event.id);
        }
        // Si la actividad cae fuera de la franja visible, la franja se amplía.
        const settings = state.schedule.settings;
        const startHour = Math.min(settings.startHour, Math.floor(fields.start / 60));
        const endHour = Math.max(settings.endHour, Math.ceil(fields.end / 60));
        if (startHour !== settings.startHour || endHour !== settings.endHour) {
            settings.startHour = startHour;
            settings.endHour = endHour;
            buildGrid();
        }
    });

    prefs.color = fields.color;
    writeJson(PREFS_KEY, prefs);
    const ghost = editing.ghost;
    editing.ghost = null;
    ghost?.remove();
    closeEditor();
    if (id) nodes.get(id)?.classList.add('is-flash');
    if (added.length > 1) toast(`${added.length} actividades añadidas`, 'Deshacer', undo);
}

function deleteEditing() {
    const id = editing?.id;
    if (!id) return;
    closeEditor();
    deleteEvent(id);
}

function deleteEvent(id) {
    const event = findEvent(id);
    if (!event) return;
    commit(() => {
        setEditableEvents(editableEvents().filter(item => item.id !== id));
    });
    toast(`«${event.title}» eliminada${inWeek() ? ' de esta semana' : ''}`, 'Deshacer', undo);
}

function closeEditor() {
    if (!editor.open || editor.classList.contains('is-closing')) return;
    const current = editing;
    const finish = () => {
        editor.classList.remove('is-closing');
        if (editor.open) editor.close();
    };
    if (current?.ghost) {
        current.ghost.classList.add('is-leaving');
        setTimeout(() => current.ghost.remove(), 200);
    }
    if (current?.id) {
        const node = nodes.get(current.id);
        node?.classList.remove('is-selected');
        requestAnimationFrame(() => node?.focus({ preventScroll: true }));
    }
    editing = null;
    $('empty').hidden = inWeek() || state.schedule.events.length > 0;
    if (reducedMotion.matches) finish();
    else {
        editor.classList.add('is-closing');
        setTimeout(finish, mobile.matches ? 220 : 150);
    }
}

// ---------------------------------------------------------------- menú

function fillRangeSelects() {
    const { startHour, endHour } = state.schedule.settings;
    $('range-start').innerHTML = Array.from({ length: 24 }, (_, h) =>
        `<option value="${h}"${h === startHour ? ' selected' : ''}${h >= endHour ? ' disabled' : ''}>${fmt(h * 60)}</option>`).join('');
    $('range-end').innerHTML = Array.from({ length: 24 }, (_, i) => i + 1).map(h =>
        `<option value="${h}"${h === endHour ? ' selected' : ''}${h <= startHour ? ' disabled' : ''}>${fmt(h * 60)}</option>`).join('');
}

function changeRange() {
    const startHour = Number($('range-start').value);
    const endHour = Number($('range-end').value);
    if (endHour <= startHour) return fillRangeSelects();
    const top = wrap.scrollTop;
    commit(() => {
        state.schedule.settings = { startHour, endHour };
        buildGrid();
    });
    wrap.scrollTop = top;
}

function openMenu() {
    if (!menu.hidden) return closeMenu();
    const rect = menuButton.getBoundingClientRect();
    menu.style.top = `${rect.bottom + 8}px`;
    menu.style.right = `${Math.max(12, innerWidth - rect.right)}px`;
    menu.classList.remove('is-closing');
    menu.hidden = false;
    menuButton.setAttribute('aria-expanded', 'true');
    fillRangeSelects();
}

function closeMenu({ focus = false } = {}) {
    if (menu.hidden || menu.classList.contains('is-closing')) return;
    menuButton.setAttribute('aria-expanded', 'false');
    if (focus) menuButton.focus();
    if (reducedMotion.matches) {
        menu.hidden = true;
        return;
    }
    menu.classList.add('is-closing');
    setTimeout(() => {
        menu.hidden = true;
        menu.classList.remove('is-closing');
    }, 140);
}

async function menuAction(action) {
    closeMenu();
    if (action === 'print') {
        setTimeout(() => print(), 160);
    } else if (action === 'export') {
        const blob = new Blob([JSON.stringify(state.schedule, null, 2)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `horario-${new Date().toISOString().slice(0, 10)}.json`;
        link.click();
        setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    } else if (action === 'import') {
        $('import-file').click();
    } else if (action === 'clear') {
        if (inWeek()) {
            if (!state.schedule.weeks[state.week]) return;
            commit(() => { delete state.schedule.weeks[state.week]; });
            toast('Esta semana vuelve a ser como la semana tipo', 'Deshacer', undo);
            return;
        }
        if (!state.schedule.events.length) return;
        commit(() => { state.schedule.events = []; });
        toast('Horario vaciado', 'Deshacer', undo);
    } else if (action === 'logout') {
        if (state.dirty) await save();
        await fetch('/api/horario-session', { method: 'DELETE', credentials: 'same-origin' }).catch(() => {});
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {
            // Sin almacenamiento local no hay copia que borrar.
        }
        toLogin();
    }
}

async function importFile(file) {
    try {
        const data = JSON.parse(await file.text());
        const schedule = normalizeSchedule(data.schedule || data);
        commit(() => { state.schedule = schedule; });
        buildGrid();
        render();
        toast(`Copia restaurada · ${schedule.events.length} actividades`, 'Deshacer', undo);
    } catch {
        toast('Ese archivo no es una copia del horario.');
    }
}

// ---------------------------------------------------------------- toast

let toastTimer = 0;
function toast(text, actionLabel = '', action = null) {
    const el = $('toast');
    const button = $('toast-action');
    $('toast-text').textContent = text;
    button.textContent = actionLabel;
    button.onclick = action ? () => { hideToast(); action(); } : null;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(hideToast, actionLabel ? 6000 : 3200);
}

function hideToast() {
    $('toast').hidden = true;
}

// ---------------------------------------------------------------- acciones rápidas

function newEventNow() {
    if (editing) return;
    const day = state.view === 'day' ? state.day : todayIndex();
    const { start: rangeStart, end: rangeEnd } = range();
    let start = clamp(Math.ceil(nowMinutes() / 60) * 60, rangeStart, rangeEnd - 60);
    if (day !== todayIndex()) start = clamp(9 * 60, rangeStart, rangeEnd - 60);
    const col = cols[day];
    const ghost = createEventNode('ghost');
    ghost.classList.add('is-ghost');
    ghost.style.setProperty('--l', 0);
    ghost.style.setProperty('--w', 100);
    col.append(ghost);
    updateGhost({ ghost }, start, start + 60);
    ghost.querySelector('.ev-title').textContent = 'Nueva actividad';
    scrollIntoViewIfNeeded(ghost);
    openEditor({ draft: { day, start, end: start + 60 }, ghost });
}

function scrollIntoViewIfNeeded(node) {
    const box = wrap.getBoundingClientRect();
    const rect = node.getBoundingClientRect();
    if (rect.top < box.top + 60 || rect.bottom > box.bottom - 20) {
        wrap.scrollTop += rect.top - box.top - box.height / 3;
    }
}

function moveWithKeys(event, node) {
    const target = findEvent(node.dataset.id);
    if (!target) return false;
    const { start: rangeStart, end: rangeEnd } = range();
    const length = target.end - target.start;
    let { day, start, end } = target;

    switch (event.key) {
        case 'ArrowUp':
            if (event.shiftKey) end = Math.max(start + SNAP, end - SNAP);
            else { start = Math.max(rangeStart, start - SNAP); end = start + length; }
            break;
        case 'ArrowDown':
            if (event.shiftKey) end = Math.min(rangeEnd, end + SNAP);
            else { start = Math.min(rangeEnd - length, start + SNAP); end = start + length; }
            break;
        case 'ArrowLeft':
            day = Math.max(0, day - 1);
            break;
        case 'ArrowRight':
            day = Math.min(6, day + 1);
            break;
        case 'Delete':
        case 'Backspace':
            deleteEvent(target.id);
            return true;
        default:
            return false;
    }
    if (day === target.day && start === target.start && end === target.end) return true;
    commit(() => Object.assign(target, { day, start, end }));
    if (state.view === 'day' && day !== state.day) setDay(day);
    node.focus({ preventScroll: true });
    return true;
}

// ---------------------------------------------------------------- copiar y pegar

function targetEventId() {
    const focused = document.activeElement?.closest?.('.ev:not(.is-ghost)');
    return focused?.dataset.id || hover?.id || null;
}

function copyEvent(cut = false) {
    const event = findEvent(targetEventId());
    if (!event) return false;
    const { id, ...data } = event;
    clipboard = data;
    if (cut) {
        commit(() => {
            setEditableEvents(editableEvents().filter(item => item.id !== id));
        });
        toast(`«${event.title}» cortada · Ctrl+V para pegarla`, 'Deshacer', undo);
    } else {
        nodes.get(id)?.classList.add('is-flash');
        toast(`«${event.title}» copiada · Ctrl+V para pegarla`);
    }
    return true;
}

// Pega donde está el puntero; si no está sobre el horario, el día siguiente a la misma hora.
function pasteEvent() {
    if (!clipboard) return false;
    if (editableEvents().length >= editableLimit()) {
        toast('No caben más actividades.');
        return true;
    }
    const { start: rangeStart, end: rangeEnd } = range();
    const length = clipboard.end - clipboard.start;
    let day;
    let start;
    if (hover) {
        day = hover.day;
        start = snap(hover.minute - Math.min(length, 60) / 2);
    } else {
        const focused = findEvent(document.activeElement?.closest?.('.ev')?.dataset.id);
        day = ((focused ? focused.day : clipboard.day) + 1) % 7;
        start = focused ? focused.start : clipboard.start;
    }
    start = clamp(start, rangeStart, Math.max(rangeStart, rangeEnd - length));
    const pasted = { ...clipboard, id: uid(), day, start, end: Math.min(1440, start + length) };

    commit(() => editableEvents(true).push(pasted));
    if (state.view === 'day' && day !== state.day) setDay(day);
    const node = nodes.get(pasted.id);
    if (node) {
        node.classList.add('is-flash');
        node.focus({ preventScroll: true });
        scrollIntoViewIfNeeded(node);
    }
    toast(`«${pasted.title}» pegada en ${DAYS[day].toLowerCase()} a las ${fmt(pasted.start)}`, 'Deshacer', undo);
    return true;
}

// ---------------------------------------------------------------- eventos

function bind() {
    grid.addEventListener('pointerdown', onPointerDown);

    grid.addEventListener('click', event => {
        const head = event.target.closest('.col-head');
        if (head) {
            const day = Number(head.dataset.day);
            setView(state.view === 'day' ? 'week' : 'day', day);
            return;
        }
        // Teclado (Intro/Espacio sobre una actividad): el ratón ya abre el editor en pointerup.
        const node = event.target.closest('.ev');
        if (node && event.detail === 0 && !node.classList.contains('is-ghost')) {
            openEditor({ id: node.dataset.id, anchor: node });
        }
    });

    grid.addEventListener('keydown', event => {
        const node = event.target.closest('.ev');
        if (node && !event.metaKey && !event.ctrlKey && !event.altKey && moveWithKeys(event, node)) {
            event.preventDefault();
        }
    });

    document.querySelectorAll('.seg-item').forEach(item => {
        item.addEventListener('click', () => setView(item.dataset.view));
    });

    // Semana tipo / cambios de la semana
    document.querySelectorAll('.mode-item').forEach(item => {
        item.addEventListener('click', () => setMode(item.dataset.mode, item.dataset.mode === 'week' && state.mode !== 'week' ? currentWeek() : state.week));
    });
    $('week-prev').addEventListener('click', () => setMode('week', shiftWeek(state.week, -1)));
    $('week-next').addEventListener('click', () => setMode('week', shiftWeek(state.week, 1)));
    $('week-today').addEventListener('click', () => setMode('week', currentWeek()));

    $('daybar').addEventListener('click', event => {
        const button = event.target.closest('button[data-day]');
        if (button) setDay(Number(button.dataset.day));
    });
    $('daybar').addEventListener('keydown', event => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        setDay(state.day + (event.key === 'ArrowRight' ? 1 : -1));
        $('daybar').querySelector(`[data-day="${state.day}"]`).focus();
    });

    $('new-event').addEventListener('click', newEventNow);
    $('empty-new').addEventListener('click', newEventNow);

    // Editor
    form.addEventListener('submit', event => {
        event.preventDefault();
        saveEditor();
    });
    $('ev-cancel').addEventListener('click', closeEditor);
    $('ev-delete').addEventListener('click', deleteEditing);
    editor.addEventListener('cancel', event => {
        event.preventDefault();
        closeEditor();
    });
    editor.addEventListener('click', event => {
        // En táctil el clic sintético del mismo toque que abrió el editor cae en el fondo.
        if (event.target === editor && performance.now() - (editing?.openedAt || 0) > 450) closeEditor();
    });
    $('ev-days').addEventListener('click', event => {
        const chip = event.target.closest('.day-chip');
        if (!chip || !editing) return;
        const day = Number(chip.dataset.day);
        if (editing.days.has(day)) editing.days.delete(day);
        else editing.days.add(day);
        syncDayChips();
    });
    $('ev-start').addEventListener('change', () => {
        // Al mover el inicio se conserva la duración.
        const start = parseTime($('ev-start').value);
        const previous = Number($('ev-start').dataset.previous ?? start);
        let end = parseTime($('ev-end').value);
        if (start !== null && end !== null) {
            end = Math.min(1439, end + (start - previous));
            if (end > start) $('ev-end').value = fmt(end);
        }
        $('ev-start').dataset.previous = String(start);
        syncDuration();
    });
    $('ev-start').addEventListener('focus', () => {
        $('ev-start').dataset.previous = String(parseTime($('ev-start').value));
    });
    $('ev-end').addEventListener('input', syncDuration);
    $('ev-title').addEventListener('input', () => {
        $('ev-error').hidden = true;
        tintGhost();
    });
    $('ev-colors').addEventListener('change', tintGhost);
    form.addEventListener('keydown', event => {
        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            saveEditor();
        }
    });

    // Menú
    menuButton.addEventListener('click', openMenu);
    menu.addEventListener('click', event => {
        const item = event.target.closest('[data-action]');
        if (item) menuAction(item.dataset.action);
    });
    menu.addEventListener('keydown', event => {
        const items = [...menu.querySelectorAll('[role="menuitem"]')];
        const index = items.indexOf(document.activeElement);
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            const next = event.key === 'ArrowDown' ? index + 1 : index - 1;
            items[(next + items.length) % items.length].focus();
        }
    });
    $('range-start').addEventListener('change', changeRange);
    $('range-end').addEventListener('change', changeRange);
    $('import-file').addEventListener('change', event => {
        const [file] = event.target.files;
        if (file) importFile(file);
        event.target.value = '';
    });
    document.addEventListener('pointerdown', event => {
        if (!menu.hidden && !menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });

    // Pulsar o soltar Ctrl a mitad de un arrastre cambia entre mover y duplicar.
    const syncCopyKey = event => {
        if (gesture?.active && gesture.kind === 'move' && ['Control', 'Meta', 'Alt'].includes(event.key)) {
            setCopying(gesture, wantsCopy(event));
        }
    };
    document.addEventListener('keyup', syncCopyKey);

    // Dónde está el puntero: Ctrl+V pega ahí y Ctrl+C copia la actividad que hay debajo.
    grid.addEventListener('pointermove', event => {
        if (gesture || event.pointerType !== 'mouse') return;
        const col = event.target.closest('.col');
        hover = col ? {
            day: Number(col.dataset.day),
            minute: minuteAt(col, event.clientY),
            id: event.target.closest('.ev:not(.is-ghost):not(.is-base)')?.dataset.id || null
        } : null;
    });
    grid.addEventListener('pointerleave', () => { hover = null; });

    // Atajos globales
    document.addEventListener('keydown', event => {
        syncCopyKey(event);
        if (event.key === 'Escape' && !menu.hidden) {
            closeMenu({ focus: true });
            return;
        }
        if (editor.open) return;
        const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName);
        const mod = event.metaKey || event.ctrlKey;
        const key = event.key.toLowerCase();
        if (mod && !event.shiftKey && !event.altKey && !typing && (key === 'c' || key === 'x')) {
            if (copyEvent(key === 'x')) event.preventDefault();
        } else if (mod && !event.shiftKey && !event.altKey && !typing && key === 'v') {
            if (pasteEvent()) event.preventDefault();
        } else if (mod && event.key.toLowerCase() === 'z' && !typing) {
            event.preventDefault();
            if (event.shiftKey) redo();
            else undo();
        } else if (mod && event.key.toLowerCase() === 'y' && !typing) {
            event.preventDefault();
            redo();
        } else if (!mod && !event.altKey && !typing && event.key.toLowerCase() === 'n') {
            event.preventDefault();
            newEventNow();
        } else if (!mod && !typing && state.view === 'day' && !event.target.closest?.('.ev, .daybar, .seg')
            && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
            setDay(state.day + (event.key === 'ArrowRight' ? 1 : -1));
        }
    });

    // Deslizar entre días en móvil
    let swipe = null;
    wrap.addEventListener('touchstart', event => {
        if (event.touches.length !== 1 || state.view !== 'day') return;
        swipe = { x: event.touches[0].clientX, y: event.touches[0].clientY, t: Date.now() };
    }, { passive: true });
    wrap.addEventListener('touchend', event => {
        if (!swipe || gesture?.active) return (swipe = null);
        const touch = event.changedTouches[0];
        const dx = touch.clientX - swipe.x;
        const dy = touch.clientY - swipe.y;
        if (Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy) * 1.6 && Date.now() - swipe.t < 600) {
            setDay(state.day + (dx < 0 ? 1 : -1));
        }
        swipe = null;
    }, { passive: true });

    mobile.addEventListener('change', () => {
        if (editor.open) positionEditor();
    });
    addEventListener('resize', () => {
        if (editor.open) positionEditor();
    });

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            updateNow();
            if (!state.dirty && !editing) pull();
        } else if (state.dirty) {
            fetch('/api/horario', {
                method: 'PUT',
                keepalive: true,
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ schedule: state.schedule })
            }).catch(() => {});
        }
    });
    addEventListener('online', () => {
        if (state.dirty) save();
    });

    setInterval(updateNow, 30_000);
}

// ---------------------------------------------------------------- inicio

buildEditorControls();
buildGrid();
render();
bind();

const today = todayIndex();
const firstToday = state.schedule.events.filter(event => event.day === today).sort((a, b) => a.start - b.start)[0];
scrollToMinute(Math.min(nowMinutes() - 60, firstToday ? firstToday.start - 30 : Infinity));

if (state.dirty) setSync('saving');
pull();
