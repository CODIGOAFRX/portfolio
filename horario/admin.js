// Panel del administrador del horario: lista las cuentas, las borra y bloquea o desbloquea IPs.
// Las acciones que no se pueden deshacer piden un segundo clic en el mismo botón.
const $ = id => document.getElementById(id);
const usersBody = $('users');
const blockedList = $('blocked');
const errorBox = $('admin-error');

const dateFormat = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
const formatDate = value => (value ? dateFormat.format(new Date(value)) : '—');
const formatSize = bytes => (bytes ? `${Math.max(1, Math.round(bytes / 1024))} KB` : 'vacío');

let data = { users: [], blocked: [], you: {} };

function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.toggle('is-visible', Boolean(message));
}

async function api(method, query = '', body) {
    const response = await fetch(`/api/horario-admin${query}`, {
        method,
        credentials: 'same-origin',
        cache: 'no-store',
        headers: body ? { 'Content-Type': 'application/json' } : undefined,
        body: body ? JSON.stringify(body) : undefined
    });
    if (response.status === 401 || response.status === 403) {
        location.replace('/horario/login');
        throw new Error('Sesión no válida');
    }
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || 'No se ha podido completar la acción.');
    return payload;
}

// Un botón destructivo pide confirmación: el primer clic cambia el texto, el segundo actúa
function confirmButton(button, label, action) {
    let armed = 0;
    button.addEventListener('click', async () => {
        if (!armed) {
            button.dataset.label = button.textContent;
            button.textContent = label;
            button.classList.add('is-armed');
            armed = setTimeout(() => {
                armed = 0;
                button.textContent = button.dataset.label;
                button.classList.remove('is-armed');
            }, 3500);
            return;
        }
        clearTimeout(armed);
        armed = 0;
        button.disabled = true;
        try {
            await action();
        } catch (failure) {
            showError(failure.message);
            button.disabled = false;
            button.textContent = button.dataset.label;
            button.classList.remove('is-armed');
        }
    });
}

// El texto va en su propio span: en el móvil la celda es una fila con la etiqueta a un lado
function cell(row, text, className) {
    const td = document.createElement('td');
    if (className) td.className = className;
    const value = document.createElement('span');
    value.textContent = text;
    td.appendChild(value);
    row.appendChild(td);
    return td;
}

function render() {
    const { users, blocked, you } = data;
    const blockedSet = new Set(blocked.map(item => item.ip));
    $('your-ip').textContent = you?.ip || 'desconocida';
    $('admin-summary').textContent = `${users.length} ${users.length === 1 ? 'cuenta' : 'cuentas'} · ${blocked.length} ${blocked.length === 1 ? 'IP bloqueada' : 'IPs bloqueadas'}`;

    usersBody.replaceChildren();
    users.forEach(user => {
        const row = document.createElement('tr');
        const name = cell(row, user.username, 'admin-user');
        name.setAttribute('data-label', 'Usuario');
        cell(row, formatDate(user.createdAt)).setAttribute('data-label', 'Alta');
        cell(row, formatDate(user.lastLoginAt)).setAttribute('data-label', 'Último acceso');
        const ip = user.lastIp || user.createdIp || '';
        const ipCell = cell(row, ip || '—', 'admin-ip');
        ipCell.setAttribute('data-label', 'IP');
        if (ip && blockedSet.has(ip)) ipCell.firstChild.insertAdjacentHTML('beforeend', ' <span class="admin-tag">bloqueada</span>');
        cell(row, user.scheduleUpdatedAt ? `${formatSize(user.scheduleBytes)} · ${formatDate(user.scheduleUpdatedAt)}` : 'Sin empezar')
            .setAttribute('data-label', 'Horario');

        const actions = cell(row, '', 'admin-actions').firstChild;
        if (ip && !blockedSet.has(ip) && ip !== you?.ip) {
            const block = document.createElement('button');
            block.type = 'button';
            block.className = 'btn btn-quiet';
            block.textContent = 'Bloquear IP';
            confirmButton(block, '¿Bloquear?', async () => {
                await api('POST', '', { action: 'block', ip, reason: `Cuenta ${user.username}` });
                await load();
            });
            actions.appendChild(block);
        }
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'btn btn-quiet btn-danger';
        remove.textContent = 'Borrar';
        remove.setAttribute('aria-label', `Borrar la cuenta ${user.username}`);
        confirmButton(remove, '¿Borrar cuenta y horario?', async () => {
            await api('DELETE', `?user=${user.id}`);
            await load();
        });
        actions.appendChild(remove);
        usersBody.appendChild(row);
    });
    $('users-empty').hidden = users.length > 0;

    blockedList.replaceChildren();
    blocked.forEach(item => {
        const li = document.createElement('li');
        const ip = document.createElement('code');
        ip.textContent = item.ip;
        const meta = document.createElement('span');
        meta.className = 'admin-meta';
        meta.textContent = [item.reason, formatDate(item.createdAt)].filter(Boolean).join(' · ');
        const unblock = document.createElement('button');
        unblock.type = 'button';
        unblock.className = 'btn btn-quiet';
        unblock.textContent = 'Desbloquear';
        unblock.addEventListener('click', async () => {
            unblock.disabled = true;
            try {
                await api('DELETE', `?ip=${encodeURIComponent(item.ip)}`);
                await load();
            } catch (failure) {
                showError(failure.message);
                unblock.disabled = false;
            }
        });
        li.append(ip, meta, unblock);
        blockedList.appendChild(li);
    });
    $('blocked-empty').hidden = blocked.length > 0;
}

async function load() {
    try {
        data = await api('GET');
        showError('');
        render();
    } catch (failure) {
        $('admin-summary').textContent = '';
        showError(failure.message);
    }
}

$('block-form').addEventListener('submit', async event => {
    event.preventDefault();
    const ip = $('block-ip').value.trim();
    if (!ip) return $('block-ip').focus();
    try {
        await api('POST', '', { action: 'block', ip, reason: $('block-reason').value.trim() });
        event.target.reset();
        await load();
    } catch (failure) {
        showError(failure.message);
    }
});

$('logout').addEventListener('click', async () => {
    await fetch('/api/horario-session', { method: 'DELETE', credentials: 'same-origin' }).catch(() => {});
    location.replace('/horario/login');
});

load();
