// Intro de la portada: «Corte transversal».
// Una línea cruza el nombre y lo corta por la mitad. Al bajar, las dos mitades se separan como
// la tapa de una caja y dentro aparecen las capas de lo que hago, siguiendo una única petición
// real de AFORO (reservar un asiento) desde la interfaz hasta producción. Un trazo rojo recorre
// las capas de arriba abajo; después el nombre se vuelve a cerrar y sube a su sitio en la
// cabecera, donde entra el resto del texto y aparece el globo de la página.
// Todo depende sólo de la posición del scroll: avanza y retrocede con la rueda, sin tramos que
// se reproduzcan solos. El nombre real (h1) sigue en el HTML; las mitades son una copia visual.
(() => {
    const root = document.documentElement;
    const hero = document.getElementById('hero');
    const stage = hero && hero.querySelector('.hero-stage');
    const content = hero && hero.querySelector('.hero-content');
    const nameEl = hero && hero.querySelector('.name');
    const shell = document.querySelector('.page-globe');
    if (!root.classList.contains('has-intro') || !hero || !stage || !content || !nameEl) {
        root.classList.remove('has-intro');
        return;
    }

    const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
    const mix = (a, b, k) => a + (b - a) * k;
    const prog = (t, a, b) => clamp((t - a) / (b - a));
    const ease = x => (x <= 0 ? 0 : x >= 1 ? 1 : x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const out = x => 1 - Math.pow(1 - clamp(x), 3);

    // Una petición real de AFORO, capa a capa (código de github.com/CODIGOAFRX/AFORO)
    const LAYERS = [
        { name: 'Interfaz', tech: 'React · TypeScript', code: 'api<Hold>("/reservations", { seatIds: selected })' },
        { name: 'API', tech: 'Java 21 · Spring Boot', code: '@PostMapping(value = "/reservations")' },
        { name: 'Datos', tech: 'PostgreSQL', code: 'SELECT seat_id … ORDER BY seat_id FOR UPDATE' },
        { name: 'Producción', tech: 'Cloudflare Workers · D1', code: 'pedrogomez.dev/proyecto/aforo', live: true },
    ];

    // Tramos del recorrido (0 = arriba del todo, 1 = cabecera colocada)
    const SCORE = [0.02, 0.12];   // la línea de corte cruza el nombre
    const OPEN = [0.1, 0.3];      // las mitades se separan
    const TRACE = [0.3, 0.52];    // el trazo rojo baja por las capas
    const CLOSE = [0.55, 0.71];   // las mitades vuelven a juntarse
    const SETTLE = [0.7, 0.86];   // el nombre sube a la cabecera
    const REVEAL = [0.78, 0.95];  // entra el resto de la cabecera
    const END = 0.965;

    // ---------- piezas ----------
    const el = (tag, cls, parent, text) => {
        const node = document.createElement(tag);
        if (cls) node.className = cls;
        if (text != null) node.textContent = text;
        parent.appendChild(node);
        return node;
    };
    hero.classList.add('intro-on');
    const cut = el('div', 'cut', stage);
    cut.setAttribute('aria-hidden', 'true');
    const caption = el('p', 'cut-caption', cut, 'AFORO · reservar un asiento, de la interfaz a producción');
    const word = el('div', 'cut-word', cut);
    const halves = [0, 1].map(() => el('span', 'cut-half', word, nameEl.textContent.trim()));
    const gap = el('div', 'cut-gap', cut);
    const stack = el('div', 'cut-stack', gap);
    const rows = LAYERS.map((layer, i) => {
        const row = el('div', 'cut-layer', stack);
        el('span', 'cut-index', row, String(i + 1).padStart(2, '0'));
        el('span', 'cut-name', row, layer.name);
        const code = el('code', 'cut-code', row);
        if (layer.live) el('i', 'cut-live', code);
        code.append(layer.code);
        el('span', 'cut-tech', row, layer.tech);
        return row;
    });
    const trace = el('i', 'cut-trace', stack);
    const edges = [el('i', 'cut-rule', cut), el('i', 'cut-rule', cut)];
    const reveal = [...content.children].filter(n => n !== nameEl && !n.classList.contains('hero-links'))
        .concat([...content.querySelectorAll('.hero-links a')]);

    let spec = null, vw = 0, vh = 0, t = -1, frame = 0;

    // ---------- medidas (el h1 sin transformar, relativo al escenario) ----------
    function measure() {
        const sb = stage.getBoundingClientRect();
        vw = sb.width; vh = sb.height;
        const nb = nameEl.getBoundingClientRect();
        const cs = getComputedStyle(nameEl);
        const fs = parseFloat(cs.fontSize);
        Object.assign(word.style, {
            left: `${nb.left - sb.left}px`, top: `${nb.top - sb.top}px`, width: `${nb.width}px`, height: `${nb.height}px`,
            fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight,
            letterSpacing: cs.letterSpacing, lineHeight: cs.lineHeight,
        });

        // Líneas base de cada letra (relativas al h1), a partir de sus cajas y de la métrica de la fuente
        const node = nameEl.firstChild;
        const range = document.createRange();
        const rects = [...node.data].map((ch, i) => { range.setStart(node, i); range.setEnd(node, i + 1); return { ch, r: range.getBoundingClientRect() }; })
            .filter(x => x.ch.trim());
        const c = document.createElement('canvas').getContext('2d');
        c.font = `${cs.fontStyle} ${cs.fontWeight} ${fs}px ${cs.fontFamily}`;
        const fm = c.measureText('H');
        const boxAscent = fm.fontBoundingBoxAscent || fs * 0.9;
        const boxDescent = fm.fontBoundingBoxDescent || fs * 0.22;
        const baselineOf = r => r.top - nb.top + (r.height - boxAscent - boxDescent) / 2 + boxAscent;
        const ascent = Math.max(...[...'PGdó'].map(ch => c.measureText(ch).actualBoundingBoxAscent));
        const xHeight = c.measureText('x').actualBoundingBoxAscent;
        const baselines = [...new Set(rects.map(x => Math.round(baselineOf(x.r))))].sort((a, b) => a - b);
        const top = baselines[0] - ascent, bottom = baselines[baselines.length - 1] + fs * 0.03;
        // Una línea: el corte pasa por la mitad de la altura x. Dos líneas (móvil): entre ellas.
        const cutY = baselines.length > 1
            ? (baselines[0] + baselines[1] - ascent) / 2
            : baselines[0] - xHeight * 0.5;
        const left = Math.min(...rects.map(x => x.r.left)) - nb.left;
        const right = Math.max(...rects.map(x => x.r.right)) - nb.left;

        const mobile = vw <= 768;
        const rowH = mobile ? clamp(vh * 0.085, 60, 76) : clamp(vh * 0.08, 56, 80);
        const pad = rowH * 0.45;
        const G = rowH * LAYERS.length + pad * 2;
        const band = bottom - top;
        const s0 = Math.max(1, Math.min(1.62, (vw * 0.88) / (right - left), (vh * 0.46) / band));
        const sOpen = Math.min(s0, Math.max(0.5, (vh * 0.78 - G) / band));
        spec = {
            origin: { x: nb.left - sb.left, y: nb.top - sb.top },
            cutY, G, pad, rowsH: rowH * LAYERS.length, s0, sOpen, top,
            centerX: (left + right) / 2, centerY: (top + bottom) / 2,
        };
        stack.style.height = `${G}px`;
        stack.style.padding = `${pad}px 0`;
        trace.style.top = `${pad}px`;
        halves[0].style.clipPath = `polygon(-20% ${-fs}px, 120% ${-fs}px, 120% ${cutY}px, -20% ${cutY}px)`;
        halves[1].style.clipPath = `polygon(-20% ${cutY}px, 120% ${cutY}px, 120% ${nb.height + fs}px, -20% ${nb.height + fs}px)`;
        t = -1;
    }

    // Traslado que centra la tinta del nombre en pantalla a una escala dada
    const centered = s => ({
        x: vw / 2 - (spec.origin.x + spec.centerX * s),
        y: vh / 2 - (spec.origin.y + spec.centerY * s),
    });

    // ---------- la escena en el punto p del recorrido ----------
    function render(p) {
        const open = ease(prog(p, ...OPEN)) * (1 - ease(prog(p, ...CLOSE)));
        const settle = ease(prog(p, ...SETTLE));
        const g = spec.G * open;
        const sCenter = mix(spec.s0, spec.sOpen, open);
        const c0 = centered(sCenter);
        const s = mix(sCenter, 1, settle);
        const dx = mix(c0.x, 0, settle), dy = mix(c0.y, 0, settle);
        word.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px) scale(${s.toFixed(5)})`;

        // Las mitades se apartan del corte; un leve desplazamiento lateral delata el corte
        const nudge = Math.min(10, vw * 0.007) * open;
        halves[0].style.transform = `translate(${(-nudge / s).toFixed(3)}px, ${(-g / 2 / s).toFixed(3)}px)`;
        halves[1].style.transform = `translate(${(nudge / s).toFixed(3)}px, ${(g / 2 / s).toFixed(3)}px)`;

        // El hueco entre las mitades enseña la pila de capas, centrada, como al abrir una caja
        const cutAt = spec.origin.y + dy + spec.cutY * s;
        const gapTop = cutAt - g / 2;
        gap.style.transform = `translateY(${gapTop.toFixed(2)}px)`;
        gap.style.height = `${g.toFixed(2)}px`;
        stack.style.transform = `translateY(${((g - spec.G) / 2).toFixed(2)}px)`;
        stack.style.opacity = clamp(open * 1.6).toFixed(3);

        // Bordes del corte: cruzan la pantalla antes de abrir y se recogen tras cerrar
        const score = out(prog(p, ...SCORE)) * (1 - out(prog(p, CLOSE[1] - 0.03, CLOSE[1] + 0.04)));
        edges[0].style.transform = `translateY(${gapTop.toFixed(2)}px) scaleX(${score.toFixed(4)})`;
        edges[1].style.transform = `translateY(${(gapTop + g).toFixed(2)}px) scaleX(${score.toFixed(4)})`;

        // El trazo baja por la pila y cada capa se «enciende» al llegar a ella
        const traceK = ease(prog(p, ...TRACE));
        trace.style.height = `${(spec.rowsH * traceK).toFixed(2)}px`;
        trace.style.opacity = (traceK > 0 ? 1 : 0).toString();
        rows.forEach((row, k) => row.classList.toggle('is-lit', traceK >= (k + 0.35) / rows.length));

        caption.style.transform = `translateY(${(spec.origin.y + dy + spec.top * s - g / 2 - 46).toFixed(2)}px)`;
        caption.style.opacity = clamp((open - 0.55) / 0.45).toFixed(3);

        // Resto de la cabecera y globo de la página
        reveal.forEach((node, i) => {
            const a = REVEAL[0] + i * 0.012;
            node.style.setProperty('--k', out(prog(p, a, a + 0.09)).toFixed(4));
        });
        if (shell) shell.style.setProperty('--intro-globe', ease(prog(p, 0.8, 0.97)).toFixed(4));
        hero.classList.toggle('intro-finished', p >= END);
        hero.classList.toggle('cue-hidden', p > 0.004);
    }

    // ---------- scroll ----------
    const progress = () => {
        const r = hero.getBoundingClientRect();
        return clamp(-r.top / Math.max(1, r.height - vh));
    };
    // El escenario sigue al scroll con un suavizado corto (la rueda da saltos), pero el destino es
    // siempre la posición real: si se para, la escena se para; si se vuelve arriba, se deshace.
    function update() {
        frame = 0;
        const p = progress();
        if (t < 0) t = p;
        else t += (p - t) * 0.2;
        if (Math.abs(p - t) < 0.0004) t = p;
        render(t);
        if (t !== p) frame = requestAnimationFrame(update);
    }
    const wake = () => { if (!frame) frame = requestAnimationFrame(update); };

    measure();
    root.classList.add('intro-ready');
    update();
    window.addEventListener('scroll', wake, { passive: true });
    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
        // En móvil las barras del navegador cambian la altura al hacer scroll: sólo manda el ancho
        const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (coarse && window.innerWidth === lastWidth) return;
        lastWidth = window.innerWidth;
        measure();
        update();
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); update(); });
})();
