// PERA ERP · efectos de la página del proyecto.
//
// Sin dependencias (la CSP del portfolio solo admite scripts propios). Nada escucha el evento
// scroll: un IntersectionObserver dice qué escenas están a la vista y solo entonces un bucle de
// requestAnimationFrame lee su posición y actualiza transformaciones (transform y opacity).
// Con «reducir movimiento» no se fija nada al scroll y todo queda como una página normal.
(() => {
    const root = document.documentElement;
    root.classList.replace('no-js', 'js');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motion = !reduce.matches;
    if (motion) root.classList.add('motion');

    const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    // ------------------------------------------------------------ apariciones
    const reveals = document.querySelectorAll('.reveal');
    if (motion && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                entry.target.classList.add('is-in');
                revealObserver.unobserve(entry.target);
            }
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
        reveals.forEach((element) => revealObserver.observe(element));
    }

    // ------------------------------------------------------------ portada: entrar en la interfaz
    const dive = document.querySelector('[data-scene="dive"]');
    const stage = dive?.querySelector('.dive-stage');
    const frame = dive?.querySelector('.dive-frame');
    const slot = dive?.querySelector('.hero-slot');
    const copy = dive?.querySelector('.hero-copy');
    const shots = dive ? [...dive.querySelectorAll('.dive-shot')] : [];
    const captions = dive ? [...dive.querySelectorAll('.dive-caption')] : [];
    const tabs = dive ? [...dive.querySelectorAll('.dive-tabs span')] : [];
    const ZOOM_END = 0.28; // parte del recorrido que tarda la ventana en llenar la pantalla
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
            // En el móvil el texto va debajo de la ventana: se deja sitio subiéndola.
            end: { x: (stageBox.width - fullW) / 2, y: window.innerWidth < 860 ? top + (window.innerHeight - top - fullH - 150) / 2 : top + (window.innerHeight - top - fullH) / 2, scale: 1 },
        };
        frame.style.width = `${fullW}px`;
    }

    function setScreen(index) {
        if (index === screenIndex) return;
        screenIndex = index;
        shots.forEach((shot, i) => shot.classList.toggle('is-active', i === index));
        captions.forEach((caption, i) => caption.classList.toggle('is-active', i === index));
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
        const tilt = 7 * (1 - t);
        frame.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale}) perspective(2400px) rotateX(${tilt}deg)`;
        if (copy) {
            const fade = clamp(p / 0.14);
            copy.style.opacity = String(1 - fade);
            copy.style.transform = `translate3d(${-48 * fade}px, 0, 0)`;
            copy.style.visibility = fade >= 1 ? 'hidden' : 'visible';
        }
        dive.classList.toggle('is-inside', t > 0.97);
        const inside = clamp((p - ZOOM_END) / (1 - ZOOM_END));
        setScreen(p < ZOOM_END ? 0 : Math.min(shots.length - 1, Math.floor(inside * shots.length)));
    }

    // ------------------------------------------------------------ escenas con --p (paralaje suave)
    const scenes = [...document.querySelectorAll('[data-scene]')].filter((scene) => scene !== dive);
    function renderScene(scene) {
        const box = scene.getBoundingClientRect();
        const p = clamp((window.innerHeight - box.top) / (window.innerHeight + box.height));
        scene.style.setProperty('--p', p.toFixed(4));
    }

    // ------------------------------------------------------------ bucle solo con escenas a la vista
    const visible = new Set();
    let frameRequest = 0;
    function loop() {
        frameRequest = 0;
        if (visible.has(dive)) renderDive();
        for (const scene of scenes) if (visible.has(scene)) renderScene(scene);
        if (visible.size > 0) frameRequest = requestAnimationFrame(loop);
    }
    function wake() { if (!frameRequest && visible.size > 0) frameRequest = requestAnimationFrame(loop); }

    if (dive) {
        measureDive();
        renderDive();
    }
    if (motion && 'IntersectionObserver' in window) {
        const sceneObserver = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) visible.add(entry.target);
                else visible.delete(entry.target);
            }
            wake();
        });
        if (dive) sceneObserver.observe(dive);
        scenes.forEach((scene) => sceneObserver.observe(scene));
    }
    let resizeTimer = 0;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { measureDive(); renderDive(); wake(); }, 120);
    });
    // Las fuentes cambian la altura de la portada al cargar: se vuelve a medir el hueco.
    document.fonts?.ready.then(() => { measureDive(); renderDive(); });

    // ------------------------------------------------------------ paso a paso
    const steps = [...document.querySelectorAll('.flow-step')];
    const flowShots = [...document.querySelectorAll('.flow-shot')];
    if ('IntersectionObserver' in window && steps.length) {
        const stepObserver = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                const index = Number(entry.target.dataset.step);
                steps.forEach((step, i) => step.classList.toggle('is-active', i === index));
                flowShots.forEach((shot, i) => shot.classList.toggle('is-active', i === index));
            }
        }, { rootMargin: '-45% 0px -45% 0px' });
        steps.forEach((step) => stepObserver.observe(step));
    }

    // ------------------------------------------------------------ cinta de módulos
    // Se duplica una vez para que la vuelta sea continua; la copia no la leen los lectores de pantalla.
    const track = document.querySelector('.marquee-track');
    if (track && motion) {
        for (const item of [...track.children]) {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            clone.querySelectorAll('img').forEach((img) => { img.alt = ''; });
            track.appendChild(clone);
        }
    }
})();
