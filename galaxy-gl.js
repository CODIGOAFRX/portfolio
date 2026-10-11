// Render en vivo de la galaxia con WebGL2, a la resolución real de la pantalla.
// Misma escena que el vídeo (galaxy-scene.js) pero dibujada por la GPU en cada frame:
//   1. escena en un búfer flotante: la pirámide escribe profundidad y oculta lo que
//      queda detrás; estrellas, sinapsis y partículas se suman (luz aditiva);
//   2. bloom: copia a 1/4 de resolución con desenfoque gaussiano separable;
//   3. composición sobre el negro de la web (#0a0a0a);
//   4. la pirámide opaca con antialiasing, sus aristas de luz y las partículas que
//      pasan por delante de ella (stencil + profundidad);
//   5. fundido al #fafafa de la sección siguiente.
// createGalaxyRenderer(canvas) devuelve { render(t), resize(), destroy() } o null si no
// hay WebGL2 (entonces galaxy.js usa el vídeo).
window.createGalaxyRenderer = (canvas, { onLost } = {}) => {
    const S = window.GalaxyScene;
    if (!S) return null;
    const gl = canvas.getContext('webgl2', {
        antialias: true, depth: true, stencil: true, alpha: false,
        premultipliedAlpha: false, powerPreference: 'high-performance',
    });
    if (!gl) return null;

    const NEAR = 0.03, FAR = 6000;
    const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const floatTargets = !!(gl.getExtension('EXT_color_buffer_float') || gl.getExtension('EXT_color_buffer_half_float'));
    const maxPoint = gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1];

    // ---------- shaders ----------
    const CAMERA_GLSL = `
        uniform vec3 uC, uF, uR, uU;
        uniform vec2 uRes;
        uniform float uFocal, uSpin;
        vec3 rotY(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x * c - p.z * s, p.y, p.x * s + p.z * c); }
        // píxeles desde el centro (y hacia arriba) y profundidad
        vec3 toScreen(vec3 p) { vec3 g = p - uC; float d = dot(g, uF); return vec3(dot(g, uR) * uFocal / d, dot(g, uU) * uFocal / d, d); }
        vec4 clipFrom(vec3 s) {
            vec2 ndc = s.xy / (uRes * 0.5);
            float zn = (${FAR.toFixed(1)} + ${NEAR}) / (${FAR.toFixed(1)} - ${NEAR}) - 2.0 * ${FAR.toFixed(1)} * ${NEAR} / ((${FAR.toFixed(1)} - ${NEAR}) * s.z);
            return vec4(ndc * s.z, zn * s.z, s.z);
        }
        const vec4 CULLED = vec4(2.0, 2.0, 2.0, 1.0);
    `;

    const POINTS_VS = `#version 300 es
        precision highp float;
        ${CAMERA_GLSL}
        uniform float uT, uK, uAppear, uSyn, uMaxPoint;
        in vec3 aPos; in vec3 aColor; in float aSize; in float aAlpha; in float aKind; in float aExtra;
        out vec3 vColor; out float vAlpha; flat out int vSoft;
        void main() {
            int kind = int(aKind + 0.5);
            vec3 p = aPos; vec3 col = aColor; float alpha = aAlpha;
            if (kind == 5) { // emitida por la pirámide: aPos = (ángulo, fase, velocidad), aExtra = altura
                float k = fract(aPos.y + uT * aPos.z);
                float r = 3.0 + k * k * 40.0;
                float th = aPos.x + 1.9 * log(1.0 + r / 5.0);
                p = vec3(cos(th) * r, aExtra * (0.4 + k), sin(th) * r);
                if (k < 0.3) col = vec3(1.0, 0.980, 0.957);
                alpha = min(1.0, sin(3.14159265 * min(1.0, k * 1.1)) * 1.3);
            }
            vec3 s = toScreen(rotY(p, uSpin));
            if (s.z < 0.03) { gl_Position = CULLED; gl_PointSize = 0.0; return; }
            float size, a;
            if (kind == 2) { // estrella de fondo
                size = 4.0 * uK; a = alpha * uAppear * 0.55;
            } else {
                if (kind == 3) alpha = (0.35 + 0.65 * uSyn) * (0.75 + 0.25 * sin(uT * 3.2 + aExtra));
                if (kind == 4) alpha = 0.6 + 0.4 * uSyn;
                size = aSize * uFocal / s.z;
                a = alpha * uAppear * smoothstep(0.4, 4.0, s.z);
                float m = 1.6 * uK;
                if (size < m) { a *= size / m; size = m; }
                float cap = 26.0 * uK;
                if (size > cap) { a *= pow(cap / size, 1.6); size = min(size, 140.0 * uK); }
            }
            gl_Position = clipFrom(s);
            gl_PointSize = min(size, uMaxPoint);
            vColor = col; vAlpha = min(a, 1.0);
            vSoft = (kind == 1 || kind == 3) ? 1 : 0;
        }`;

    // Mismo perfil radial que los sprites del vídeo: núcleo nítido o halo suave
    const POINTS_FS = `#version 300 es
        precision highp float;
        in vec3 vColor; in float vAlpha; flat in int vSoft;
        out vec4 o;
        void main() {
            float r = length(gl_PointCoord - 0.5) * 2.0;
            if (r > 1.0) discard;
            vec3 c = vColor, rgb = c; float al;
            if (vSoft == 1) {
                al = r < 0.5 ? mix(0.55, 0.16, r / 0.5) : mix(0.16, 0.0, (r - 0.5) / 0.5);
            } else if (r < 0.18) {
                rgb = mix(c + (1.0 - c) * 0.65, c, r / 0.18); al = mix(1.0, 0.95, r / 0.18);
            } else if (r < 0.42) {
                al = mix(0.95, 0.25, (r - 0.18) / 0.24);
            } else {
                al = mix(0.25, 0.0, (r - 0.42) / 0.58);
            }
            o = vec4(rgb * al * vAlpha, 1.0);
        }`;

    // Sinapsis: una tira por enlace, con borde suavizado
    const LINKS_VS = `#version 300 es
        precision highp float;
        ${CAMERA_GLSL}
        uniform float uK, uSyn;
        in vec2 aCorner; in vec3 aA; in vec3 aB; in vec3 aColor;
        out vec3 vColor; out float vAlpha; out float vAcross; out float vHalf;
        void main() {
            vec3 sa = toScreen(rotY(aA, uSpin)), sb = toScreen(rotY(aB, uSpin));
            float fade = smoothstep(1.5, 12.0, min(sa.z, sb.z));
            vec2 d = sb.xy - sa.xy; float len = length(d);
            if (sa.z < 0.03 || sb.z < 0.03 || fade <= 0.0 || len > 900.0 * uK || uSyn <= 0.001) { gl_Position = CULLED; return; }
            vec2 n = len > 0.0001 ? vec2(-d.y, d.x) / len : vec2(0.0, 1.0);
            float w = max(1.0, 1.3 * uK) * 0.5;
            float h = w + 1.0;
            vec3 s = mix(sa, sb, aCorner.x);
            gl_Position = clipFrom(vec3(s.xy + n * h * aCorner.y, s.z));
            vColor = aColor; vAlpha = 0.42 * uSyn * fade; vAcross = aCorner.y * h; vHalf = w;
        }`;
    const LINKS_FS = `#version 300 es
        precision highp float;
        in vec3 vColor; in float vAlpha; in float vAcross; in float vHalf;
        out vec4 o;
        void main() { o = vec4(vColor * vAlpha * clamp(vHalf + 0.5 - abs(vAcross), 0.0, 1.0), 1.0); }`;

    // Geometría ya proyectada en CPU (pirámide, aristas, capas a pantalla completa)
    const FLAT_VS = `#version 300 es
        in vec4 aClip; in vec4 aColor; out vec4 vColor;
        void main() { gl_Position = aClip; vColor = aColor; }`;
    const FLAT_FS = `#version 300 es
        precision highp float;
        in vec4 vColor; out vec4 o;
        void main() { o = vColor; }`;

    const FULL_VS = `#version 300 es
        out vec2 vUv;
        void main() {
            vec2 p = vec2(gl_VertexID == 1 ? 3.0 : -1.0, gl_VertexID == 2 ? 3.0 : -1.0);
            vUv = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0);
        }`;
    // Resplandor de la pirámide: es la fuente de luz de la galaxia
    const HALO_FS = `#version 300 es
        precision highp float;
        uniform vec2 uCenter; uniform float uRadius, uAppear;
        out vec4 o;
        void main() {
            float r = distance(gl_FragCoord.xy, uCenter) / uRadius;
            vec4 c;
            if (r < 0.12) c = mix(vec4(1.0, 0.980, 0.949, 0.9), vec4(1.0, 0.941, 0.871, 0.38), r / 0.12);
            else if (r < 0.45) c = mix(vec4(1.0, 0.941, 0.871, 0.38), vec4(0.616, 0.498, 0.957, 0.04), (r - 0.12) / 0.33);
            else c = mix(vec4(0.616, 0.498, 0.957, 0.04), vec4(0.471, 0.314, 0.784, 0.0), clamp((r - 0.45) / 0.55, 0.0, 1.0));
            o = vec4(c.rgb * c.a * uAppear, 1.0);
        }`;
    const DOWN_FS = `#version 300 es
        precision highp float;
        uniform sampler2D uTex; uniform vec2 uTexel; in vec2 vUv; out vec4 o;
        void main() {
            o = 0.25 * (texture(uTex, vUv + uTexel * vec2(-1.0, -1.0)) + texture(uTex, vUv + uTexel * vec2(1.0, -1.0))
                      + texture(uTex, vUv + uTexel * vec2(-1.0, 1.0)) + texture(uTex, vUv + uTexel * vec2(1.0, 1.0)));
        }`;
    const BLUR_FS = `#version 300 es
        precision highp float;
        uniform sampler2D uTex; uniform vec2 uStep; uniform float uSigma; in vec2 vUv; out vec4 o;
        void main() {
            vec3 acc = vec3(0.0); float sum = 0.0;
            for (int i = -16; i <= 16; i++) {
                float x = float(i) * uSigma * 3.0 / 16.0;
                float w = exp(-x * x / (2.0 * uSigma * uSigma));
                acc += texture(uTex, vUv + uStep * x).rgb * w; sum += w;
            }
            o = vec4(acc / sum, 1.0);
        }`;
    const COMPOSITE_FS = `#version 300 es
        precision highp float;
        uniform sampler2D uScene, uBloom; uniform vec3 uBg; in vec2 vUv; out vec4 o;
        void main() { o = vec4(clamp(texture(uScene, vUv).rgb + 0.5 * texture(uBloom, vUv).rgb + uBg, 0.0, 1.0), 1.0); }`;

    function program(vs, fs) {
        const make = (type, src) => {
            const sh = gl.createShader(type);
            gl.shaderSource(sh, src); gl.compileShader(sh);
            if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
            return sh;
        };
        const p = gl.createProgram();
        gl.attachShader(p, make(gl.VERTEX_SHADER, vs));
        gl.attachShader(p, make(gl.FRAGMENT_SHADER, fs));
        gl.linkProgram(p);
        if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
        const u = {};
        for (let i = 0, n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS); i < n; i++) {
            const name = gl.getActiveUniform(p, i).name;
            u[name] = gl.getUniformLocation(p, name);
        }
        return { p, u, a: name => gl.getAttribLocation(p, name) };
    }

    let progs;
    try {
        progs = {
            points: program(POINTS_VS, POINTS_FS),
            links: program(LINKS_VS, LINKS_FS),
            flat: program(FLAT_VS, FLAT_FS),
            halo: program(FULL_VS, HALO_FS),
            down: program(FULL_VS, DOWN_FS),
            blur: program(FULL_VS, BLUR_FS),
            composite: program(FULL_VS, COMPOSITE_FS),
        };
    } catch (error) {
        return null;
    }

    // ---------- geometría estática ----------
    const col = c => S.COLORS[c].map(v => v / 255);
    const pts = [];
    const push = (x, y, z, c, size, alpha, kind, extra) => pts.push(x, y, z, c[0], c[1], c[2], size, alpha, kind, extra);
    for (const s of S.STARS) push(s.x, s.y, s.z, col(s.c), 0, s.a, 2, 0);
    for (const p of S.P) push(p.x, p.y, p.z, col(p.c), p.s, p.a, p.soft ? 1 : 0, 0);
    for (const e of S.EMIT) push(e.th, e.ph, e.sp, col(e.c), e.s, 1, 5, e.y);
    for (const n of S.N) {
        push(n.x, n.y, n.z, col(n.c), n.s * 2.2, 1, 3, n.ph);
        push(n.x, n.y, n.z, col(n.c), n.s, 1, 4, 0);
    }
    const pointCount = pts.length / 10;

    const pointsVAO = gl.createVertexArray();
    gl.bindVertexArray(pointsVAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pts), gl.STATIC_DRAW);
    [['aPos', 3, 0], ['aColor', 3, 3], ['aSize', 1, 6], ['aAlpha', 1, 7], ['aKind', 1, 8], ['aExtra', 1, 9]].forEach(([name, size, offset]) => {
        const loc = progs.points.a(name);
        if (loc < 0) return;
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 40, offset * 4);
    });

    const linkData = [];
    for (const [i, j] of S.LINKS) {
        const a = S.N[i], b = S.N[j], c = S.PALETTE[a.c].map(v => v / 255);
        linkData.push(a.x, a.y, a.z, b.x, b.y, b.z, c[0], c[1], c[2]);
    }
    const linksVAO = gl.createVertexArray();
    gl.bindVertexArray(linksVAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, -1, 0, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    let loc = progs.links.a('aCorner');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(linkData), gl.STATIC_DRAW);
    [['aA', 0], ['aB', 3], ['aColor', 6]].forEach(([name, offset]) => {
        const l = progs.links.a(name);
        gl.enableVertexAttribArray(l);
        gl.vertexAttribPointer(l, 3, gl.FLOAT, false, 36, offset * 4);
        gl.vertexAttribDivisor(l, 1);
    });

    const flatVAO = gl.createVertexArray();
    const flatBuffer = gl.createBuffer();
    gl.bindVertexArray(flatVAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, flatBuffer);
    loc = progs.flat.a('aClip');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 4, gl.FLOAT, false, 32, 0);
    loc = progs.flat.a('aColor');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 4, gl.FLOAT, false, 32, 16);
    const emptyVAO = gl.createVertexArray();
    gl.bindVertexArray(null);

    // ---------- búferes intermedios ----------
    let W = 0, H = 0, F = 1150, K = 1, cssW = 0, cssH = 0;
    let sceneFB, sceneTex, sceneDepth, bloomFB = [], bloomTex = [];
    const texture = (w, h) => {
        const t = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, t);
        gl.texImage2D(gl.TEXTURE_2D, 0, floatTargets ? gl.RGBA16F : gl.RGBA8, w, h, 0, gl.RGBA, floatTargets ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        return t;
    };
    const framebuffer = (tex, depth) => {
        const fb = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
        if (depth) gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depth);
        return fb;
    };
    const freeTargets = () => {
        [sceneFB, ...bloomFB].forEach(fb => fb && gl.deleteFramebuffer(fb));
        [sceneTex, ...bloomTex].forEach(t => t && gl.deleteTexture(t));
        if (sceneDepth) gl.deleteRenderbuffer(sceneDepth);
        bloomFB = []; bloomTex = [];
    };

    function resize() {
        const rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return false;
        const dpr = Math.min(window.devicePixelRatio || 1, coarse ? 1.5 : 2);
        cssW = rect.width; cssH = rect.height;
        const w = Math.round(cssW * dpr), h = Math.round(cssH * dpr);
        // Encuadre equivalente al del vídeo recortado a pantalla completa (object-fit: cover)
        const landscape = cssW >= cssH;
        const ref = landscape ? [1920, 1080, 1150] : [720, 1280, 1150 * Math.sqrt(720 * 1280 / (1920 * 1080))];
        F = ref[2] * Math.max(cssW / ref[0], cssH / ref[1]) * dpr;
        K = F / 1150;
        if (w === W && h === H) return true;
        W = w; H = h;
        canvas.width = W; canvas.height = H;
        freeTargets();
        sceneTex = texture(W, H);
        sceneDepth = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, sceneDepth);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT24, W, H);
        sceneFB = framebuffer(sceneTex, sceneDepth);
        const bw = Math.max(1, Math.round(W / 4)), bh = Math.max(1, Math.round(H / 4));
        for (let i = 0; i < 2; i++) { bloomTex[i] = texture(bw, bh); bloomFB[i] = framebuffer(bloomTex[i]); }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        return true;
    }

    // ---------- proyección en CPU para la pirámide ----------
    let cam;
    const project = (x, y, z, rot) => {
        const cs = Math.cos(rot), ss = Math.sin(rot);
        const gx = x * cs - z * ss - cam.C[0], gy = y - cam.C[1], gz = x * ss + z * cs - cam.C[2];
        const d = gx * cam.f[0] + gy * cam.f[1] + gz * cam.f[2];
        if (d < 0.03) return null;
        return {
            x: (gx * cam.R[0] + gy * cam.R[1] + gz * cam.R[2]) * F / d,
            y: (gx * cam.U[0] + gy * cam.U[1] + gz * cam.U[2]) * F / d,
            z: d,
        };
    };
    const clip = p => {
        const zn = (FAR + NEAR) / (FAR - NEAR) - 2 * FAR * NEAR / ((FAR - NEAR) * p.z);
        return [p.x / (W / 2) * p.z, p.y / (H / 2) * p.z, zn * p.z, p.z];
    };
    const flat2D = (x, y) => [x / (W / 2), y / (H / 2), 0, 1];

    const drawFlat = (data, mode = gl.TRIANGLES) => {
        if (!data.length) return;
        gl.useProgram(progs.flat.p);
        gl.bindVertexArray(flatVAO);
        gl.bindBuffer(gl.ARRAY_BUFFER, flatBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.DYNAMIC_DRAW);
        gl.drawArrays(mode, 0, data.length / 8);
    };
    // Triángulos de las caras; color por vértice: el vértice superior más luminoso
    const faceTriangles = (faces, colorOf) => {
        const out = [];
        for (const fc of faces) {
            const v = fc.pts.map(clip);
            const tri = fc.pts.length === 3 ? [[0, 1, 2]] : [[0, 1, 2], [0, 2, 3]];
            for (const t of tri) for (const i of t) out.push(...v[i], ...colorOf(fc, i));
        }
        return out;
    };
    const edgeQuads = (faces, width, rgba) => {
        const out = [];
        for (const fc of faces) {
            const p = fc.pts;
            for (let i = 0; i < p.length; i++) {
                const a = p[i], b = p[(i + 1) % p.length];
                const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
                const nx = -dy / len * width / 2, ny = dx / len * width / 2;
                const q = [[a.x + nx, a.y + ny], [a.x - nx, a.y - ny], [b.x + nx, b.y + ny], [b.x - nx, b.y - ny]];
                for (const k of [0, 1, 2, 2, 1, 3]) out.push(...flat2D(q[k][0], q[k][1]), ...rgba);
            }
        }
        return out;
    };

    const setCamera = (prog, t, tm) => {
        const u = prog.u;
        gl.uniform3fv(u.uC, cam.C); gl.uniform3fv(u.uF, cam.f); gl.uniform3fv(u.uR, cam.R); gl.uniform3fv(u.uU, cam.U);
        gl.uniform2f(u.uRes, W, H);
        gl.uniform1f(u.uFocal, F); gl.uniform1f(u.uSpin, cam.spin);
        if (u.uT) gl.uniform1f(u.uT, t);
        if (u.uK) gl.uniform1f(u.uK, K);
        if (u.uAppear) gl.uniform1f(u.uAppear, tm.appear);
        if (u.uSyn) gl.uniform1f(u.uSyn, tm.synapse);
        if (u.uMaxPoint) gl.uniform1f(u.uMaxPoint, maxPoint);
    };
    const drawPoints = (t, tm) => {
        gl.useProgram(progs.points.p);
        setCamera(progs.points, t, tm);
        gl.bindVertexArray(pointsVAO);
        gl.drawArrays(gl.POINTS, 0, pointCount);
    };
    const fullscreen = prog => {
        gl.useProgram(prog.p);
        gl.bindVertexArray(emptyVAO);
        return prog.u;
    };

    function render(t) {
        if (gl.isContextLost() || (!W && !resize())) return;
        cam = S.camera(t);
        const tm = S.timing(t);
        const faces = S.pyramidFaces(cam, t, project);
        const appear = tm.appear;

        // 1. Escena en el búfer flotante
        gl.bindFramebuffer(gl.FRAMEBUFFER, sceneFB);
        gl.viewport(0, 0, W, H);
        gl.clearColor(0, 0, 0, 1);
        gl.depthMask(true);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.disable(gl.STENCIL_TEST);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.disable(gl.BLEND);
        gl.colorMask(false, false, false, false);
        drawFlat(faceTriangles(faces, () => [0, 0, 0, 1])); // sólo profundidad: oculta lo que hay detrás
        gl.colorMask(true, true, true, true);
        gl.depthMask(false);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE);
        if (tm.synapse > 0.001) {
            gl.useProgram(progs.links.p);
            setCamera(progs.links, t, tm);
            gl.bindVertexArray(linksVAO);
            gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, S.LINKS.length);
        }
        drawPoints(t, tm);
        gl.disable(gl.DEPTH_TEST);
        const pc = project(...S.PYR_CENTER, cam.yaw);
        if (pc) {
            const u = fullscreen(progs.halo);
            gl.uniform2f(u.uCenter, W / 2 + pc.x, H / 2 + pc.y);
            gl.uniform1f(u.uRadius, Math.min(1800 * K, 18 * F / pc.z));
            gl.uniform1f(u.uAppear, appear);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        }
        // silueta luminosa de la pirámide, para que irradie en el bloom
        drawFlat(faceTriangles(faces, () => [1 * appear, 0.965 * appear, 0.925 * appear, 1]));

        // 2. Bloom a 1/4 de resolución
        gl.disable(gl.BLEND);
        const bw = Math.max(1, Math.round(W / 4)), bh = Math.max(1, Math.round(H / 4));
        gl.viewport(0, 0, bw, bh);
        gl.bindFramebuffer(gl.FRAMEBUFFER, bloomFB[0]);
        let u = fullscreen(progs.down);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, sceneTex);
        gl.uniform1i(u.uTex, 0);
        gl.uniform2f(u.uTexel, 1 / W, 1 / H);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        u = fullscreen(progs.blur);
        gl.uniform1i(u.uTex, 0);
        gl.uniform1f(u.uSigma, Math.max(1, 7 * K));
        gl.bindFramebuffer(gl.FRAMEBUFFER, bloomFB[1]);
        gl.bindTexture(gl.TEXTURE_2D, bloomTex[0]);
        gl.uniform2f(u.uStep, 1 / bw, 0);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        gl.bindFramebuffer(gl.FRAMEBUFFER, bloomFB[0]);
        gl.bindTexture(gl.TEXTURE_2D, bloomTex[1]);
        gl.uniform2f(u.uStep, 0, 1 / bh);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        // 3. Composición en pantalla
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, W, H);
        gl.depthMask(true);
        gl.stencilMask(0xff);
        gl.clearStencil(0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
        u = fullscreen(progs.composite);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, sceneTex);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, bloomTex[0]);
        gl.uniform1i(u.uScene, 0);
        gl.uniform1i(u.uBloom, 1);
        gl.uniform3f(u.uBg, S.BG[0] / 255, S.BG[1] / 255, S.BG[2] / 255);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        gl.activeTexture(gl.TEXTURE0);

        if (faces.length) {
            // 4. Pirámide opaca: marca el stencil y escribe su profundidad
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.ALWAYS);
            gl.enable(gl.STENCIL_TEST);
            gl.stencilFunc(gl.ALWAYS, 1, 0xff);
            gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
            drawFlat(faceTriangles(faces, (fc, i) => {
                const c = fc.pts.length === 3 && i === 0 ? fc.top : fc.col;
                return [c[0] / 255, c[1] / 255, c[2] / 255, appear];
            }));
            // aristas de luz
            gl.disable(gl.DEPTH_TEST);
            gl.disable(gl.STENCIL_TEST);
            if (tm.edges > 0.001 && pc) {
                const width = Math.max(1, Math.min(4 * K, 0.035 * F / pc.z));
                drawFlat(edgeQuads(faces, width, [1, 1, 1, appear * tm.edges]));
            }
            // partículas que pasan por delante de la pirámide
            gl.enable(gl.STENCIL_TEST);
            gl.stencilFunc(gl.EQUAL, 1, 0xff);
            gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LESS);
            gl.depthMask(false);
            gl.blendFunc(gl.ONE, gl.ONE);
            drawPoints(t, tm);
            gl.disable(gl.STENCIL_TEST);
            gl.disable(gl.DEPTH_TEST);
        }

        // 5. Se asienta en el #fafafa exacto de la siguiente sección
        if (tm.settle > 0) {
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            const e = S.END.map(v => v / 255);
            const q = [[-1, -1], [1, -1], [-1, 1], [-1, 1], [1, -1], [1, 1]];
            drawFlat(q.flatMap(([x, y]) => [x, y, 0, 1, e[0], e[1], e[2], tm.settle]));
        }
        gl.disable(gl.BLEND);
    }

    const lost = event => { event.preventDefault(); if (onLost) onLost(); };
    canvas.addEventListener('webglcontextlost', lost);

    resize();
    return {
        render,
        resize,
        destroy() {
            canvas.removeEventListener('webglcontextlost', lost);
            freeTargets();
            const ext = gl.getExtension('WEBGL_lose_context');
            if (ext) ext.loseContext();
        },
    };
};
