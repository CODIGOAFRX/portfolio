export async function callWorker(path, options = {}) {
    const baseUrl = process.env.WORKER_API_URL;
    const token = options.token || process.env.WORKER_INTERNAL_TOKEN;
    if (!baseUrl || !token) {
        throw new Error('El servicio de candidaturas no está configurado');
    }

    const response = await fetch(`${baseUrl.replace(/\/$/, '')}${path}`, {
        method: options.method || 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: options.body === undefined ? undefined : JSON.stringify(options.body)
    });

    const text = await response.text();
    let payload;
    try {
        payload = text ? JSON.parse(text) : null;
    } catch {
        payload = { error: 'Respuesta no válida del servicio de datos' };
    }

    return { response, payload };
}
