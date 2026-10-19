// Inicio de sesión del horario. Sin JS el formulario se envía igual (POST clásico con redirección).
const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const error = document.getElementById('login-error');

const MESSAGES = {
    1: 'El usuario o la contraseña no son correctos.',
    config: 'El acceso al horario todavía no está configurado.'
};

function showError(message) {
    error.textContent = message;
    error.classList.add('is-visible');
    form.classList.remove('is-shaking');
    void form.offsetWidth;
    form.classList.add('is-shaking');
}

function syncReady() {
    submit.classList.toggle('is-ready', Boolean(username.value.trim() && password.value));
}

// Si ya hay sesión (p. ej. una cookie que el navegador no mandó al abrir desde la pantalla de
// inicio), se entra directamente sin volver a pedir la contraseña.
fetch('/api/horario-session', { credentials: 'same-origin', cache: 'no-store' })
    .then(response => { if (response.ok) location.replace('/horario'); })
    .catch(() => {});

const params = new URLSearchParams(location.search);
if (params.has('error')) {
    showError(MESSAGES[params.get('error')] || MESSAGES[1]);
    history.replaceState({}, '', '/horario/login');
}

username.addEventListener('input', syncReady);
password.addEventListener('input', () => {
    syncReady();
    error.classList.remove('is-visible');
});
form.addEventListener('animationend', () => form.classList.remove('is-shaking'));
syncReady();

form.addEventListener('submit', async event => {
    event.preventDefault();
    if (form.classList.contains('is-loading')) return;
    if (!username.value.trim()) return username.focus();
    if (!password.value) return password.focus();

    form.classList.add('is-loading');
    error.classList.remove('is-visible');

    try {
        const response = await fetch('/api/horario-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin',
            body: JSON.stringify({ username: username.value.trim(), password: password.value })
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(payload.error || MESSAGES[1]);

        form.classList.remove('is-loading');
        form.classList.add('is-done');
        const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
        setTimeout(() => document.body.classList.add('is-leaving'), reduce ? 0 : 260);
        setTimeout(() => location.replace('/horario'), reduce ? 0 : 560);
    } catch (failure) {
        form.classList.remove('is-loading');
        const offline = failure instanceof TypeError;
        showError(offline ? 'No hay conexión. Vuelve a intentarlo.' : failure.message);
        password.select();
    }
});
