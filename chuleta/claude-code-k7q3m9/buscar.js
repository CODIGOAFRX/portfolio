(function () {
  var q = document.getElementById('q');
  var empty = document.getElementById('empty');
  var sections = Array.prototype.slice.call(document.querySelectorAll('[data-s]'));
  var norm = function (s) { return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); };

  q.addEventListener('input', function () {
    var term = norm(q.value.trim());
    var any = false;
    sections.forEach(function (sec) {
      var rows = sec.querySelectorAll('.row, ol.flow li, .md-card');
      var shown = 0;
      rows.forEach(function (r) {
        var hit = !term || norm(r.textContent).indexOf(term) !== -1;
        r.hidden = !hit;
        if (hit) shown++;
      });
      sec.querySelectorAll('.list').forEach(function (l) {
        var vis = l.querySelectorAll('.row:not([hidden])').length;
        l.hidden = term && vis === 0;
        var h = l.previousElementSibling;
        if (h && h.tagName === 'H3') h.hidden = l.hidden;
        var first = l.querySelector('.row:not([hidden])');
        l.querySelectorAll('.row').forEach(function (r) { r.style.borderTopWidth = r === first ? '0' : ''; });
      });
      sec.querySelectorAll('.md-stack').forEach(function (stack) {
        var vis = stack.querySelectorAll('.md-card:not([hidden])').length;
        stack.hidden = term && vis === 0;
        var h = stack.previousElementSibling;
        if (h && h.tagName === 'H3') h.hidden = stack.hidden;
      });
      sec.querySelectorAll('ol.flow').forEach(function (flow) {
        var vis = flow.querySelectorAll('li:not([hidden])').length;
        flow.hidden = term && vis === 0;
        var h = flow.previousElementSibling;
        if (h && h.tagName === 'H3') h.hidden = flow.hidden;
      });
      sec.querySelectorAll('.cmdbox').forEach(function (box) {
        box.hidden = !!term;
        var h = box.previousElementSibling;
        if (h && h.tagName === 'H3') h.hidden = !!term;
      });
      sec.querySelectorAll('.note').forEach(function (el) { el.hidden = !!term; });
      sec.hidden = term && shown === 0;
      if (!sec.hidden) any = true;
    });
    empty.hidden = any;
  });

  document.querySelectorAll('[data-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.getAttribute('aria-controls'));
      if (!target) return;
      var open = target.hidden;
      target.hidden = !open;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Ocultar' : 'Ver .md';
    });
  });

  var copyText = function (text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(ta);
      }
    });
  };

  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var timer = null;
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.getAttribute('data-copy'));
      if (!target) return;
      copyText(target.textContent).then(function () {
        btn.textContent = 'Copiado';
        btn.setAttribute('data-copied', '1');
        clearTimeout(timer);
        timer = setTimeout(function () {
          btn.textContent = 'Copiar';
          btn.removeAttribute('data-copied');
        }, 1800);
      }).catch(function () {
        btn.textContent = 'Error';
        clearTimeout(timer);
        timer = setTimeout(function () { btn.textContent = 'Copiar'; }, 1800);
      });
    });
  });
})();
