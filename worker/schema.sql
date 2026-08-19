CREATE TABLE IF NOT EXISTS jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source_id TEXT NOT NULL UNIQUE,
    source_email_id TEXT,
    source TEXT NOT NULL,
    title TEXT NOT NULL,
    company TEXT,
    location TEXT,
    work_mode TEXT,
    url TEXT,
    summary TEXT,
    technologies TEXT NOT NULL DEFAULT '[]',
    match_reasons TEXT NOT NULL DEFAULT '[]',
    gaps TEXT NOT NULL DEFAULT '[]',
    fit_score INTEGER NOT NULL DEFAULT 0,
    recommended_cv TEXT,
    priority TEXT NOT NULL DEFAULT 'low',
    status TEXT NOT NULL DEFAULT 'pending',
    easy_apply INTEGER NOT NULL DEFAULT 0,
    received_at TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS jobs_status_idx ON jobs(status);
CREATE INDEX IF NOT EXISTS jobs_received_at_idx ON jobs(received_at DESC);
CREATE INDEX IF NOT EXISTS jobs_fit_score_idx ON jobs(fit_score DESC);

CREATE TABLE IF NOT EXISTS sync_runs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source TEXT NOT NULL,
    checked_emails INTEGER NOT NULL DEFAULT 0,
    upserted_jobs INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL
);
