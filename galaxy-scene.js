// Galaxia de AFR-MIND como datos: partículas, neuronas, sinapsis, pirámide y cámara.
// La comparten el render en vivo de la web (galaxy-gl.js) y el generador de vídeo
// (transicion-galaxia/galaxy.html). La semilla fija hace que siempre sea la misma galaxia.
// Unidades: radio de la galaxia ≈ 100; el disco vive en el plano XZ.
window.GalaxyScene = (() => {
    const DURATION = 7;
    const BG = [10, 10, 10];
    const END = [250, 250, 250];
    const PALETTE = [
        [229, 50, 45], [242, 163, 58], [233, 213, 79], [181, 217, 106], [79, 201, 138],
        [79, 143, 240], [157, 127, 244], [200, 110, 230], [236, 95, 179], [245, 154, 170],
        [255, 122, 92], [214, 185, 140], [207, 207, 207],
    ];
    const COOL = [5, 6, 7, 8, 12, 12, 5, 6];
    const WARM = [1, 2, 11, 10, 11, 12];
    const CORE_WHITE = [255, 236, 214];
    const COLORS = PALETTE.concat([CORE_WHITE, [255, 250, 244]]);
    const CI_CORE = PALETTE.length, CI_WHITE = PALETTE.length + 1;

    let seed = 20261011;
    const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
    const gauss = () => { let u = 0, v = 0; while (!u) u = rand(); while (!v) v = rand(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
    const pick = a => a[Math.floor(rand() * a.length)];
    const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
    const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
    const mix = (a, b, t) => a + (b - a) * t;

    // ---------- galaxia ----------
    const P = []; // {x,y,z,c,s,a,soft}
    const ARMS = 2;
    function armPoint(r, spread) {
        const arm = Math.floor(rand() * ARMS);
        const theta = arm * Math.PI * 2 / ARMS + 2.9 * Math.log(1 + r / 6) + gauss() * spread * (0.27 + 6 / (r + 12));
        return [Math.cos(theta) * r, Math.sin(theta) * r];
    }
    // Bulbo central cálido, con un hueco en el centro para la pirámide
    for (let i = 0; i < 4500; i++) {
        const r = 5.5 + Math.abs(gauss()) * 10 + rand() * 3;
        const th = rand() * Math.PI * 2, ph = Math.acos(2 * rand() - 1);
        const x = r * Math.sin(ph) * Math.cos(th), z = r * Math.sin(ph) * Math.sin(th), y = r * Math.cos(ph) * 0.55;
        const c = rand() < 0.55 ? CI_CORE : (rand() < 0.5 ? CI_WHITE : pick(WARM));
        P.push({ x, y, z, c, s: 0.05 + rand() * 0.08, a: 0.45 + rand() * 0.5 });
    }
    // Brazos espirales
    for (let i = 0; i < 26000; i++) {
        const r = clamp(-Math.log(1 - rand() * 0.985) * 26 + 6, 6, 125);
        const [x, z] = armPoint(r, 1);
        const y = gauss() * (1.2 + 5 * Math.exp(-r / 14));
        const inner = r < 22;
        const u = rand();
        const c = inner ? (rand() < 0.6 ? pick(WARM) : CI_CORE) : (u < 0.45 ? pick(COOL) : u < 0.62 ? 12 : Math.floor(rand() * PALETTE.length));
        P.push({ x, y, z, c, s: 0.12 + rand() * 0.22, a: 0.35 + rand() * 0.6 });
    }
    // Polvo difuso entre brazos
    for (let i = 0; i < 6000; i++) {
        const r = Math.sqrt(rand()) * 120 + 3, th = rand() * Math.PI * 2;
        P.push({ x: Math.cos(th) * r, y: gauss() * 2.5, z: Math.sin(th) * r, c: pick(COOL), s: 0.3 + rand() * 0.5, a: 0.12 + rand() * 0.15, soft: true });
    }
    // Nubes de color en los brazos (regiones de formación estelar)
    for (let i = 0; i < 1400; i++) {
        const r = 18 + rand() * 90;
        const [x, z] = armPoint(r, 0.6);
        P.push({ x, y: gauss() * 1.5, z, c: pick([8, 7, 6, 9, 0]), s: 1.2 + rand() * 2.2, a: 0.08 + rand() * 0.1, soft: true });
    }

    // Neuronas: nodos grandes con sinapsis, como el cerebro de AFR-MIND
    const N = [];
    for (let i = 0; i < 520; i++) {
        const r = 8 + Math.pow(rand(), 0.85) * 110;
        const [x, z] = armPoint(r, 0.8);
        N.push({ x, y: gauss() * 1.6, z, c: Math.floor(rand() * PALETTE.length), s: 0.55 + rand() * 0.7, ph: rand() * Math.PI * 2 });
    }
    const LINKS = [];
    for (let i = 0; i < N.length; i++) {
        const d = [];
        for (let j = 0; j < N.length; j++) if (j !== i) {
            const dx = N[i].x - N[j].x, dy = N[i].y - N[j].y, dz = N[i].z - N[j].z;
            d.push([dx * dx + dy * dy + dz * dz, j]);
        }
        d.sort((a, b) => a[0] - b[0]);
        for (let k = 0; k < 3; k++) if (d[k][0] < 22 * 22 && d[k][1] > i) LINKS.push([i, d[k][1]]);
    }
    // Estrellas de fondo, muy lejos
    const STARS = [];
    for (let i = 0; i < 1600; i++) {
        const th = rand() * Math.PI * 2, ph = Math.acos(2 * rand() - 1), R = 3000;
        STARS.push({ x: R * Math.sin(ph) * Math.cos(th), y: R * Math.cos(ph), z: R * Math.sin(ph) * Math.sin(th), a: 0.15 + Math.pow(rand(), 3) * 0.7, c: pick([12, 12, 12, 5, 6, 11]) });
    }
    // Partículas que nacen en la pirámide y salen en espiral hacia los brazos
    const EMIT = [];
    for (let i = 0; i < 3600; i++) {
        EMIT.push({ th: rand() * Math.PI * 2, ph: rand(), sp: 0.16 + rand() * 0.14, y: gauss() * 0.8, c: Math.floor(rand() * PALETTE.length), s: 0.07 + rand() * 0.1 });
    }
    // Posición de una partícula emitida en el instante t
    const emitted = (e, t) => {
        const k = (e.ph + t * e.sp) % 1;
        const r = 3.0 + k * k * 40;
        const th = e.th + 1.9 * Math.log(1 + r / 5);
        return { x: Math.cos(th) * r, y: e.y * (0.4 + k), z: Math.sin(th) * r, c: k < 0.3 ? CI_WHITE : e.c, s: e.s, a: Math.min(1, Math.sin(Math.PI * Math.min(1, k * 1.1)) * 1.3) };
    };

    // ---------- pirámide (fuente de luz) ----------
    const PA = 2.2, PH = 3.4, PB = 1.0; // semiancho de la base, altura del vértice, profundidad de la base
    const PYR_V = [[0, PH, 0], [-PA, -PB, PA], [PA, -PB, PA], [PA, -PB, -PA], [-PA, -PB, -PA]];
    const PYR_F = [[0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1], [1, 4, 3, 2]];
    const PYR_CENTER = [0, (PH - PB) / 2, 0];
    // Cara frontal (0,1,2): la cámara termina pegada a ella
    const FACE_C = [0, (PH - 2 * PB) / 3, 2 * PA / 3];
    const FACE_ELEV = Math.atan2(PA, PH + PB);
    const LIGHT = (() => { const l = [0.35, 0.8, 0.5], n = Math.hypot(...l); return l.map(v => v / n); })();

    // ---------- cámara ----------
    const T_END = 6.65;
    function camera(t) {
        // Distancia a la cara de la pirámide: avance continuo en escala logarítmica que acelera al final
        const x = clamp(t / T_END, 0, 1);
        const D = Math.exp(Math.log(1250) - 0.75 * x * T_END - 4.26 * Math.pow(x, 8));
        // Sube para ver la espiral desde arriba y baja para encarar la cara de la pirámide
        const up = mix(26, 60, smooth(0.5, 3.2, t)) * Math.PI / 180;
        const elev = mix(up, FACE_ELEV, smooth(3.6, 5.5, t));
        const roll = mix(-0.22, 0.06, smooth(0, 6.2, t));
        const spin = 0.22 * t + 0.02 * t * t; // giro de la galaxia
        const yaw = 1.5 * Math.PI * (1 - smooth(0, 6.0, t)); // giro de la pirámide; se detiene encarando la cámara
        const C = [FACE_C[0], FACE_C[1] + D * Math.sin(elev), FACE_C[2] + D * Math.cos(elev)];
        const f = [0, -Math.sin(elev), -Math.cos(elev)];
        const r = [1, 0, 0];
        const u = [0, Math.cos(elev), -Math.sin(elev)];
        const cr = Math.cos(roll), sr = Math.sin(roll);
        const R = r.map((v, i) => v * cr + u[i] * sr), U = u.map((v, i) => v * cr - r[i] * sr);
        return { D, C, f, R, U, spin, yaw };
    }

    // Curvas de la animación: aparición, sinapsis, saturación de la pirámide y fundido final
    const timing = t => ({
        appear: smooth(0.0, 1.1, t),
        synapse: smooth(0.8, 2.6, t) * (1 - smooth(5.0, 5.9, t)),
        glow: smooth(5.2, 6.3, t),
        edges: 1 - smooth(5.6, 6.2, t),
        settle: smooth(6.45, 6.85, t),
    });

    // Caras visibles de la pirámide con su sombreado. project(x,y,z) -> {x,y,z} | null
    function pyramidFaces(cam, t, project) {
        const cs = Math.cos(cam.yaw), ss = Math.sin(cam.yaw);
        const glow = timing(t).glow;
        const faces = [];
        for (const fi of PYR_F) {
            const pts = [], world = [];
            let ok = true;
            for (const vi of fi) {
                const [x, y, z] = PYR_V[vi];
                world.push([x * cs - z * ss, y, x * ss + z * cs]);
                const o = project(x, y, z, cam.yaw);
                if (!o) { ok = false; break; }
                pts.push(o);
            }
            if (!ok) continue;
            const [A, B, Cc] = world;
            const e1 = [B[0] - A[0], B[1] - A[1], B[2] - A[2]], e2 = [Cc[0] - A[0], Cc[1] - A[1], Cc[2] - A[2]];
            let n = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
            const nn = Math.hypot(...n); n = n.map(v => v / nn);
            const toCam = [cam.C[0] - A[0], cam.C[1] - A[1], cam.C[2] - A[2]];
            if (n[0] * toCam[0] + n[1] * toCam[1] + n[2] * toCam[2] <= 0) continue; // cara de espaldas
            const lit = Math.max(0, n[0] * LIGHT[0] + n[1] * LIGHT[1] + n[2] * LIGHT[2]);
            const b = 0.66 + 0.34 * lit;
            const shade = k => [255, 252, 247].map((v, i) => Math.round(mix(v * Math.min(1, b * k), END[i], glow)));
            faces.push({ pts, col: shade(0.92), top: shade(1.12) });
        }
        return faces;
    }

    return {
        DURATION, BG, END, PALETTE, COLORS, CI_CORE, CI_WHITE,
        P, N, LINKS, STARS, EMIT, emitted,
        PYR_V, PYR_F, PYR_CENTER, LIGHT,
        camera, timing, pyramidFaces, clamp, smooth, mix,
    };
})();
