// Formato del horario semanal y su saneado. Lo usa la API antes de guardar y los tests; el cliente
// (horario/app.js) mantiene la misma forma.
//
// { version: 1, settings: { startHour, endHour }, events: [{ id, title, day, start, end, color, place, notes }],
//   weeks: { 'AAAA-MM-DD': { events: [...], hidden: [id, …] } } }
//   day:   0 = lunes … 6 = domingo
//   start/end: minutos desde las 00:00, múltiplos de 5
//   events: la semana tipo, que se repite. weeks: cambios de una semana concreta (la clave es su
//   lunes): actividades que solo valen esa semana y las de la semana tipo que esa semana no están.

// Tonos de la paleta (el aspecto vive en horario/horario.css). Los primeros cinco son la escala de
// grises de la web; el resto, colores apagados para distinguir tareas.
export const COLORS = ['ink', 'graphite', 'stone', 'mist', 'paper', 'red', 'blue', 'green', 'yellow', 'purple', 'teal', 'orange'];
export const MAX_EVENTS = 400;
export const MAX_WEEKS = 26;
export const MAX_WEEK_EVENTS = 200;

function clampInt(value, min, max, fallback) {
    const number = Math.round(Number(value));
    if (!Number.isFinite(number)) return fallback;
    return Math.min(max, Math.max(min, number));
}

function cleanText(value, max) {
    if (value === undefined || value === null) return '';
    return String(value).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);
}

function snap(minutes) {
    return Math.round(minutes / 5) * 5;
}

export function emptySchedule() {
    return { version: 1, settings: { startHour: 7, endHour: 23 }, events: [], weeks: {} };
}

export function normalizeEvent(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const id = cleanText(raw.id, 40).replace(/[^A-Za-z0-9_-]/g, '');
    const title = cleanText(raw.title, 80);
    if (!id || !title) return null;

    const day = Number(raw.day);
    if (!Number.isInteger(day) || day < 0 || day > 6) return null;
    const start = snap(clampInt(raw.start, 0, 1435, 0));
    const end = snap(clampInt(raw.end, 5, 1440, start + 60));
    if (end <= start) return null;

    return {
        id,
        title,
        day,
        start,
        end,
        color: COLORS.includes(raw.color) ? raw.color : 'ink',
        place: cleanText(raw.place, 80),
        notes: cleanText(raw.notes, 500)
    };
}

function normalizeEvents(list, max) {
    const seen = new Set();
    const events = [];
    for (const item of Array.isArray(list) ? list.slice(0, max) : []) {
        const event = normalizeEvent(item);
        if (!event || seen.has(event.id)) continue;
        seen.add(event.id);
        events.push(event);
    }
    return events.sort((a, b) => a.day - b.day || a.start - b.start);
}

// Solo lunes con fecha real. Se guardan las MAX_WEEKS más recientes y se descartan las vacías.
export function normalizeWeeks(raw) {
    const weeks = {};
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return weeks;
    const keys = Object.keys(raw)
        .filter(key => /^\d{4}-\d{2}-\d{2}$/.test(key))
        .filter(key => {
            const date = new Date(`${key}T00:00:00Z`);
            return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === key && date.getUTCDay() === 1;
        })
        .sort()
        .reverse()
        .slice(0, MAX_WEEKS);

    for (const key of keys) {
        const week = raw[key] || {};
        const events = normalizeEvents(week.events, MAX_WEEK_EVENTS);
        const hidden = [...new Set((Array.isArray(week.hidden) ? week.hidden : [])
            .map(id => cleanText(id, 40).replace(/[^A-Za-z0-9_-]/g, ''))
            .filter(Boolean))].slice(0, MAX_EVENTS);
        if (events.length || hidden.length) weeks[key] = { events, hidden };
    }
    return weeks;
}

export function normalizeSchedule(raw) {
    const base = emptySchedule();
    if (!raw || typeof raw !== 'object') return base;

    let startHour = clampInt(raw.settings?.startHour, 0, 23, base.settings.startHour);
    let endHour = clampInt(raw.settings?.endHour, 1, 24, base.settings.endHour);
    if (endHour <= startHour) {
        startHour = base.settings.startHour;
        endHour = base.settings.endHour;
    }

    const events = normalizeEvents(raw.events, MAX_EVENTS);
    return { version: 1, settings: { startHour, endHour }, events, weeks: normalizeWeeks(raw.weeks) };
}
