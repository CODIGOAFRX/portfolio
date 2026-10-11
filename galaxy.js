// Transición de la galaxia: el scroll hace de cabezal de reproducción.
// Con WebGL2 la galaxia se dibuja en vivo a la resolución real de la pantalla
// (galaxy-scene.js + galaxy-gl.js, cargados al acercarse). Sin WebGL2 se usa el vídeo
// pregrabado: se carga como Blob y se fija currentTime en cada frame (técnica de
// scroll-world). Con movimiento reducido queda la imagen fija del HTML.
// La animación termina en el #fafafa de la trayectoria: el escenario se suelta en blanco
// y la entrada de la trayectoria la gestiona scenes.js.
(() => {
    const section = document.getElementById('galaxia');
    if (!section) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return; // se queda la imagen fija

    const stage = section.querySelector('.galaxy-stage');
    const poster = section.querySelector('.galaxy-poster');
    const video = section.querySelector('.galaxy-video');
    const white = section.querySelector('.galaxy-white');
    const portrait = window.matchMedia('(max-aspect-ratio: 1/1)').matches;
    const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const videoSrc = portrait ? '/media/galaxia/galaxia-movil.mp4' : '/media/galaxia/galaxia-1080.mp4';
    const DURATION = 7;
    const LEAD = 0.55;        // empieza cuando el escenario asoma algo más de media pantalla
    const P_ANIM = 0.93;      // en este punto del recorrido la animación ya está en blanco
    const EPS = coarse ? 0.03 : 0.012;

    const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
    const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };

    section.classList.add('is-scrub');

    let mode = 'pending';     // 'gl' | 'video'
    let renderer = null;
    let canvas = null;
    let target = 0;           // progreso del scroll, 0..1
    let current = 0;          // progreso de la animación, suavizado
    let drawnAt = -1;
    let videoReady = false;
    let videoLoading = false;
    let started = false;
    let near = false;
    let frame = 0;

    const progress = () => {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        return clamp((vh * LEAD - rect.top) / (vh * LEAD + rect.height - stage.offsetHeight));
    };

    // Mientras no hay render ni vídeo, el póster hace una versión sencilla del viaje
    const fallback = p => {
        poster.style.opacity = String(smooth(0.02, 0.25, p));
        poster.style.transform = `scale(${(0.35 + Math.pow(p, 1.6) * 2.6).toFixed(3)})`;
        white.style.opacity = String(smooth(0.78, 0.92, p));
    };

    const loadScript = src => new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });

    const useVideo = () => {
        mode = 'video';
        if (renderer) { renderer.destroy(); renderer = null; }
        if (canvas) { canvas.remove(); canvas = null; }
        section.classList.remove('has-gl');
        if (videoLoading) return;
        videoLoading = true;
        fetch(videoSrc)
            .then(response => (response.ok ? response.blob() : Promise.reject(new Error(response.status))))
            .then(blob => {
                video.preload = 'auto';
                video.src = URL.createObjectURL(blob);
                video.addEventListener('loadedmetadata', () => { videoReady = true; seek(true); }, { once: true });
                // Se muestra sólo cuando ya ha pintado un frame (iOS deja en negro un vídeo
                // que nunca se ha reproducido).
                video.addEventListener('seeked', () => section.classList.add('has-video'), { once: true });
                video.addEventListener('loadeddata', () => {
                    try { video.pause(); } catch (e) {}
                    if (touched) prime();
                });
                video.load();
            })
            .catch(() => { videoLoading = false; });
    };

    const start = () => {
        if (started) return;
        started = true;
        const glScripts = window.WebGL2RenderingContext
            ? loadScript('/galaxy-scene.js?v=20261011-gl').then(() => loadScript('/galaxy-gl.js?v=20261011-gl'))
            : Promise.reject(new Error('sin WebGL2'));
        glScripts.then(() => {
            canvas = document.createElement('canvas');
            canvas.className = 'galaxy-canvas';
            canvas.setAttribute('aria-hidden', 'true');
            stage.insertBefore(canvas, white);
            renderer = window.createGalaxyRenderer(canvas, { onLost: useVideo });
            if (!renderer) throw new Error('sin WebGL2');
            mode = 'gl';
            section.classList.add('has-gl');
            drawnAt = -1;
            wake();
        }).catch(useVideo);
    };

    const seek = force => {
        if (!videoReady || video.seeking) return;
        const t = Math.min(current, 1) * (DURATION - 0.04);
        if (force || Math.abs(video.currentTime - t) > EPS) {
            try { video.currentTime = t; } catch (e) {}
        }
    };

    const tick = () => {
        frame = 0;
        target = progress();
        const anim = clamp(target / P_ANIM);
        current += (anim - current) * 0.2;
        if (Math.abs(anim - current) < 0.0005) current = anim;

        if (mode === 'gl') {
            if (Math.abs(current - drawnAt) > 0.00005) {
                renderer.render(current * DURATION);
                drawnAt = current;
            }
        } else if (mode === 'video' && videoReady) {
            seek(false);
        } else {
            fallback(anim);
        }


        if (near || Math.abs(anim - current) > 0.0005) frame = requestAnimationFrame(tick);
    };
    const wake = () => { if (!frame) frame = requestAnimationFrame(tick); };

    // Prepara el render con antelación y sólo anima mientras la sección está cerca
    new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) start();
    }, { rootMargin: '200% 0px' }).observe(section);
    new IntersectionObserver(([entry]) => {
        near = entry.isIntersecting;
        if (near) wake();
    }, { rootMargin: '20% 0px' }).observe(section);

    new ResizeObserver(() => {
        if (renderer && renderer.resize()) { drawnAt = -1; wake(); }
    }).observe(stage);

    // iOS necesita un gesto antes de decodificar un vídeo silenciado de forma fiable
    let touched = false;
    const prime = () => {
        touched = true;
        if (!video.src) return;
        const played = video.play();
        if (played && played.then) played.then(() => { video.pause(); seek(true); }).catch(() => {});
    };
    window.addEventListener('touchstart', prime, { once: true, passive: true });
    window.addEventListener('scroll', wake, { passive: true });
    window.addEventListener('resize', wake);
    fallback(0);
})();
