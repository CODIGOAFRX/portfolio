// Transición entre AFR-MIND y la trayectoria: «de la red a la línea del tiempo».
// Las tecnologías de mi CV empiezan como la red de AFR-MIND, sobre su mismo negro, unidas
// cuando aparecen juntas en las notas del CV con las que está entrenada. Con el scroll la red
// gira, el fondo pasa al blanco de la trayectoria y cada nodo baja a la etapa en la que entró
// en mi trabajo. Ahí se queda: la línea del tiempo aguanta un tramo y la página sigue.
// Sólo depende de la posición del scroll. Sin JS la sección no existe; con movimiento
// reducido se queda quieta en la línea del tiempo.
(() => {
    const section = document.getElementById('red');
    if (!section || !('IntersectionObserver' in window)) return;
    const stage = section.querySelector('.net-stage');
    const canvas = section.querySelector('.net-canvas');
    const ctx = canvas && canvas.getContext('2d');
    if (!stage || !ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const plate = section.querySelector('.net-plate');
    const plateGlobo = section.querySelector('.net-plate-globo');

    const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
    const mix = (a, b, k) => a + (b - a) * k;
    const prog = (t, a, b) => clamp((t - a) / (b - a));
    const ease = x => (x <= 0 ? 0 : x >= 1 ? 1 : x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const rgb = (c, a = 1) => `rgba(${c[0] | 0}, ${c[1] | 0}, ${c[2] | 0}, ${a})`;

    // ---------- datos: etapas de la trayectoria y notas del CV (las de AFR-MIND) ----------
    const STATIONS = [
        { year: '2023 – 2025', name: 'Formación', nodes: ['Java', 'SQL', 'Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'Pandas', 'PySpark', 'Scikit-learn'] },
        { year: '2025', name: 'Kyndryl', nodes: ['Selenium', 'Splunk', 'IBM ITM', 'Navegaciones sintéticas'] },
        { year: '2026', name: 'Estación Diseño', nodes: ['PHP', 'MariaDB', 'React', 'Tailwind', 'Docker', 'JWT', 'Docencia de IA'] },
        { year: 'Hoy', name: 'En producción', nodes: ['Spring Boot', 'PostgreSQL', 'TypeScript', 'Cloudflare Workers', 'D1', 'Playwright', 'GitHub Actions', 'Three.js', 'IA agéntica', 'Git'] },
    ];
    // Cada nota une lo que aparece en ella (resumen de las notas del CV de AFR-MIND)
    const NOTES = [
        ['Java', 'Spring Boot', 'SQL'],
        ['Python', 'Selenium', 'Playwright'],
        ['Python', 'Selenium', 'Navegaciones sintéticas'],
        ['Splunk', 'IBM ITM', 'Navegaciones sintéticas'],
        ['PHP', 'MariaDB', 'JWT', 'Docker', 'React', 'Tailwind'],
        ['TypeScript', 'Playwright', 'Python'],
        ['React', 'TypeScript', 'Cloudflare Workers', 'D1', 'Playwright'],
        ['GitHub Actions', 'D1', 'Cloudflare Workers'],
        ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
        ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker'],
        ['React', 'TypeScript', 'Three.js'],
        ['Python', 'Pandas', 'Scikit-learn'],
        ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Python'],
        ['Pandas', 'PySpark', 'Scikit-learn', 'SQL'],
        ['IA agéntica', 'Git', 'Docencia de IA'],
        ['Docker', 'GitHub Actions', 'Git'],
    ];
    const nodes = [];
    STATIONS.forEach((st, si) => st.nodes.forEach((label, j) => nodes.push({ label, si, j, deg: 0 })));
    const index = new Map(nodes.map((n, i) => [n.label, i]));
    const edgeSet = new Set();
    NOTES.forEach(note => note.forEach((a, i) => note.slice(i + 1).forEach(b => {
        const ia = index.get(a), ib = index.get(b);
        if (ia == null || ib == null) return;
        edgeSet.add(ia < ib ? `${ia}-${ib}` : `${ib}-${ia}`);
    })));
    const edges = [...edgeSet].map(k => k.split('-').map(Number));
    edges.forEach(([a, b]) => { nodes[a].deg++; nodes[b].deg++; });

    // ---------- forma de la red: un reparto de fuerzas con semilla fija (siempre la misma) ----------
    let seed = 20261020;
    const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
    nodes.forEach(n => {
        const a = (n.si / STATIONS.length) * Math.PI * 2 + rand() * 1.2;
        const r = 0.35 + rand() * 0.5;
        n.nx = Math.cos(a) * r; n.ny = Math.sin(a) * r;
    });
    for (let it = 0; it < 420; it++) {
        const cool = 1 - it / 420;
        nodes.forEach(n => { n.fx = -n.nx * 0.02; n.fy = -n.ny * 0.02; });
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i], b = nodes[j];
                let dx = a.nx - b.nx, dy = a.ny - b.ny;
                const d2 = Math.max(0.0025, dx * dx + dy * dy);
                const f = 0.0036 / d2;
                a.fx += dx * f; a.fy += dy * f; b.fx -= dx * f; b.fy -= dy * f;
            }
        }
        edges.forEach(([i, j]) => {
            const a = nodes[i], b = nodes[j];
            const dx = b.nx - a.nx, dy = b.ny - a.ny, d = Math.hypot(dx, dy) || 1;
            const f = (d - 0.36) * 0.05;
            a.fx += dx / d * f; a.fy += dy / d * f; b.fx -= dx / d * f; b.fy -= dy / d * f;
        });
        nodes.forEach(n => { n.nx += clamp(n.fx, -0.05, 0.05) * cool; n.ny += clamp(n.fy, -0.05, 0.05) * cool; });
    }
    const ext = Math.max(...nodes.map(n => Math.max(Math.abs(n.nx), Math.abs(n.ny)))) || 1;
    nodes.forEach(n => { n.nx /= ext; n.ny /= ext; });

    // ---------- textos (copia visual; la sección tiene su aria-label) ----------
    const captions = [
        ['Lo que sé, conectado.', `La red de AFR-MIND: ${nodes.length} conocimientos de mi CV, unidos cuando aparecen juntos en él.`],
        ['Y ordenado en el tiempo.', 'Cada uno en la etapa en la que entró en mi trabajo, de la formación a lo que hoy está en producción.'],
    ].map(([title, text]) => {
        const box = document.createElement('div');
        box.className = 'net-caption';
        box.setAttribute('aria-hidden', 'true');
        box.innerHTML = '<p class="net-caption-title"></p><p class="net-caption-text"></p>';
        box.firstChild.textContent = title;
        box.lastChild.textContent = text;
        stage.appendChild(box);
        return box;
    });

    // ---------- tramos del recorrido ----------
    const SPIN = [0, 0.4];        // la red gira con el scroll
    const ORDER = [0.32, 0.74];   // los nodos van a su etapa (escalonado por etapa)
    const LIGHT = [0.38, 0.62];   // el blanco de la trayectoria sube y tapa el negro de AFR-MIND
    const AXIS = [0.5, 0.7];      // se traza la línea del tiempo; desde 0,76 la escena se queda quieta
    const DARK = [10, 10, 10], LIGHTBG = [250, 250, 250];
    const INK_DARK = [241, 241, 239], INK_LIGHT = [17, 17, 17];
    const RED = [229, 50, 45];

    let W = 0, H = 0, dpr = 1, L = null, t = -1, frame = 0, near = false;
    const FONT = 'Arial, Helvetica, sans-serif';
    const SERIF = 'Georgia, "Times New Roman", serif';

    // ---------- disposición para el tamaño actual ----------
    function layout() {
        const r = stage.getBoundingClientRect();
        W = r.width; H = r.height;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
        const mobile = W <= 768;
        const padX = Math.max(16, W * 0.06);
        const fontSize = mobile ? 11 : 12;
        ctx.font = `${fontSize}px ${FONT}`;
        nodes.forEach(n => { n.w = ctx.measureText(n.label).width; });

        // Red: centrada en la zona libre bajo los textos
        const top = mobile ? H * 0.3 : H * 0.24;
        // (las etiquetas van a la derecha de cada punto: en móvil la red se desplaza a la izquierda)
        const net = { cx: mobile ? W * 0.4 : W * 0.62, cy: top + (H - top) * 0.5, rx: Math.min(W * (mobile ? 0.28 : 0.28), 520), ry: (H - top) * 0.4 };

        // Línea del tiempo. Escritorio: horizontal, cada etapa es una columna sobre la línea.
        // Móvil: vertical a la izquierda, cada etapa es un bloque de etiquetas a su derecha.
        let axis, stations;
        if (!mobile) {
            const y = H * 0.74;
            const x0 = padX, x1 = W - padX;
            const colW = (x1 - x0) / STATIONS.length;
            const gap = Math.min(30, (y - H * 0.3) / 10);
            axis = { x0, y0: y, x1, y1: y, horizontal: true };
            stations = STATIONS.map((st, si) => ({ x: x0 + colW * si, y, colW }));
            nodes.forEach(n => {
                const st = stations[n.si];
                n.ox = st.x + 6; n.oy = y - 26 - n.j * gap;
            });
        } else {
            // El escenario mide 100lvh, pero con las barras del navegador a la vista se ve menos: la
            // línea se reparte en la altura que de verdad se ve, entre el texto y el borde inferior
            const visto = Math.min(H, window.innerHeight || H);
            const pie = captions[1].offsetTop + captions[1].offsetHeight;
            const x = padX + 4, y0 = pie + 30, y1 = visto - Math.max(22, visto * 0.035);
            const maxW = W - padX * 2 - 22;
            // Las etiquetas de cada etapa fluyen en líneas, debajo de su nombre
            const filas = STATIONS.map((st, si) => {
                let cx = 0, fila = 0;
                nodes.filter(n => n.si === si).forEach(n => {
                    const w = n.w + 22;
                    if (cx + w > maxW && cx > 0) { cx = 0; fila++; }
                    n.cx = cx; n.fila = fila;
                    cx += w;
                });
                return fila + 1;
            });
            // Cada bloque mide lo que ocupan sus líneas; si no cabe todo, se aprieta sin llegar a pisarse
            const total = filas.reduce((a, b) => a + b, 0), huecos = STATIONS.length - 1;
            const k = Math.min(1, (y1 - y0) / (STATIONS.length * 44 + total * 21 + huecos * 16));
            const cabeza = Math.max(35, 44 * k), fila = Math.max(15.5, 21 * k);
            const hueco = Math.max(4, Math.min(16, (y1 - y0 - STATIONS.length * cabeza - total * fila) / huecos));
            let y = y0;
            stations = STATIONS.map((st, si) => {
                const bloque = { x, y };
                y += cabeza + filas[si] * fila + hueco;
                return bloque;
            });
            axis = { x0: x, y0, x1: x, y1: Math.max(y1, y - hueco), horizontal: false };
            nodes.forEach(n => { n.ox = x + 18 + n.cx; n.oy = stations[n.si].y + cabeza + n.fila * fila; });
        }
        L = { mobile, net, axis, stations, fontSize, padX };
        t = -1;
    }

    // ---------- dibujo en el punto p ----------
    function draw(p) {
        const wipe = ease(prog(p, ...LIGHT));
        section.classList.toggle('is-light', wipe > 0.5);
        const spin = ease(prog(p, ...SPIN)) * 0.9 - 0.25;
        const cs = Math.cos(spin), sn = Math.sin(spin);
        const { net, axis, stations } = L;

        // Posición de cada nodo: de la red a la columna de su etapa
        nodes.forEach(n => {
            const x = n.nx * cs - n.ny * sn, y = n.nx * sn + n.ny * cs;
            const a = ORDER[0] + n.si * 0.045;
            n.k = ease(prog(p, a, a + (ORDER[1] - ORDER[0]) - 0.12));
            n.x = mix(net.cx + x * net.rx, n.ox, n.k); n.y = mix(net.cy + y * net.ry, n.oy, n.k);
        });

        // El blanco de la trayectoria sube desde abajo como un horizonte: por encima, la escena en
        // tinta clara sobre el negro de AFR-MIND; por debajo, en tinta oscura sobre el blanco
        const paint = (ink, light) => {
            // Aristas: se apagan a medida que sus nodos se ordenan
            ctx.lineWidth = 1;
            edges.forEach(([i, j]) => {
                const a = nodes[i], b = nodes[j];
                const alpha = 0.2 * (1 - Math.max(a.k, b.k)) * (1 - light * 0.4);
                if (alpha < 0.005) return;
                ctx.strokeStyle = rgb(ink, alpha);
                ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            });

            // Línea del tiempo, que se traza de principio a fin
            const axisK = ease(prog(p, ...AXIS));
            if (axisK > 0) {
                ctx.strokeStyle = rgb(ink, 1);
                ctx.lineWidth = 1;
                ctx.beginPath();
                if (axis.horizontal) {
                    ctx.moveTo(axis.x0, axis.y0); ctx.lineTo(mix(axis.x0, axis.x1, axisK), axis.y1);
                } else {
                    ctx.moveTo(axis.x0, axis.y0); ctx.lineTo(axis.x1, mix(axis.y0, axis.y1, axisK));
                }
                ctx.stroke();
                // Etapas: marca, año y nombre; la última («Hoy») en rojo
                const stK = ease(prog(p, AXIS[0] + 0.06, AXIS[1] + 0.04));
                stations.forEach((st, si) => {
                    const S = STATIONS[si];
                    const k = clamp(stK * 1.6 - si * 0.15);
                    if (k <= 0) return;
                    const last = si === STATIONS.length - 1;
                    ctx.fillStyle = rgb(last ? RED : ink, k);
                    ctx.beginPath(); ctx.arc(st.x, st.y, last ? 4.5 : 3.5, 0, Math.PI * 2); ctx.fill();
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'top';
                    ctx.font = `600 ${L.fontSize}px ${FONT}`;
                    ctx.letterSpacing = '1px';
                    ctx.fillStyle = rgb(last ? RED : ink, k * 0.75);
                    const tx = axis.horizontal ? st.x : st.x + 18;
                    const ty = axis.horizontal ? st.y + 16 : st.y - 6;
                    ctx.fillText(S.year.toUpperCase(), tx, ty);
                    ctx.letterSpacing = '0px';
                    ctx.font = `${L.mobile ? 17 : 21}px ${SERIF}`;
                    ctx.fillStyle = rgb(ink, k);
                    ctx.fillText(S.name, tx, ty + (L.mobile ? 15 : 18));
                });
            }

            // Nodos y etiquetas
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'left';
            ctx.font = `${L.fontSize}px ${FONT}`;
            nodes.forEach(n => {
                const r = mix(2 + Math.min(4, n.deg * 0.45), 2.5, n.k);
                ctx.fillStyle = rgb(ink, mix(0.95, 0.85, n.k));
                ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = rgb(ink, mix(0.72, 0.9, n.k));
                ctx.fillText(n.label, n.x + 9, n.y + 0.5);
            });
        };
        const edge = H * (1 - wipe);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = rgb(DARK);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (edge > 0) {
            ctx.save();
            ctx.beginPath(); ctx.rect(0, 0, W, edge); ctx.clip();
            paint(INK_DARK, 0);
            ctx.restore();
        }
        if (edge < H) {
            ctx.save();
            ctx.beginPath(); ctx.rect(0, edge, W, H - edge); ctx.clip();
            ctx.fillStyle = rgb(LIGHTBG);
            ctx.fillRect(0, edge, W, H - edge);
            paint(INK_LIGHT, 1);
            ctx.restore();
        }

        // Textos: el primero con la red, el segundo con la línea del tiempo
        const c1 = 1 - ease(prog(p, 0.24, 0.36));
        const c2 = ease(prog(p, 0.58, 0.7));
        captions[0].style.opacity = c1.toFixed(3);
        captions[0].style.transform = `translateY(${(-(1 - c1) * 12).toFixed(2)}px)`;
        captions[1].style.opacity = c2.toFixed(3);
        captions[1].style.transform = `translateY(${((1 - c2) * 12).toFixed(2)}px)`;
        if (plate) {
            const k = 1 - ease(prog(p, 0.2, 0.32));
            plate.style.opacity = (k * 0.9).toFixed(3);
            plate.style.transform = `translateY(${(-p * 60).toFixed(2)}px)`;
        }
        // La trayectoria del globo acompaña al texto del segundo tramo
        if (plateGlobo) {
            plateGlobo.style.opacity = c2.toFixed(3);
            plateGlobo.style.transform = `translateY(${((1 - c2) * 12).toFixed(2)}px)`;
        }
    }

    // ---------- scroll ----------
    const progress = () => {
        const r = section.getBoundingClientRect();
        return clamp(-r.top / Math.max(1, r.height - H));
    };
    function tick() {
        frame = 0;
        const p = reduce ? 1 : progress();
        if (t < 0) t = p;
        else t += (p - t) * 0.2;
        if (Math.abs(p - t) < 0.0004) t = p;
        draw(t);
        if (t !== p && near) frame = requestAnimationFrame(tick);
    }
    const wake = () => { if (!frame && near) frame = requestAnimationFrame(tick); };

    section.classList.add('is-on');
    if (reduce) section.classList.add('is-still');
    layout();
    new IntersectionObserver(([entry]) => {
        near = entry.isIntersecting;
        if (near) wake();
    }, { rootMargin: '25% 0px' }).observe(section);
    window.addEventListener('scroll', wake, { passive: true });
    let lastWidth = window.innerWidth;
    new ResizeObserver(() => {
        const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (coarse && window.innerWidth === lastWidth && L) return;
        lastWidth = window.innerWidth;
        layout();
        if (near) tick();
    }).observe(stage);
})();
