// Acceso al horario: iniciar sesión o crear una cuenta. Sin JS el formulario se envía igual (POST
// clásico con redirección) y las pestañas son enlaces normales.
const form = document.getElementById('login-form');
const modeInput = document.getElementById('mode');
const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const submitLabel = document.getElementById('submit-label');
const title = document.getElementById('login-title');
const error = document.getElementById('login-error');
const tabs = [...document.querySelectorAll('.login-tab')];

const MESSAGES = {
    1: 'El usuario o la contraseña no son correctos.',
    config: 'El acceso al horario todavía no está configurado.',
    conexion: 'No se ha podido conectar con el servidor del horario. Vuelve a intentarlo.',
    bloqueo: 'El acceso al horario está bloqueado desde esta conexión.',
    alta: 'No se ha podido crear la cuenta. Revisa el usuario y la contraseña.'
};

const isSignup = () => modeInput.value === 'signup';

function showError(message) {
    error.textContent = message;
    error.classList.add('is-visible');
    form.classList.remove('is-shaking');
    void form.offsetWidth;
    form.classList.add('is-shaking');
}

function syncReady() {
    const ready = isSignup()
        ? /^[a-z0-9][a-z0-9._-]{2,31}$/i.test(username.value.trim()) && password.value.length >= 8
        : Boolean(username.value.trim() && password.value);
    submit.classList.toggle('is-ready', ready);
}

// Cambia entre «Entrar» y «Crear cuenta» sin recargar; la URL queda como la del enlace
function setMode(mode, push = true) {
    const signup = mode === 'signup';
    modeInput.value = signup ? 'signup' : 'login';
    form.classList.toggle('is-signup', signup);
    title.textContent = signup ? title.dataset.signup : title.dataset.login;
    submitLabel.textContent = signup ? submitLabel.dataset.signup : submitLabel.dataset.login;
    password.autocomplete = signup ? 'new-password' : 'current-password';
    tabs.forEach(tab => {
        if (tab.dataset.mode === modeInput.value) tab.setAttribute('aria-current', 'page');
        else tab.removeAttribute('aria-current');
    });
    error.classList.remove('is-visible');
    if (push) history.replaceState({}, '', signup ? '/horario/login?modo=alta' : '/horario/login');
    syncReady();
}

tabs.forEach(tab => tab.addEventListener('click', event => {
    event.preventDefault();
    setMode(tab.dataset.mode);
    username.focus();
}));

// Si ya hay sesión (p. ej. una cookie que el navegador no mandó al abrir desde la pantalla de
// inicio), se entra directamente sin volver a pedir la contraseña.
fetch('/api/horario-session', { credentials: 'same-origin', cache: 'no-store' })
    .then(response => (response.ok ? response.json() : null))
    .then(payload => { if (payload?.ok) location.replace(payload.home || '/horario'); })
    .catch(() => {});

const params = new URLSearchParams(location.search);
if (params.has('error')) {
    showError(MESSAGES[params.get('error')] || MESSAGES[1]);
    params.delete('error');
    history.replaceState({}, '', location.pathname + (params.toString() ? `?${params}` : ''));
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
    if (isSignup() && password.value.length < 8) {
        showError('La contraseña necesita al menos 8 caracteres.');
        return password.focus();
    }

    form.classList.add('is-loading');
    error.classList.remove('is-visible');

    try {
        const response = await fetch('/api/horario-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin',
            body: JSON.stringify({ mode: modeInput.value, username: username.value.trim(), password: password.value })
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(payload.error || MESSAGES[1]);

        form.classList.remove('is-loading');
        form.classList.add('is-done');
        const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
        const target = payload.home || '/horario';
        setTimeout(() => document.body.classList.add('is-leaving'), reduce ? 0 : 260);
        setTimeout(() => location.replace(target), reduce ? 0 : 560);
    } catch (failure) {
        form.classList.remove('is-loading');
        const offline = failure instanceof TypeError;
        showError(offline ? 'No hay conexión. Vuelve a intentarlo.' : failure.message);
        password.select();
    }
});
