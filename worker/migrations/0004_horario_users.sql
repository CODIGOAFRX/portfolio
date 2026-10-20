-- Horario abierto: cada visitante puede crear su cuenta y tiene su propio documento en
-- `schedules` con id `u:<id>` (el horario original sigue en `main`). La contraseña llega ya
-- derivada con scrypt desde Vercel; aquí nunca hay contraseñas en claro.
CREATE TABLE IF NOT EXISTS horario_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL,
    created_ip TEXT,
    last_login_at TEXT,
    last_ip TEXT
);

CREATE INDEX IF NOT EXISTS horario_users_created_ip_idx ON horario_users(created_ip, created_at);

-- IPs que el administrador ha bloqueado: no pueden entrar, crear cuentas ni leer o guardar horarios.
CREATE TABLE IF NOT EXISTS horario_blocked_ips (
    ip TEXT PRIMARY KEY,
    reason TEXT,
    created_at TEXT NOT NULL
);
