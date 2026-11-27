// PayAF · caso de estudio (/proyecto/payaf-caso/)
// Sin dependencias: entrada con zoom ligado al scroll y recorrido paso a paso en el hexágono.
(() => {
    const root = document.documentElement;
    root.classList.replace('no-js', 'js');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motion = !reduce.matches;
    if (motion) root.classList.add('motion');

    const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    const reveals = document.querySelectorAll('.reveal');
    if (motion && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                entry.target.classList.add('is-in');
                revealObserver.unobserve(entry.target);
            }
        }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
        reveals.forEach((el) => revealObserver.observe(el));
    }

    // Entrada con zoom en la interfaz
    const dive = document.querySelector('[data-scene="dive"]');
    const stage = dive?.querySelector('.dive-stage');
    const frame = dive?.querySelector('.dive-frame');
    const slot = dive?.querySelector('.hero-slot');
    const copy = dive?.querySelector('.hero-copy');
    const shots = dive ? [...dive.querySelectorAll('.dive-shot')] : [];
    const captions = dive ? [...dive.querySelectorAll('.dive-caption')] : [];
    const tabs = dive ? [...dive.querySelectorAll('.dive-tabs span')] : [];
    const ZOOM_END = 0.28;
    let geometry = null;
    let screenIndex = 0;

    function measureDive() {
        if (!frame || !slot || !stage) return;
        const stageBox = stage.getBoundingClientRect();
        const slotBox = slot.getBoundingClientRect();
        const bar = 36;
        const top = 64;
        const margin = window.innerWidth < 860 ? 16 : 28;
        const availableW = stageBox.width - margin * 2;
        const availableH = window.innerHeight - top - margin * 2;
        const fullW = Math.min(availableW, (availableH - bar) * 1.6);
        const fullH = bar + fullW / 1.6;
        geometry = {
            fullW,
            start: { x: slotBox.left - stageBox.left, y: slotBox.top - stageBox.top, scale: slotBox.width / fullW },
            end: {
                x: (stageBox.width - fullW) / 2,
                y: window.innerWidth < 860 ? top + (window.innerHeight - top - fullH - 140) / 2 : top + (window.innerHeight - top - fullH) / 2,
                scale: 1,
            },
        };
        frame.style.width = `${fullW}px`;
    }

    function setScreen(index) {
        if (index === screenIndex) return;
        screenIndex = index;
        shots.forEach((shot, i) => shot.classList.toggle('is-active', i === index));
        captions.forEach((cap, i) => cap.classList.toggle('is-active', i === index));
        tabs.forEach((tab, i) => tab.classList.toggle('is-active', i === index));
    }

    function renderDive() {
        if (!geometry) return;
        const box = dive.getBoundingClientRect();
        const travel = Math.max(1, box.height - window.innerHeight);
        const p = motion ? clamp(-box.top / travel) : 0;
        const t = ease(clamp(p / ZOOM_END));
        const { start, end } = geometry;
        const x = start.x + (end.x - start.x) * t;
        const y = start.y + (end.y - start.y) * t;
        const scale = start.scale + (end.scale - start.scale) * t;
        const tilt = 6 * (1 - t);
        frame.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) perspective(2400px) rotateX(${tilt}deg)`;
        if (copy) {
            const fade = clamp(p / 0.14);
            copy.style.opacity = String(1 - fade);
            copy.style.transform = `translate3d(${-44 * fade}px, 0, 0)`;
            copy.style.visibility = fade >= 1 ? 'hidden' : 'visible';
        }
        dive.classList.toggle('is-inside', t > 0.96);
        const inside = clamp((p - ZOOM_END) / (1 - ZOOM_END));
        setScreen(p < ZOOM_END ? 0 : Math.min(shots.length - 1, Math.floor(inside * shots.length)));
    }

    let frameRequest = 0;
    let diveVisible = false;
    function loop() {
        frameRequest = 0;
        if (diveVisible) {
            renderDive();
            frameRequest = requestAnimationFrame(loop);
        }
    }
    if (dive) {
        measureDive();
        renderDive();
    }
    if (motion && dive && 'IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
            diveVisible = entry.isIntersecting;
            if (diveVisible && !frameRequest) frameRequest = requestAnimationFrame(loop);
        }).observe(dive);
    }
    let resizeTimer = 0;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { measureDive(); renderDive(); }, 120);
    });
    document.fonts?.ready.then(() => { measureDive(); renderDive(); });

    // Recorrido hexagonal paso a paso
    const META = [
        { board: '01 / 05 · ENTRADA E IDEMPOTENCIA', state: 'REST / CLAIM', redsys: 'CLOSED', adyen: 'CLOSED', trace: 'REST > AuthorizePaymentUseCase > IdempotencyStore.claim · OK' },
        { board: '02 / 05 · EL DOMINIO DECIDE LA RUTA', state: 'REDSYS 1,20 %', redsys: '1º · 1,20%', adyen: '2º · 2,50%', trace: 'RoutingPolicy.select(100 EUR, ES) > [Redsys, Adyen, Stripe, Mock]' },
        { board: '03 / 05 · AVERÍA 503 Y FAILOVER', state: '503 / ADYEN OK', redsys: 'HTTP 503', adyen: 'APPROVED', trace: 'PaymentGateway.authorize(Redsys) HTTP_503 > failover > Adyen APPROVED' },
        { board: '04 / 05 · CIRCUIT BREAKER ABIERTO', state: 'REDSYS OPEN 15S', redsys: 'OPEN 15S', adyen: 'ACTIVA', trace: 'CircuitBreaker(Redsys) = OPEN · tráfico desviado directo a Adyen' },
        { board: '05 / 05 · OUTBOX, SSE Y WEBHOOK HMAC', state: 'AUTHORIZED · SSE', redsys: 'OPEN 15S', adyen: 'HMAC OK', trace: 'PostgreSQL + Outbox > SSE autorizado · Webhook Adyen HMAC-SHA256 OK' },
    ];
    const flow = document.getElementById('flujo');
    if (flow) {
        const steps = [...flow.querySelectorAll('.flow-step')];
        const boardEl = flow.querySelector('[data-board]');
        const stateEl = flow.querySelector('[data-state]');
        const traceEl = flow.querySelector('[data-trace]');
        const bRedsys = flow.querySelector('[data-b-redsys]');
        const bAdyen = flow.querySelector('[data-b-adyen]');
        const activate = (idx) => {
            const m = META[idx] || META[0];
            flow.dataset.step = String(idx);
            if (boardEl) boardEl.textContent = m.board;
            if (stateEl) stateEl.textContent = m.state;
            if (traceEl) traceEl.textContent = m.trace;
            if (bRedsys) bRedsys.textContent = m.redsys;
            if (bAdyen) bAdyen.textContent = m.adyen;
            steps.forEach((s, i) => s.classList.toggle('is-active', i === idx));
        };
        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    activate(Number(entry.target.dataset.step));
                }
            }, { rootMargin: '-42% 0px -42% 0px' });
            steps.forEach((s) => obs.observe(s));
        }
    }
})();
