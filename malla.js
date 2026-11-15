// Malla de la portada: una retícula fina que ocupa toda la primera pantalla y cede bajo el cursor.
// Cada cruce es una masa sujeta a su sitio con un muelle: el ratón la empuja, la arrastra al pasar y,
// al soltarla, vuelve oscilando, así que el movimiento deja una estela que se propaga por la malla.
// Cerca del cursor las líneas se marcan y el cruce más próximo se enciende en rojo.
// Nada se mueve solo: la malla sólo responde al ratón (o al dedo). Se apaga en cuanto empieza el corte
// del nombre. Sin la intro (sin JS o con movimiento reducido) no existe.
(() => {
    const hero = document.getElementById('hero');
    const stage = hero && hero.querySelector('.hero-stage');
    if (!stage || !hero.classList.contains('intro-on')) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'malla';
    canvas.setAttribute('aria-hidden', 'true');
    stage.prepend(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) { canvas.remove(); return; }

    const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
    const TINTA = '17, 17, 17', ROJO = '229, 50, 45';
    const APAGA = [0.01, 0.07];           // tramo del scroll de la intro en el que la malla se desvanece
    const MUELLE = 70, FRENO = 7.5;       // rigidez y amortiguación de cada cruce (vuelve con un par de oscilaciones)
    const EMPUJE = 3400, ARRASTRE = 5.5;  // fuerza con la que el cursor aparta los cruces y cuánto los lleva consigo
    const BASE = 0.085, NIVELES = 5;      // opacidad de la malla en reposo y escalones de realce junto al cursor

    let W = 0, H = 0, dpr = 1, paso = 44, cols = 0, filas = 0, radio = 240;
    let hx, hy, x, y, vx, vy;             // sitio, posición y velocidad de cada cruce
    let frame = 0, ultimo = 0, presente = false, calma = 0;
    const raton = { x: -9999, y: -9999, vx: 0, vy: 0, t: 0 };

    function medir() {
        const r = stage.getBoundingClientRect();
        W = r.width; H = r.height;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
        paso = W < 700 ? 34 : 44;
        radio = clamp(W * 0.19, 150, 300);
        // La retícula se centra y sobresale un paso por cada lado para que los bordes no queden sueltos
        cols = Math.ceil(W / paso) + 3; filas = Math.ceil(H / paso) + 3;
        const x0 = (W - (cols - 1) * paso) / 2, y0 = (H - (filas - 1) * paso) / 2;
        const n = cols * filas;
        hx = new Float32Array(n); hy = new Float32Array(n);
        x = new Float32Array(n); y = new Float32Array(n);
        vx = new Float32Array(n); vy = new Float32Array(n);
        for (let j = 0; j < filas; j++) for (let i = 0; i < cols; i++) {
            const k = j * cols + i;
            hx[k] = x[k] = x0 + i * paso; hy[k] = y[k] = y0 + j * paso;
        }
    }

    // Cuánto deja ver el scroll: entera arriba del todo, nada cuando la línea de corte cruza el nombre
    const visible = () => {
        const p = window.scrollY / Math.max(1, hero.offsetHeight - window.innerHeight);
        return 1 - clamp((p - APAGA[0]) / (APAGA[1] - APAGA[0]));
    };

    // Un paso de la física. Devuelve la energía que queda, para saber cuándo parar
    function avanzar(dt) {
        const R2 = radio * radio;
        let energia = 0;
        for (let k = 0; k < x.length; k++) {
            let ax = -MUELLE * (x[k] - hx[k]) - FRENO * vx[k];
            let ay = -MUELLE * (y[k] - hy[k]) - FRENO * vy[k];
            if (presente) {
                const dx = x[k] - raton.x, dy = y[k] - raton.y, d2 = dx * dx + dy * dy;
                if (d2 < R2) {
                    const d = Math.sqrt(d2) || 1, f = 1 - d / radio, f2 = f * f;
                    ax += dx / d * EMPUJE * f2 + raton.vx * ARRASTRE * f2;
                    ay += dy / d * EMPUJE * f2 + raton.vy * ARRASTRE * f2;
                }
            }
            vx[k] += ax * dt; vy[k] += ay * dt;
            x[k] += vx[k] * dt; y[k] += vy[k] * dt;
            energia += vx[k] * vx[k] + vy[k] * vy[k];
        }
        return energia;
    }

    function pintar(k) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, W, H);
        if (k <= 0) return;
        // Cada tramo va al escalón de realce que le toca por su distancia al cursor; se traza un escalón cada vez
        const tramos = Array.from({ length: NIVELES }, () => []);
        const tramo = (a, b) => {
            let nivel = 0;
            if (presente) {
                const d = Math.hypot((x[a] + x[b]) / 2 - raton.x, (y[a] + y[b]) / 2 - raton.y);
                if (d < radio) nivel = Math.min(NIVELES - 1, Math.ceil((1 - d / radio) * (NIVELES - 1)));
            }
            tramos[nivel].push(a, b);
        };
        for (let j = 0; j < filas; j++) for (let i = 0; i < cols; i++) {
            const a = j * cols + i;
            if (i + 1 < cols) tramo(a, a + 1);
            if (j + 1 < filas) tramo(a, a + cols);
        }
        ctx.lineWidth = 1;
        tramos.forEach((lista, nivel) => {
            if (!lista.length) return;
            ctx.strokeStyle = `rgba(${TINTA}, ${(BASE + 0.3 * nivel / (NIVELES - 1)) * k})`;
            ctx.beginPath();
            for (let n = 0; n < lista.length; n += 2) { ctx.moveTo(x[lista[n]], y[lista[n]]); ctx.lineTo(x[lista[n + 1]], y[lista[n + 1]]); }
            ctx.stroke();
        });
        if (!presente) return;
        // Los cruces junto al cursor se marcan con un punto; el más cercano, en rojo
        let cerca = -1, minimo = Infinity;
        for (let n = 0; n < x.length; n++) {
            const d = Math.hypot(x[n] - raton.x, y[n] - raton.y);
            if (d >= radio) continue;
            if (d < minimo) { minimo = d; cerca = n; }
            const f = 1 - d / radio;
            ctx.fillStyle = `rgba(${TINTA}, ${0.75 * f * k})`;
            ctx.beginPath(); ctx.arc(x[n], y[n], 0.8 + 1.6 * f, 0, Math.PI * 2); ctx.fill();
        }
        if (cerca >= 0) {
            ctx.fillStyle = `rgba(${ROJO}, ${k})`;
            ctx.beginPath(); ctx.arc(x[cerca], y[cerca], 3.6, 0, Math.PI * 2); ctx.fill();
        }
    }

    function cuadro(ahora) {
        frame = 0;
        let dt = Math.min((ahora - ultimo) / 1000 || 0.016, 0.05);
        ultimo = ahora;
        const k = visible();
        // La velocidad del cursor se va perdiendo si deja de moverse
        if (ahora - raton.t > 60) { raton.vx *= 0.8; raton.vy *= 0.8; }
        let energia = 0;
        for (let pasos = Math.ceil(dt / 0.009), n = 0; n < pasos; n++) energia = avanzar(dt / pasos);
        pintar(k);
        // Para cuando la malla lleva un rato quieta; el cursor parado encima la mantiene deformada sin gastar
        calma = energia < 0.6 ? calma + 1 : 0;
        if (calma < 8 && k > 0) frame = requestAnimationFrame(cuadro);
    }
    const despertar = () => {
        calma = 0;
        if (!frame) { ultimo = performance.now(); frame = requestAnimationFrame(cuadro); }
    };

    const mover = e => {
        const r = stage.getBoundingClientRect();
        const px = e.clientX - r.left, py = e.clientY - r.top, ahora = performance.now();
        const dentro = px >= 0 && py >= 0 && px <= r.width && py <= r.height;
        if (dentro && presente) {
            const dt = Math.max(0.008, (ahora - raton.t) / 1000);
            raton.vx = clamp((px - raton.x) / dt, -2400, 2400); raton.vy = clamp((py - raton.y) / dt, -2400, 2400);
        } else { raton.vx = 0; raton.vy = 0; }
        raton.x = px; raton.y = py; raton.t = ahora;
        presente = dentro;
        despertar();
    };
    const soltar = () => { presente = false; raton.vx = 0; raton.vy = 0; despertar(); };
    window.addEventListener('pointermove', mover, { passive: true });
    window.addEventListener('pointerdown', mover, { passive: true });
    // El dedo no se queda encima como el ratón: al levantarlo o al empezar a desplazar, la malla se suelta
    window.addEventListener('pointerup', e => { if (e.pointerType !== 'mouse') soltar(); }, { passive: true });
    window.addEventListener('pointercancel', soltar, { passive: true });
    document.documentElement.addEventListener('pointerleave', soltar);
    window.addEventListener('blur', soltar);
    window.addEventListener('scroll', despertar, { passive: true });
    new ResizeObserver(() => { medir(); despertar(); }).observe(stage);
    medir();
    despertar();
})();
