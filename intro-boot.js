// Se carga en <head> para preparar la intro antes del primer pintado (sin parpadeo).
// Si intro.js no llega a arrancar, la cabecera vuelve a su estado normal.
(function () {
    try {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        var root = document.documentElement;
        root.classList.add('has-intro');
        setTimeout(function () {
            if (!root.classList.contains('intro-ready')) root.classList.remove('has-intro');
        }, 4000);
    } catch (error) { /* sin intro */ }
})();
