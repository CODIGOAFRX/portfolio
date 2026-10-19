-- Horario semanal privado (pedrogomez.dev/horario): un documento JSON por horario.
CREATE TABLE IF NOT EXISTS schedules (
    id TEXT PRIMARY KEY,
    data TEXT NOT NULL,
    updated_at TEXT NOT NULL
);
