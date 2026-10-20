// Escenas con scroll de la portada (la intro vive en intro.js y la red → línea del tiempo en net.js):
//  - Trayectoria: Formación entra por la izquierda y Experiencia por la derecha hasta
//    juntarse. En escritorio la sección se queda fija mientras ocurre y un buen tramo
//    después, así la inercia del scroll no se la salta.
//  - Proyectos: zoom a la última «o» de «portfolio»; su interior se abre y se entra en los
//    proyectos. Al subir se sale de la «o».
//  - Tecnologías: amanece en el globo de la página y cada categoría es una órbita.
// Sin JS o con movimiento reducido todo queda como una página normal.
(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
    const mix = (a, b, t) => a + (b - a) * t;
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
        // Erosión cuadrada separable: ~1,5 px de margen respecto al trazo
        const er = Math.round(1.5 * R);
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
        // Contorno de la contraforma (encogida) visto desde su centro en 256 direcciones:
        // un trazado vectorial que sigue liso a cualquier escala
        const cx0 = (fx0 + fx1) / 2, cy0 = (fy0 + fy1) / 2;
        const radii = [];
        for (let a = 0; a < 256; a++) {
            const ang = (a / 256) * Math.PI * 2, dx = Math.cos(ang), dy = Math.sin(ang);
            let r = 0;
            while (r < W && out[Math.round(cy0 + dy * (r + 0.5)) * W + Math.round(cx0 + dx * (r + 0.5))]) r += 0.5;
            radii.push(r);
        }
        // Media circular del radio: quita los escalones de la rejilla, que ampliados 100x se
        // verían como dientes (el margen de la erosión absorbe la diferencia)
        const outline = radii.map((_, a) => {
            let sum = 0;
            for (let d = -6; d <= 6; d++) sum += radii[(a + d + 256) % 256];
            const r = sum / 13, ang = (a / 256) * Math.PI * 2;
            return [(Math.cos(ang) * r) / R, (Math.sin(ang) * r) / R];
        });
        return {
            outline, // en px CSS, respecto al centro
            // centro en px CSS, respecto al origen de la letra sobre la línea base
            cx: cx0 / R - pad,
            cy: cy0 / R - base,
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
                cx: o.x + shape.cx, cy: o.y + shape.cy,
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
                // Trazado suave por los puntos medios del contorno
                const pts = geo.outline;
                const at = n => pts[(n + pts.length) % pts.length];
                const mid = n => [geo.cx + (at(n)[0] + at(n + 1)[0]) / 2 * k, geo.cy + (at(n)[1] + at(n + 1)[1]) / 2 * k];
                ctx.globalCompositeOperation = 'destination-out';
                ctx.fillStyle = '#000';
                ctx.beginPath();
                ctx.moveTo(...mid(-1));
                for (let n = 0; n < pts.length; n++) {
                    const [mx, my] = mid(n);
                    ctx.quadraticCurveTo(geo.cx + at(n)[0] * k, geo.cy + at(n)[1] * k, mx, my);
                }
                ctx.closePath();
                ctx.fill();
            }
            cases.style.transform = p > 0 && p < 1 ? `scale(${(1 + 0.16 * (1 - smooth(0.3, 0.95, p))).toFixed(4)})` : '';
            section.classList.toggle('portal-done', p >= 0.9);
        };

        const update = () => {
            if (!geo) return false;
            const r = scene.getBoundingClientRect();
            const target = clamp(-r.top / spacer.offsetHeight);
            current = current < 0 ? target : current + (target - current) * 0.25;
            // Fuera del tramo fijo no se arrastra el suavizado: la escena ya se mueve con la página
            if (Math.abs(target - current) < 0.0005 || target <= 0 || target >= 1) current = target;
            if (current !== drawnAt) { draw(current); drawnAt = current; }
            return current !== target;
        };

        measure();
        return { measure, update };
    }

    // ---------- Tecnologías: amanecer sobre el globo y órbitas ----------
    // Toma prestado el globo de fondo de la página (script.js) en el punto exacto en el que
    // está, lo trae al centro, amanece en él como las fases de la luna y su luz tiñe la
    // pantalla de blanco. Después cada categoría es una órbita con sus tecnologías como
    // satélites, y el scroll las activa una a una. Al final devuelve el globo a su sitio.
    function orbitScene(section) {
        const G = window.WireGlobe;
        const shell = document.querySelector('.page-globe');
        const stage = section.querySelector('.orbit-stage');
        const panel = stage && stage.querySelector('.content-wrapper');
        const rows = [...section.querySelectorAll('.tech-blueprint-row')];
        if (!G || !shell || !stage || !panel || rows.length < 2) return null;

        // Tecnologías de cada categoría, tal y como están en la lista (sin la frase tras el <br>)
        const cats = rows.map(row => {
            const data = row.querySelector('.tech-blueprint-data');
            const tmp = document.createElement('span');
            tmp.innerHTML = data ? data.innerHTML.split(/<br\s*\/?>/i)[0] : '';
            return { row, techs: tmp.textContent.split('·').map(t => t.replace(/\s+/g, ' ').trim()).filter(Boolean) };
        });
        const N = cats.length;
        // Órbitas: radio (en radios del globo), inclinación y nodo en grados, sentido de giro
        const INCL = [68, 16, 52, 30, 78, 22, 60];
        const NODE = [12, 140, 255, 62, 200, 320, 108];
        const orbits = cats.map((cat, k) => ({
            rho: 1.34 + k * 0.125,
            incl: INCL[k % INCL.length] * Math.PI / 180,
            node: NODE[k % NODE.length] * Math.PI / 180,
            dir: k % 2 ? -1 : 1,
            phase: k * 0.9,
            techs: cat.techs,
        }));

        section.classList.add('orbit-on');

        // Controles: que se entienda que esto avanza con el scroll y que se pueda saltar de una
        // categoría a otra con botones o pulsando la propia categoría
        const goTo = i => {
            const r = section.getBoundingClientRect();
            const p = 0.21 + ((clamp(i, 0, N - 1) + 0.5) / N) * 0.64;
            window.scrollTo({ top: window.scrollY + r.top + p * (r.height - vh), behavior: 'smooth' });
        };
        const label = panel.querySelector('.section-label');
        const head = document.createElement('div');
        head.className = 'orbit-head';
        label.replaceWith(head);
        const nav = document.createElement('div');
        nav.className = 'orbit-nav';
        const button = (text, aria, onClick) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'orbit-btn';
            b.textContent = text;
            b.setAttribute('aria-label', aria);
            b.addEventListener('click', onClick);
            return b;
        };
        const prev = button('↑', 'Categoría anterior', () => goTo(active - 1));
        const next = button('↓', 'Categoría siguiente', () => goTo(active + 1));
        const count = document.createElement('span');
        count.className = 'orbit-count';
        count.setAttribute('aria-live', 'polite');
        nav.append(count, prev, next);
        head.append(label, nav);
        const progress = document.createElement('div');
        progress.className = 'orbit-progress';
        progress.setAttribute('aria-hidden', 'true');
        const ticks = cats.map(() => progress.appendChild(document.createElement('i')));
        const hint = document.createElement('p');
        hint.className = 'orbit-hint';
        hint.textContent = 'Desliza o elige una categoría';
        const foot = document.createElement('div');
        foot.className = 'orbit-foot';
        foot.append(progress, hint);
        panel.querySelector('.tech-grid-blueprint').after(foot);
        cats.forEach((cat, i) => {
            const old = cat.row.querySelector('.tech-blueprint-label');
            const b = document.createElement('button');
            b.type = 'button';
            b.className = old.className;
            b.textContent = old.textContent;
            b.setAttribute('aria-expanded', 'false');
            b.addEventListener('click', () => goTo(i));
            old.replaceWith(b);
            cat.button = b;
        });

        const canvas = document.createElement('canvas');
        canvas.className = 'orbit-canvas';
        canvas.setAttribute('aria-hidden', 'true');
        stage.insertBefore(canvas, panel);
        const ctx = canvas.getContext('2d');
        // El globo se pinta aparte y se compone con su opacidad, igual que el globo de fondo
        const layer = document.createElement('canvas');
        const lctx = layer.getContext('2d');

        let vw = 0, vh = 0, dpr = 1;
        let current = -1;
        let active = -1;
        let edge = '';
        const start = performance.now();

        const measure = () => {
            vw = stage.clientWidth;
            vh = stage.clientHeight;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = layer.width = Math.round(vw * dpr);
            canvas.height = layer.height = Math.round(vh * dpr);
            current = -1;
            edge = '';
        };

        // Punto de una órbita: círculo inclinado alrededor del globo, visto con la misma
        // inclinación de cámara que el globo. z > 0 queda delante del globo.
        const orbitPoint = (o, theta, cx, cy, R) => {
            const x = o.rho * Math.cos(theta), z = o.rho * Math.sin(theta);
            const y1 = -z * Math.sin(o.incl), z1 = z * Math.cos(o.incl);
            const x2 = x * Math.cos(o.node) + z1 * Math.sin(o.node);
            const z2 = -x * Math.sin(o.node) + z1 * Math.cos(o.node);
            const ty = y1 * Math.cos(G.tilt) - z2 * Math.sin(G.tilt);
            const tz = y1 * Math.sin(G.tilt) + z2 * Math.cos(G.tilt);
            return { x: cx + x2 * R, y: cy - ty * R, z: tz };
        };

        // Parte iluminada del disco, como las fases de la luna: f = 0 nueva, 1 llena
        const litPath = (c, x, y, r, f) => {
            c.beginPath();
            if (f >= 0.999) { c.arc(x, y, r, 0, Math.PI * 2); return; }
            c.moveTo(x, y - r);
            c.arc(x, y, r, -Math.PI / 2, Math.PI / 2, false);
            c.ellipse(x, y, Math.max(r * Math.abs(Math.cos(Math.PI * f)), 0.01), r, 0, Math.PI / 2, -Math.PI / 2, f < 0.5);
            c.closePath();
        };

        const fill = color => {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const draw = p => {
            const l = G.live;
            if (!l || !l.size) return;
            const mobile = vw <= 768;
            // El globo tal y como está en el fondo de la página, y su sitio en la escena
            const live = { x: l.x, y: l.y, r: 0.445 * l.size * l.scale, line: l.scale, opacity: l.opacity };
            const R = mobile ? Math.min(vw * 0.2, vh * 0.12) : Math.min(vh * 0.2, vw * 0.13);
            const home = { x: vw * (mobile ? 0.5 : 0.68), y: vh * (mobile ? 0.3 : 0.5), r: R };

            const enter = smooth(0, 0.07, p);
            // La salida termina antes del final del tramo fijo: al soltarse ya no queda nada por hacer
            const exit = smooth(0.9, 0.98, p);
            const lit = smooth(0.065, 0.135, p);
            const flood = smooth(0.115, 0.2, p);
            const k = enter * (1 - exit);
            const gx = mix(live.x, home.x, k), gy = mix(live.y, home.y, k), gr = mix(live.r, home.r, k);
            const line = mix(live.line, 1, k);
            const opacity = mix(live.opacity, 1, k);
            const rotation = l.rotation + Math.sin(Math.PI * p) * 0.9;

            // Fondo: noche y la luz del globo derramándose hasta cubrir la pantalla
            fill('#111111');
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            if (lit > 0 && flood < 1) {
                const halo = ctx.createRadialGradient(gx, gy, gr * 0.9, gx, gy, gr * 2.4);
                halo.addColorStop(0, `rgba(255, 255, 255, ${0.22 * lit})`);
                halo.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = halo;
                ctx.fillRect(0, 0, vw, vh);
            }
            if (flood > 0) {
                const far = Math.hypot(Math.max(gx, vw - gx), Math.max(gy, vh - gy));
                const inner = gr + (far * 1.05 - gr) * flood;
                const feather = gr * 1.6 * (1 - flood) + 1;
                const light = ctx.createRadialGradient(gx, gy, 0, gx, gy, inner + feather);
                light.addColorStop(0, '#ffffff');
                light.addColorStop(inner / (inner + feather), '#ffffff');
                light.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = light;
                ctx.fillRect(0, 0, vw, vh);
            }

            // Órbitas: se trazan tras el amanecer y se activan una por categoría
            const orbitsIn = smooth(0.15, 0.26, p) * (1 - exit);
            const cp = (p - 0.21) / 0.64 * N;
            const finale = smooth(0.85, 0.89, p);
            const spin = p * Math.PI * 1.2 + (performance.now() - start) / 1000 * 0.05;
            const segs = 120;
            const strokes = [];
            orbits.forEach((o, i) => {
                const drawn = smooth(i / N * 0.5, i / N * 0.5 + 0.5, orbitsIn);
                if (drawn <= 0) return;
                const emph = Math.max(smooth(i - 0.12, i + 0.12, cp) * (1 - smooth(i + 0.88, i + 1.12, cp)), 0.55 * finale);
                const pts = [];
                const n = Math.max(2, Math.round(segs * drawn));
                for (let s = 0; s <= n; s++) pts.push(orbitPoint(o, o.phase + (s / segs) * Math.PI * 2, gx, gy, gr));
                strokes.push({ o, pts, emph, drawn });
            });
            const strokeOrbits = front => {
                for (const { pts, emph, drawn } of strokes) {
                    ctx.lineWidth = 1 + 0.6 * emph;
                    for (let s = 1; s < pts.length; s++) {
                        const a = pts[s - 1], b = pts[s];
                        if ((a.z + b.z >= 0) !== front) continue;
                        const alpha = (0.14 + 0.76 * emph) * (front ? 1 : 0.45) * Math.min(1, drawn * 1.5);
                        ctx.strokeStyle = `rgba(17, 17, 17, ${alpha.toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            };
            strokeOrbits(false);

            // Globo: cara nocturna con las líneas claras y cara de día con las oscuras
            lctx.setTransform(1, 0, 0, 1, 0, 0);
            lctx.clearRect(0, 0, layer.width, layer.height);
            lctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const opts = { centerX: gx, centerY: gy, radius: gr, rotation, lineScale: line };
            if (lit < 1) G.draw(lctx, { ...opts, theme: 1 });
            if (lit > 0) {
                lctx.save();
                litPath(lctx, gx, gy, gr, lit);
                lctx.clip();
                lctx.fillStyle = `rgba(255, 255, 255, ${1 - exit})`;
                lctx.fillRect(gx - gr - 2, gy - gr - 2, gr * 2 + 4, gr * 2 + 4);
                G.draw(lctx, { ...opts, theme: mix(0, l.theme, exit) });
                lctx.restore();
            }
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.globalAlpha = opacity;
            ctx.drawImage(layer, 0, 0);
            ctx.globalAlpha = 1;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            strokeOrbits(true);

            // Satélites: las tecnologías de cada órbita; la activa lleva sus nombres
            const fontSize = mobile ? 10.5 : 12;
            ctx.font = `${fontSize}px "Courier New", Courier, monospace`;
            ctx.textBaseline = 'middle';
            for (const { o, emph, drawn } of strokes) {
                const count = o.techs.length;
                o.techs.forEach((tech, j) => {
                    const theta = o.phase + o.dir * spin + (j / count) * Math.PI * 2;
                    const around = (((theta - o.phase) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
                    if (around > drawn * Math.PI * 2) return; // la órbita aún no ha llegado ahí
                    const pt = orbitPoint(o, theta, gx, gy, gr);
                    // Detrás del globo y dentro de su disco: tapado por la esfera
                    if (pt.z < 0 && Math.hypot(pt.x - gx, pt.y - gy) < gr * 1.02) return;
                    const depth = pt.z >= 0 ? 1 : 0.4;
                    const lead = j === 0 && emph > 0.5;
                    const alpha = (0.25 + 0.75 * emph) * depth * Math.min(1, drawn * 1.5);
                    ctx.fillStyle = lead ? `rgba(229, 50, 45, ${alpha.toFixed(3)})` : `rgba(17, 17, 17, ${alpha.toFixed(3)})`;
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, 1.8 + 1.6 * emph, 0, Math.PI * 2);
                    ctx.fill();
                    const labelAlpha = emph * (1 - finale) * depth;
                    if (labelAlpha > 0.02) {
                        const dx = pt.x - gx, dy = pt.y - gy, d = Math.hypot(dx, dy) || 1;
                        // Hacia fuera del globo; si no cabe en pantalla, al otro lado del satélite
                        const width = ctx.measureText(tech).width;
                        let right = dx >= 0;
                        if (right && pt.x + 13 + width > vw - 6) right = false;
                        else if (!right && pt.x - 13 - width < 6) right = true;
                        ctx.textAlign = right ? 'left' : 'right';
                        ctx.fillStyle = `rgba(17, 17, 17, ${labelAlpha.toFixed(3)})`;
                        ctx.fillText(tech, pt.x + (right ? 9 : -9), pt.y + (dy / d) * 6);
                    }
                });
            }

            // Panel de la izquierda: la categoría activa se despliega
            const panelIn = smooth(0.18, 0.23, p) * (1 - smooth(0.88, 0.92, p));
            stage.style.setProperty('--orbit-panel', panelIn.toFixed(3));
            // Sólo se puede pulsar cuando el panel se ve
            section.classList.toggle('orbit-interactive', panelIn > 0.6);
            const idx = clamp(Math.floor(cp), 0, N - 1);
            if (idx !== active) {
                active = idx;
                cats.forEach((cat, i) => {
                    cat.row.classList.toggle('is-active', i === idx);
                    cat.button.setAttribute('aria-expanded', String(i === idx));
                });
                ticks.forEach((tick, i) => tick.classList.toggle('is-on', i <= idx));
                count.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(N).padStart(2, '0')}`;
                prev.disabled = idx === 0;
                next.disabled = idx === N - 1;
            }
        };

        const update = () => {
            const r = section.getBoundingClientRect();
            const target = clamp(-r.top / Math.max(1, r.height - vh));
            current = current < 0 ? target : current + (target - current) * 0.2;
            // Fuera del tramo fijo el escenario ya se mueve con la página: si el globo siguiera
            // dibujándose en él subiría con la sección y luego saltaría a su sitio. Se devuelve ya.
            if (Math.abs(target - current) < 0.0005 || target <= 0 || target >= 1) current = target;
            const inside = current > 0 && current < 1;
            shell.classList.toggle('is-borrowed', inside);
            // Mientras dura la noche el globo de fondo debe seguir en su tema oscuro (script.js)
            section.dataset.night = current < 0.12 ? '1' : '';
            if (inside) {
                draw(current);
                edge = '';
            } else if (current >= 1 && edge !== 'end') {
                // Ya de día: el globo vuelve a ser el de fondo
                fill('#ffffff');
                stage.style.setProperty('--orbit-panel', '0');
                section.classList.remove('orbit-interactive');
                edge = 'end';
            } else if (current <= 0 && edge !== 'start') {
                fill('#111111');
                stage.style.setProperty('--orbit-panel', '0');
                section.classList.remove('orbit-interactive');
                edge = 'start';
            }
            // Mientras está fijada se redibuja siempre: el globo sigue girando solo
            return inside || current !== target;
        };

        measure();
        return { measure, update };
    }

    // ---------- bucle común ----------
    const scenes = [];
    const timeline = document.getElementById('timeline');
    const production = document.getElementById('production');
    const stack = document.getElementById('stack');
    [timeline && timelineScene(timeline), production && portalScene(production), stack && orbitScene(stack)]
        .forEach(s => s && scenes.push(s));
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
