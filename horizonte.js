// Pieza destacada «Horizonte»: el agujero negro de su web, en vivo dentro de la portada.
// No se copia nada: se importa el sombreador que sirve su Worker (/proyecto/horizonte/gl.js) y se
// usa su escena `descenso`, que integra un rayo de luz por píxel. El scroll acerca la cámara de
// 22 a unos 9 radios de Schwarzschild y las lecturas salen de la misma función.
// Sólo se carga al acercarse la sección y sólo pinta mientras está a la vista. La cámara no salta a
// donde está el scroll: lo persigue con un retardo corto, así cada golpe de rueda se convierte en un
// acercamiento continuo. Mientras se mueve se pinta a todos los fotogramas de la pantalla; cuando llega
// a su sitio bastan 30 por segundo para el giro del disco. Lleva menos pasos por rayo que en su web
// (a esta distancia no se nota) y la resolución se ajusta sola a lo que tarda la gráfica.
// Sin WebGL o si el módulo no llega, queda el fondo de reserva (.hz-sin-gl); con movimiento
// reducido, una imagen fija.
(() => {
    const seccion = document.getElementById('horizonte');
    const lienzo = seccion && seccion.querySelector('.horizonte-lienzo');
    if (!lienzo || !('IntersectionObserver' in window)) return;

    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const TRAMO = 0.21; // parte del descenso de la web que se recorre aquí
    const clamp = x => Math.min(1, Math.max(0, x));
    const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
    const salidas = {};
    seccion.querySelectorAll('[data-hz]').forEach(el => { salidas[el.dataset.hz] = el; });

    // Resolución según lo que tarda de verdad la gráfica (unos 7 ms por fotograma, para que quepa en
    // una pantalla de 60 Hz con margen); sin el anillo fino ni las estrellas, que ampliados salen punteados
    const LIGERO = { escala: 0.55, pasos: 110, orden: 2, estrellas: 0, presupuesto: 7, suelo: 0.42, techo: Math.min(window.devicePixelRatio || 1, 1.25) };
    const RETARDO = 0.16; // segundos que tarda la cámara en recorrer casi dos tercios de lo que le falta
    let escena = null, pedido = false, visible = false, frame = 0, ultimo = 0, reloj = 40, par = false, acumulado = 0, peor = 0;
    let camara = -1; // avance suavizado de la cámara, de 0 a 1; -1 hasta la primera medida
    if (!quieto) seccion.classList.add('hz-on');

    const pintar = ahora => {
        frame = 0;
        if (!visible || !escena) return;
        const paso = Math.min((ahora - ultimo) / 1000 || 0, 0.1);
        ultimo = ahora;
        acumulado += paso;
        peor = Math.max(peor, paso);
        const r = seccion.getBoundingClientRect();
        // Cerca pero aún fuera de pantalla: se espera sin gastar gráfica, con la cámara ya en su sitio
        const meta = quieto ? 0.5 : clamp(-r.top / Math.max(1, r.height - window.innerHeight));
        if (r.bottom < 0 || r.top > window.innerHeight) { camara = meta; acumulado = 0; peor = 0; if (!quieto) frame = requestAnimationFrame(pintar); return; }
        camara = camara < 0 || quieto ? meta : camara + (meta - camara) * (1 - Math.exp(-paso / RETARDO));
        const enMarcha = Math.abs(meta - camara) > 0.0004;
        if (!enMarcha) camara = meta;
        // Con la cámara quieta, uno de cada dos fotogramas: 30 por segundo bastan para el giro del disco
        par = !par;
        if (!enMarcha && par && !quieto) { frame = requestAnimationFrame(pintar); return; }
        const dt = acumulado, lento = peor;
        acumulado = 0;
        peor = 0;
        if (!quieto) reloj += dt;
        const s = camara;
        const w = Math.max(2, Math.round(lienzo.clientWidth * escena.escala));
        const h = Math.max(2, Math.round(lienzo.clientHeight * escena.escala));
        if (lienzo.width !== w || lienzo.height !== h) { lienzo.width = w; lienzo.height = h; }
        const v = escena.pintar(s * TRAMO, reloj, w, h, quieto ? 0 : lento) || {};
        for (const k in salidas) if (v[k] !== undefined && salidas[k].textContent !== v[k]) salidas[k].textContent = v[k];
        const fin = smooth(0.5, 0.72, s);
        seccion.style.setProperty('--hz-fin', fin.toFixed(3));
        seccion.classList.toggle('hz-fin', fin > 0.5);
        if (!quieto) frame = requestAnimationFrame(pintar);
    };
    const despertar = () => { if (!frame && visible && escena) frame = requestAnimationFrame(pintar); };

    const cargar = async () => {
        if (pedido) return;
        pedido = true;
        try {
            const modulo = await import('/proyecto/horizonte/gl.js');
            escena = modulo.descenso(lienzo, seccion, LIGERO);
            if (!escena) throw new Error('sin WebGL');
            seccion.classList.add('hz-vivo');
            despertar();
        } catch {
            seccion.classList.add('hz-sin-gl');
        }
    };

    new IntersectionObserver(entradas => {
        visible = entradas[0].isIntersecting;
        if (visible) { cargar(); despertar(); }
    }, { rootMargin: '60% 0px' }).observe(seccion);
    window.addEventListener('resize', despertar);
})();
