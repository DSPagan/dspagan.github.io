(function () {
  'use strict';

  // English is the source text in index.html and is captured on load,
  // so only the Spanish strings live here.
  var ES = {
    'date': 'Noviembre de 2026',
    'h.abstract': 'Resumen',
    'ua': 'Universidad de Alicante',
    'abstract': 'Graduado en Matemáticas por la Universidad de Alicante (UA), donde trabajo como Tecnólogo Superior en el grupo de investigación Transducens, dedicado al procesamiento del lenguaje natural y la traducción automática. Actualmente curso el Máster Universitario en Inteligencia Artificial de la Universidad Internacional de La Rioja (UNIR).',
    'links': 'Enlaces',
    'h.about': 'Sobre mí',
    'h.experience': 'Experiencia',
    'h.education': 'Formación',
    'h.publications': 'Publicaciones',
    'about.p1': 'Me acerco al aprendizaje automático y al aprendizaje profundo desde un punto de vista matemático, con el objetivo de comprender en profundidad cómo y por qué funcionan.',
    'about.p2': 'Mis intereses son la geometría diferencial, la optimización, el cálculo numérico y la lógica, y las herramientas que ofrecen para estudiar estos modelos.',
    'date.present': 'Actualidad',
    'exp.role': 'Tecnólogo Superior',
    'edu.master': 'Máster Universitario en Inteligencia Artificial',
    'edu.degree': 'Grado en Matemáticas',
    'pubs.empty': 'Todavía no hay publicaciones.',
    'meta.description': 'Matemático, estudiante de máster en Inteligencia Artificial y miembro de Transducens (Universidad de Alicante).'
  };

  var root = document.documentElement;
  var nodes = document.querySelectorAll('[data-i18n]');
  var metaDesc = document.querySelector('meta[name="description"]');
  var buttons = document.querySelectorAll('.lang button');

  var EN = { 'meta.description': metaDesc.content };
  nodes.forEach(function (el) { EN[el.dataset.i18n] = el.textContent; });
  var DICT = { en: EN, es: ES };

  function setLang(lang) {
    var d = DICT[lang] || EN;
    nodes.forEach(function (el) {
      var k = el.dataset.i18n;
      el.textContent = d[k] != null ? d[k] : EN[k];
    });
    metaDesc.content = d['meta.description'] || EN['meta.description'];
    root.lang = lang;
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
  }

  setLang(root.lang === 'es' ? 'es' : 'en');
  root.classList.remove('i18n-pending');

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.dataset.lang;
      if (lang === root.lang) return;
      setLang(lang);
      try { localStorage.setItem('lang', lang); } catch (e) {}
    });
  });
})();
