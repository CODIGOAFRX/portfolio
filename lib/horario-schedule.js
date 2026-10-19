// Formato del horario semanal y su saneado. Lo usa la API antes de guardar y los tests; el cliente
// (horario/app.js) mantiene la misma forma.
//
// { version: 1, settings: { startHour, endHour }, events: [{ id, title, day, start, end, color, place, notes }] }
//   day:   0 = lunes … 6 = domingo
//   start/end: minutos desde las 00:00, múltiplos de 5

// Tonos de la paleta (el aspecto vive en horario/horario.css). Los primeros cinco son la escala de
// grises de la web; el resto, colores apagados para distinguir tareas.
export const COLORS = ['ink', 'graphite', 'stone', 'mist', 'paper', 'red', 'blue', 'green', 'yellow', 'purple', 'teal', 'orange'];
export const MAX_EVENTS = 400;

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
    return { version: 1, settings: { startHour: 7, endHour: 23 }, events: [] };
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

export function normalizeSchedule(raw) {
    const base = emptySchedule();
    if (!raw || typeof raw !== 'object') return base;

    let startHour = clampInt(raw.settings?.startHour, 0, 23, base.settings.startHour);
    let endHour = clampInt(raw.settings?.endHour, 1, 24, base.settings.endHour);
    if (endHour <= startHour) {
        startHour = base.settings.startHour;
        endHour = base.settings.endHour;
    }

    const seen = new Set();
    const events = [];
    for (const item of Array.isArray(raw.events) ? raw.events.slice(0, MAX_EVENTS) : []) {
        const event = normalizeEvent(item);
        if (!event || seen.has(event.id)) continue;
        seen.add(event.id);
        events.push(event);
    }
    events.sort((a, b) => a.day - b.day || a.start - b.start);

    return { version: 1, settings: { startHour, endHour }, events };
}
