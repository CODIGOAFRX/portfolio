(function () {
  var q = document.getElementById('q');
  var empty = document.getElementById('empty');
  var sections = Array.prototype.slice.call(document.querySelectorAll('[data-s]'));
  var norm = function (s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
  q.addEventListener('input', function () {
    var term = norm(q.value.trim());
    var any = false;
    sections.forEach(function (sec) {
      var rows = sec.querySelectorAll('.row, ol.flow li');
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
      sec.querySelectorAll('.cmdbox, .note').forEach(function (el) { el.hidden = !!term; });
      sec.hidden = term && shown === 0;
      if (!sec.hidden) any = true;
    });
    empty.hidden = any;
  });
})();
