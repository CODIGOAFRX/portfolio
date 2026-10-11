// Intro de la portada: «El nombre es el plano».
// Al hacer scroll, el nombre se mide como un espécimen tipográfico (líneas guía, verticales y
// círculos de construcción); los círculos de sus seis letras redondas salen del nombre y se
// convierten en los meridianos del globo de la página. Con el globo formado entra el resto de la
// cabecera, que es HTML normal: se puede seleccionar, copiar y pulsar.
// Toda la escena sale de seek(t) (t en segundos de la previsualización transicion-intro/), y el
// scroll decide t: avanza y retrocede con el visitante.
(() => {
    const root = document.documentElement;
    const hero = document.getElementById('hero');
    const stage = hero && hero.querySelector('.hero-stage');
    const nameEl = hero && hero.querySelector('.name');
    const shell = document.querySelector('.page-globe');
    const G = window.WireGlobe;
    if (!root.classList.contains('has-intro') || !hero || !stage || !nameEl || !shell || !G) {
        root.classList.remove('has-intro');
        return;
    }

    const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
    const mix = (a, b, k) => a + (b - a) * k;
    const prog = (t, a, b) => clamp((t - a) / (b - a));
    const expoOut = x => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x));
    const expoInOut = x => (x <= 0 ? 0 : x >= 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2);
    const spring = (tau, omega) => (tau <= 0 ? 0 : 1 - (1 + omega * tau) * Math.exp(-omega * tau));

    // Tramo de la previsualización que controla el scroll: del nombre al globo formado
    const T0 = 0.3, T1 = 5.6;
    const GUIDE_NAMES = ['ASCENDENTE', 'MAYÚSCULAS', 'ALTURA X', 'LÍNEA BASE'];
    const LONS = [-150, -120, -90, -60, -30, 0].map(d => d * Math.PI / 180);

    hero.classList.add('intro-on');
    const makeCanvas = cls => {
        const c = document.createElement('canvas');
        c.className = cls;
        c.setAttribute('aria-hidden', 'true');
        stage.appendChild(c);
        return c;
    };
    const globeCanvas = makeCanvas('intro-globe');
    const constructCanvas = makeCanvas('intro-construct');
    const gctx = globeCanvas.getContext('2d');
    const cctx = constructCanvas.getContext('2d');
    const layer = document.createElement('canvas');
    const lctx = layer.getContext('2d');

    let vw = 0, vh = 0, dpr = 1, spec = null, current = -1, done = false, frame = 0;


    // ---------- medidas del nombre (sin transformar, relativas al escenario) ----------
    function measure() {
        nameEl.style.transform = 'none';
        const sb = stage.getBoundingClientRect();
        vw = sb.width; vh = sb.height;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        [globeCanvas, constructCanvas, layer].forEach(c => { c.width = Math.round(vw * dpr); c.height = Math.round(vh * dpr); });

        const node = nameEl.firstChild;
        const text = node.data;
        const range = document.createRange();
        const rects = [...text].map((_, i) => { range.setStart(node, i); range.setEnd(node, i + 1); return range.getBoundingClientRect(); });
        // Distancia de la caja de una letra a su línea base, con un marcador alineado a ella
        const rest = node.splitText(1);
        const marker = document.createElement('span');
        marker.style.cssText = 'display:inline-block;width:0;height:0;vertical-align:baseline';
        rest.parentNode.insertBefore(marker, rest);
        const ascentBox = marker.getBoundingClientRect().top - rects[0].top;
        marker.remove();
        nameEl.normalize();

        const cs = getComputedStyle(nameEl), fs = parseFloat(cs.fontSize);
        const c = document.createElement('canvas').getContext('2d');
        c.font = `${cs.fontStyle} ${cs.fontWeight} ${fs}px ${cs.fontFamily}`;
        const m = ch => c.measureText(ch);
        const xh = m('x').actualBoundingBoxAscent, cap = m('H').actualBoundingBoxAscent, asc = m('d').actualBoundingBoxAscent;
        const oW = m('o').actualBoundingBoxRight + m('o').actualBoundingBoxLeft;
        const nb = nameEl.getBoundingClientRect();
        const origin = { x: nb.left - sb.left, y: nb.top - sb.top };

        // Letras en coordenadas del nombre (origen = esquina del h1)
        const letters = [...text].map((ch, i) => {
            const r = rects[i], mm = m(ch);
            const pen = r.left - nb.left, base = r.top - nb.top + ascentBox;
            return { ch, base, left: pen - mm.actualBoundingBoxLeft, right: pen + mm.actualBoundingBoxRight };
        }).filter(l => l.ch.trim());
        // Líneas del nombre (en móvil son dos)
        const lines = [];
        letters.forEach(l => {
            let line = lines.find(x => Math.abs(x.base - l.base) < 2);
            if (!line) { line = { base: l.base, left: Infinity, right: -Infinity }; lines.push(line); }
            line.left = Math.min(line.left, l.left);
            line.right = Math.max(line.right, l.right);
        });
        const circles = letters.filter(l => 'edoGó'.includes(l.ch)).map(l => {
            if (l.ch === 'G') return { cx: (l.left + l.right) / 2, cy: l.base - cap / 2, r: cap * 0.53 };
            if (l.ch === 'd') return { cx: l.left + oW / 2, cy: l.base - xh / 2, r: xh * 0.53 };
            return { cx: (l.left + l.right) / 2, cy: l.base - xh / 2, r: xh * 0.53 };
        });

        // Bloque de texto para centrar el nombre grande
        const textLeft = Math.min(...lines.map(l => l.left)), textRight = Math.max(...lines.map(l => l.right));
        const textTop = Math.min(...lines.map(l => l.base)) - asc, textBottom = Math.max(...lines.map(l => l.base));
        const textW = textRight - textLeft, textH = textBottom - textTop;
        const s0 = Math.max(1, Math.min(1.62, (vw * 0.88) / textW, (vh * 0.46) / textH));
        spec = {
            origin, letters, lines, circles, s0,
            guides: [-asc, -cap, -xh, 0],
            start: {
                dx: vw / 2 - (origin.x + ((textLeft + textRight) / 2) * s0),
                dy: vh / 2 - (origin.y + ((textTop + textBottom) / 2) * s0),
            },
            labels: vw > 768,
        };
        current = -1;
    }

    const line = (c, x0, y0, x1, y1) => { c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke(); };
    const white = a => `rgba(255, 255, 255, ${a})`;
    const gray = v => `rgb(${v}, ${v}, ${v})`;

    // ---------- la escena en el instante t ----------
    function seek(t) {
        const live = G.live;
        const k = spring(t - 3.0, 6);
        const s = mix(spec.s0, 1, k), dx = mix(spec.start.dx, 0, k), dy = mix(spec.start.dy, 0, k);
        nameEl.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px) scale(${s.toFixed(5)})`;
        const X = x => spec.origin.x + dx + x * s;
        const Y = y => spec.origin.y + dy + y * s;

        cctx.setTransform(1, 0, 0, 1, 0, 0);
        cctx.clearRect(0, 0, constructCanvas.width, constructCanvas.height);
        cctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        gctx.setTransform(1, 0, 0, 1, 0, 0);
        gctx.clearRect(0, 0, globeCanvas.width, globeCanvas.height);
        lctx.setTransform(1, 0, 0, 1, 0, 0);
        lctx.clearRect(0, 0, layer.width, layer.height);
        lctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        // 1. Medición: guías horizontales con su nombre y una vertical por letra
        const retract = expoInOut(prog(t, 3.0, 3.45));
        cctx.lineWidth = 1;
        spec.lines.forEach((ln, li) => {
            const cx = X((ln.left + ln.right) / 2);
            spec.guides.forEach((gy, i) => {
                const len = expoInOut(prog(t, 0.5 + i * 0.12, 1.5 + i * 0.12)) * (1 - retract);
                if (len <= 0) return;
                const half = mix(vw * 0.62, ((ln.right - ln.left) * s) / 2, retract) * len;
                const y = Math.round(Y(ln.base + gy)) + 0.5;
                cctx.strokeStyle = white(i === 3 ? 0.75 : 0.42);
                line(cctx, cx - half, y, cx + half, y);
                const labelK = expoOut(prog(t, 1.2 + i * 0.12, 1.8 + i * 0.12)) * (1 - expoOut(prog(t, 2.85, 3.15)));
                if (spec.labels && li === 0 && labelK > 0.01) {
                    const below = i === 1;
                    cctx.font = '600 11px Arial, Helvetica, sans-serif';
                    cctx.letterSpacing = '1.4px';
                    cctx.textAlign = 'left';
                    cctx.textBaseline = below ? 'top' : 'bottom';
                    cctx.fillStyle = white(0.62 * labelK);
                    cctx.fillText(GUIDE_NAMES[i], Math.max(X(spec.lines[0].left), cx - half + 4), y + (below ? 7 : -6) + (1 - labelK) * 6);
                }
            });
        });
        spec.letters.forEach((l, i) => {
            const len = expoInOut(prog(t, 1.0 + i * 0.05, 1.9 + i * 0.05)) * (1 - retract);
            if (len <= 0.03) return;
            const top = Y(l.base + spec.guides[0]) - 60 * s / spec.s0, bottom = Y(l.base) + 60 * s / spec.s0;
            const x = Math.round(X(l.left)) + 0.5;
            cctx.strokeStyle = white(0.3);
            line(cctx, x, top, x, top + (bottom - top) * len);
        });

        if (!live || !live.size) return;
        // Destino: el globo de la página tal y como está ahora (posición, tamaño, giro, opacidad)
        const R = 0.445 * live.size * live.scale;
        const settle = expoInOut(prog(t, 4.1, 4.8));
        const layerAlpha = mix(1, live.opacity, settle);
        const rotation = live.rotation + 1.1 * Math.pow(1 - prog(t, 3.0, T1), 2);
        const assembled = t >= 4.8;

        // 2–3. Círculos de construcción que salen del nombre y se vuelven meridianos
        if (!assembled) {
            spec.circles.forEach((c, i) => {
                const draw = expoInOut(prog(t, 1.6 + i * 0.09, 2.4 + i * 0.09));
                if (draw <= 0) return;
                const fly = spring(t - 3.05 - i * 0.05, 5.5);
                const morph = expoInOut(prog(t, 3.3 + i * 0.05, 4.1 + i * 0.05));
                const L = LONS[i] + rotation;
                const sx = Math.sin(L), cz = Math.cos(L);
                const cx = mix(X(c.cx), live.x, fly);
                const cy = mix(Y(c.cy), live.y, fly) + Math.sin(Math.PI * fly) * vh * 0.14;
                const rx = mix(c.r * s, R * Math.abs(sx), morph), ry = mix(c.r * s, R, morph);
                const onName = morph <= 0;
                const ctx = onName ? cctx : lctx;
                ctx.lineWidth = onName ? 1.2 : mix(1.2, 0.7 * live.scale, settle);
                const side = sx >= 0;
                [[-Math.PI / 2, Math.PI / 2, side === cz >= 0], [Math.PI / 2, Math.PI * 1.5, side !== cz >= 0]].forEach(([a0, a1, front]) => {
                    ctx.strokeStyle = onName ? white(0.95) : gray(Math.round(mix(17, front ? 184 : 227, settle)));
                    ctx.beginPath();
                    ctx.ellipse(cx, cy, Math.max(rx, 0.01), ry, 0, a0, mix(a0, a1, draw));
                    ctx.stroke();
                });
            });
        }

        // 4. El globo de la página, dibujado por partes hasta quedar completo
        if (t >= 3.9) {
            G.draw(lctx, {
                centerX: live.x, centerY: live.y, radius: R, rotation, theme: 0, lineScale: live.scale,
                tilt: mix(0, G.tilt, expoInOut(prog(t, 4.8, 5.6))),
                fill: expoOut(prog(t, 4.0, 4.8)),
                build: {
                    outline: expoInOut(prog(t, 3.9, 4.45)),
                    meridians: assembled ? 1 : 0,
                    parallels: expoInOut(prog(t, 4.3, 5.0)),
                    land: expoInOut(prog(t, 4.6, 5.4)),
                },
            });
        }
        gctx.setTransform(1, 0, 0, 1, 0, 0);
        gctx.globalAlpha = layerAlpha;
        gctx.drawImage(layer, 0, 0);
        gctx.globalAlpha = 1;
    }

    // ---------- scroll ----------
    const progress = () => {
        const r = hero.getBoundingClientRect();
        return clamp(-r.top / Math.max(1, r.height - vh));
    };

    // Reparto del recorrido: medición del nombre (hasta MEASURE), formación del globo (hasta FORM)
    // y, en el resto, la cabecera fija con todo el texto a la vista. La formación ocupa el tramo
    // más largo para que se entienda cómo los círculos se convierten en el globo.
    const MEASURE = 0.2, FORM = 0.72, T_SPLIT = 3.0;
    const timeAt = p => (p < MEASURE
        ? mix(T0, T_SPLIT, p / MEASURE)
        : mix(T_SPLIT, T1, clamp((p - MEASURE) / (FORM - MEASURE))));
    let t = -1;
    function update() {
        frame = 0;
        const p = progress();
        const target = timeAt(p);
        // Suavizado: la rueda empuja la escena en vez de hacerla saltar
        t = t < 0 ? target : t + (target - t) * 0.14;
        if (Math.abs(target - t) < 0.002) t = target;
        const finished = t >= T1 - 0.0005;
        shell.classList.toggle('is-intro', !finished);
        hero.classList.toggle('intro-finished', finished);
        if (finished) {
            // El globo de la página toma el relevo, idéntico al último fotograma
            if (current !== 1) {
                seek(T1);
                gctx.clearRect(0, 0, globeCanvas.width, globeCanvas.height);
                current = 1;
            }
        } else {
            seek(t);
            current = t;
        }
        // Con el globo formado entra el resto de la cabecera (y se recoge al volver arriba)
        if (!done && finished) { done = true; hero.classList.add('intro-done'); }
        else if (done && t < T1 - 0.4) { done = false; hero.classList.remove('intro-done'); }
        // Mientras la escena está en curso se redibuja siempre: el globo gira solo
        if ((!finished || t !== target) && hero.getBoundingClientRect().bottom > 0) frame = requestAnimationFrame(update);
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
        wake();
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); wake(); });
})();
