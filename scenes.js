// Escenas con scroll de la portada (la galaxia vive en galaxy.js):
//  - Trayectoria: Formación entra por la izquierda y Experiencia por la derecha hasta
//    juntarse. En escritorio la sección se queda fija mientras ocurre y un buen tramo
//    después, así la inercia del scroll no se la salta.
//  - Proyectos: zoom a la última «o» de «portfolio»; su interior se abre y se entra en los
//    proyectos. Al subir se sale de la «o».
// Sin JS o con movimiento reducido todo queda como una página normal.
(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
    const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };

    // ---------- Trayectoria ----------
    function timelineScene(section) {
        const header = section.querySelector('.timeline-header');
        const grid = section.querySelector('.timeline-grid');
        const cols = [...section.querySelectorAll('.timeline-col')];
        if (!header || !grid || !cols.length) return null;
        section.classList.add('tl-scene');
        let pin = false;
        let current = 0;

        const setVars = (el, c) => {
            el.style.setProperty('--tl-c', c.toFixed(4));
            el.style.setProperty('--tl-o', clamp(c * 1.8).toFixed(3));
        };

        const measure = () => {
            section.classList.remove('tl-pin');
            const height = grid.getBoundingClientRect().bottom - header.getBoundingClientRect().top;
            // Fijarla sólo si cabe entera en pantalla (escritorio con las columnas lado a lado)
            pin = window.innerWidth > 1024 && height <= window.innerHeight * 0.9;
            section.classList.toggle('tl-pin', pin);
            cols.forEach(col => { col.style.removeProperty('--tl-c'); col.style.removeProperty('--tl-o'); col.shown = undefined; });
            section.style.removeProperty('--tl-c');
            section.style.removeProperty('--tl-o');
            section.style.removeProperty('--tl-h');
            current = -1;
        };

        const update = () => {
            const vh = window.innerHeight;
            if (pin) {
                // s = 0 cuando la sección asoma por abajo, 1 cuando queda fija
                const s = (vh - section.getBoundingClientRect().top) / vh;
                const target = smooth(0.25, 1.0, s);
                current = current < 0 ? target : current + (target - current) * 0.2;
                if (Math.abs(target - current) < 0.001) current = target;
                setVars(section, current);
                section.style.setProperty('--tl-h', smooth(0.55, 1, current).toFixed(3));
                return current !== target;
            }
            // Columnas apiladas: cada una entra cuando llega a la pantalla
            const headerOn = header.getBoundingClientRect().top < vh * 0.9;
            section.style.setProperty('--tl-h', headerOn ? '1' : '0');
            cols.forEach(col => {
                const on = col.getBoundingClientRect().top < vh * 0.85;
                if (on !== col.shown) { col.shown = on; setVars(col, on ? 1 : 0); }
            });
            return false;
        };

        measure();
        return { measure, update };
    }

    // ---------- Portal de proyectos ----------
    // Última «o» de «portfolio» en el título
    function lastO(h2) {
        const walker = document.createTreeWalker(h2, NodeFilter.SHOW_TEXT);
        let found = null;
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
            const i = node.data.lastIndexOf('portfolio');
            if (i >= 0) found = { node, index: i + 'portfolio'.length - 1 };
        }
        return found;
    }

    // Forma exacta del interior (contraforma) de la «o» en la fuente del título:
    // se dibuja la letra en un canvas, se rellena el hueco desde el centro, se encoge un poco
    // (para no morder el trazo al ampliarla) y se suaviza el borde.
    function counterShape(h2) {
        const cs = getComputedStyle(h2);
        const fs = parseFloat(cs.fontSize);
        const R = 4;
        const pad = fs * 0.3, base = fs * 1.2;
        const cv = document.createElement('canvas');
        cv.width = Math.ceil(fs * 1.6 * R);
        cv.height = Math.ceil(fs * 1.7 * R);
        const g = cv.getContext('2d', { willReadFrequently: true });
        g.scale(R, R);
        g.font = `${cs.fontStyle} ${cs.fontWeight} ${fs}px ${cs.fontFamily}`;
        g.textBaseline = 'alphabetic';
        g.fillStyle = '#000';
        g.fillText('o', pad, base);
        const m = g.measureText('o');
        const W = cv.width, H = cv.height;
        const alpha = g.getImageData(0, 0, W, H).data;
        const x0 = Math.max(0, Math.floor((pad - m.actualBoundingBoxLeft) * R));
        const x1 = Math.min(W - 1, Math.ceil((pad + m.actualBoundingBoxRight) * R));
        const y0 = Math.max(0, Math.floor((base - m.actualBoundingBoxAscent) * R));
        const y1 = Math.min(H - 1, Math.ceil((base + m.actualBoundingBoxDescent) * R));
        const filled = new Uint8Array(W * H);
        const stack = [Math.round((x0 + x1) / 2) + Math.round((y0 + y1) / 2) * W];
        let fx0 = W, fx1 = 0, fy0 = H, fy1 = 0;
        while (stack.length) {
            const i = stack.pop();
            if (filled[i] || alpha[i * 4 + 3] >= 128) continue;
            const x = i % W, y = (i - x) / W;
            if (x <= x0 || x >= x1 || y <= y0 || y >= y1) return null; // la letra no tiene hueco cerrado
            filled[i] = 1;
            if (x < fx0) fx0 = x; if (x > fx1) fx1 = x; if (y < fy0) fy0 = y; if (y > fy1) fy1 = y;
            stack.push(i - 1, i + 1, i - W, i + W);
        }
        if (fx1 - fx0 < 6 || fy1 - fy0 < 6) return null;
        // Erosión cuadrada separable: ~2 px de margen respecto al trazo
        const er = Math.round(2 * R);
        const tmp = new Uint8Array(W * H), out = new Uint8Array(W * H);
        for (let y = fy0; y <= fy1; y++) for (let x = fx0; x <= fx1; x++) {
            let ok = 1;
            for (let d = -er; d <= er && ok; d++) ok = filled[y * W + x + d];
            tmp[y * W + x] = ok;
        }
        for (let y = fy0; y <= fy1; y++) for (let x = fx0; x <= fx1; x++) {
            let ok = 1;
            for (let d = -er; d <= er && ok; d++) ok = tmp[(y + d) * W + x];
            out[y * W + x] = ok;
        }
        const margin = 2 * R;
        const mw = fx1 - fx0 + 1 + margin * 2, mh = fy1 - fy0 + 1 + margin * 2;
        const shape = document.createElement('canvas');
        shape.width = mw; shape.height = mh;
        const sg = shape.getContext('2d');
        const img = sg.createImageData(mw, mh);
        for (let y = fy0; y <= fy1; y++) for (let x = fx0; x <= fx1; x++) {
            if (!out[y * W + x]) continue;
            const j = ((y - fy0 + margin) * mw + (x - fx0 + margin)) * 4;
            img.data[j + 3] = 255;
        }
        sg.putImageData(img, 0, 0);
        const soft = document.createElement('canvas');
        soft.width = mw; soft.height = mh;
        const so = soft.getContext('2d');
        so.filter = `blur(${0.6 * R}px)`;
        so.drawImage(shape, 0, 0);
        return {
            img: soft,
            // en px CSS, respecto al origen de la letra sobre la línea base
            left: (fx0 - margin) / R - pad,
            top: (fy0 - margin) / R - base,
            width: mw / R,
            height: mh / R,
            innerW: (fx1 - fx0) / R,
            innerH: (fy1 - fy0) / R,
        };
    }

    // Distancia del borde superior de la caja de una letra a su línea base, medida con un
    // marcador sin tamaño alineado a la línea base justo detrás de la primera letra.
    function baselineOffset(elem) {
        const walker = document.createTreeWalker(elem, NodeFilter.SHOW_TEXT);
        const range = document.createRange();
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
            const i = node.data.search(/\S/);
            if (i < 0) continue;
            range.setStart(node, i);
            range.setEnd(node, i + 1);
            const top = range.getBoundingClientRect().top;
            const rest = node.splitText(i + 1);
            const marker = document.createElement('span');
            marker.style.cssText = 'display:inline-block;width:0;height:0;vertical-align:baseline';
            rest.parentNode.insertBefore(marker, rest);
            const offset = marker.getBoundingClientRect().top - top;
            marker.remove();
            elem.normalize();
            return offset;
        }
        return null;
    }

    // Letras de un elemento con su origen y línea base relativos al portal
    function glyphsOf(elem, zr) {
        const ascent = baselineOffset(elem);
        if (ascent === null) return [];
        const upper = getComputedStyle(elem).textTransform === 'uppercase';
        const walker = document.createTreeWalker(elem, NodeFilter.SHOW_TEXT);
        const range = document.createRange();
        const chars = [];
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
            for (let i = 0; i < node.data.length; i++) {
                const ch = node.data[i];
                if (/\s/.test(ch)) continue;
                range.setStart(node, i);
                range.setEnd(node, i + 1);
                const r = range.getClientRects()[0];
                if (r) chars.push({ ch: upper ? ch.toUpperCase() : ch, x: r.left - zr.left, y: r.top - zr.top + ascent });
            }
        }
        return chars;
    }

    // El portal se dibuja en un canvas: fondo, etiqueta, título y párrafo, letra a letra en la
    // posición exacta que ocupan en el HTML (que queda invisible, sólo como referencia).
    // Escalar capas HTML o SVG hasta 80x hacía que Chrome reutilizara trozos viejos de su
    // dibujo al volver a subir; el canvas se redibuja entero en cada frame y el texto se
    // rasteriza a la escala real, así que sigue nítido.
    function portalScene(section) {
        const scene = section.querySelector('.portal-scene');
        const overlay = section.querySelector('.portal-overlay');
        const zoom = section.querySelector('.portal-zoom');
        const cases = section.querySelector('.portal-cases');
        const spacer = section.querySelector('.portal-spacer');
        const heading = section.querySelector('.production-heading');
        const h2 = heading && heading.querySelector('h2');
        if (!scene || !overlay || !zoom || !cases || !spacer || !h2) return null;
        section.classList.add('portal-on');

        const canvas = document.createElement('canvas');
        canvas.className = 'portal-canvas';
        canvas.setAttribute('aria-hidden', 'true');
        overlay.insertBefore(canvas, zoom);
        const ctx = canvas.getContext('2d');

        let geo = null;
        let current = 0;
        let drawnAt = -2;

        const measure = () => {
            cases.style.transform = '';
            drawnAt = -2;
            const shape = lastO(h2) && counterShape(h2);
            if (!shape) {
                section.classList.remove('portal-on');
                canvas.remove();
                geo = null;
                return;
            }
            const zr = zoom.getBoundingClientRect();
            const vw = zr.width, vh = zr.height;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(vw * dpr);
            canvas.height = Math.round(vh * dpr);

            const groups = [...heading.querySelectorAll('h3, h2, p')].map(elem => {
                const cs = getComputedStyle(elem);
                return {
                    elem,
                    font: `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`,
                    color: cs.color,
                    size: parseFloat(cs.fontSize),
                    chars: glyphsOf(elem, zr),
                };
            });
            // La «o» del portal es la última del título («portfolio.»)
            const title = groups.find(g => g.elem === h2);
            const o = title && [...title.chars].reverse().find(c => c.ch === 'o');
            if (!o) { geo = null; return; }

            geo = {
                ...shape,
                groups, vw, vh, dpr,
                bg: getComputedStyle(section).backgroundColor,
                cx: o.x + shape.left + shape.width / 2, cy: o.y + shape.top + shape.height / 2,
                // escala a la que el hueco de la «o» cubre toda la pantalla
                sMax: 1.3 * Math.hypot(vw / shape.innerW, vh / shape.innerH),
            };
            current = -1;
        };

        const draw = p => {
            const z = smooth(0, 0.88, p) * 0.5 + clamp(p / 0.88) * 0.5;
            const s = Math.exp(z * Math.log(geo.sMax));
            const q = smooth(0.05, 0.6, p);
            const tx = (geo.vw / 2 - geo.cx) * q, ty = (geo.vh / 2 - geo.cy) * q;
            const { dpr } = geo;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.globalCompositeOperation = 'source-over';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // pantalla = s · local + (t + c − s · c)
            const ex = tx + geo.cx * (1 - s), ey = ty + geo.cy * (1 - s);
            ctx.setTransform(dpr * s, 0, 0, dpr * s, dpr * ex, dpr * ey);
            // Zona visible en coordenadas locales: para el fondo y para no dibujar letras fuera
            const vx0 = -ex / s, vy0 = -ey / s, vx1 = (geo.vw - ex) / s, vy1 = (geo.vh - ey) / s;
            ctx.fillStyle = geo.bg;
            ctx.fillRect(vx0 - 1, vy0 - 1, vx1 - vx0 + 2, vy1 - vy0 + 2);
            ctx.textBaseline = 'alphabetic';
            for (const g of geo.groups) {
                ctx.font = g.font;
                ctx.fillStyle = g.color;
                for (const c of g.chars) {
                    if (c.x > vx1 + g.size || c.x < vx0 - g.size * 2 || c.y < vy0 - g.size || c.y > vy1 + g.size * 2) continue;
                    ctx.fillText(c.ch, c.x, c.y);
                }
            }
            // El interior de la «o» se abre como un iris cuando la letra ya ocupa media pantalla
            const k = smooth(0.36, 0.6, p);
            if (k > 0.001) {
                const w = geo.width * k, h = geo.height * k;
                ctx.globalCompositeOperation = 'destination-out';
                ctx.drawImage(geo.img, geo.cx - w / 2, geo.cy - h / 2, w, h);
            }
            cases.style.transform = p > 0 && p < 1 ? `scale(${(1 + 0.16 * (1 - smooth(0.3, 0.95, p))).toFixed(4)})` : '';
            section.classList.toggle('portal-done', p >= 0.9);
        };

        const update = () => {
            if (!geo) return false;
            const r = scene.getBoundingClientRect();
            const target = clamp(-r.top / spacer.offsetHeight);
            current = current < 0 ? target : current + (target - current) * 0.25;
            if (Math.abs(target - current) < 0.0005) current = target;
            if (current !== drawnAt) { draw(current); drawnAt = current; }
            return current !== target;
        };

        measure();
        return { measure, update };
    }

    // ---------- bucle común ----------
    const scenes = [];
    const timeline = document.getElementById('timeline');
    const production = document.getElementById('production');
    [timeline && timelineScene(timeline), production && portalScene(production)].forEach(s => s && scenes.push(s));
    if (!scenes.length) return;

    let frame = 0;
    const run = () => {
        frame = 0;
        let busy = false;
        scenes.forEach(s => { busy = s.update() || busy; });
        if (busy) frame = requestAnimationFrame(run);
    };
    const wake = () => { if (!frame) frame = requestAnimationFrame(run); };
    let lastWidth = window.innerWidth;
    const remeasure = () => { scenes.forEach(s => s.measure()); wake(); };
    window.addEventListener('scroll', wake, { passive: true });
    window.addEventListener('resize', () => {
        // En móvil la barra de direcciones cambia la altura al hacer scroll: sólo el ancho manda
        const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (coarse && window.innerWidth === lastWidth) return;
        lastWidth = window.innerWidth;
        remeasure();
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(remeasure);
    window.addEventListener('load', remeasure);
    wake();
})();
