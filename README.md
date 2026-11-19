# dspagan.github.io

Portfolio personal publicado con GitHub Pages en <https://dspagan.github.io>.

Web estática sin dependencias ni proceso de build:

- `index.html`: contenido (texto en inglés como fuente).
- `script.js`: traducciones al español y cambio de idioma.
- `styles.css`: estilos de artículo LaTeX.
- `fonts/`: Latin Modern, servida desde el propio repositorio.

## Idioma

Se usa el idioma preferido del navegador (`navigator.languages`): español si aparece antes que el inglés y, si no, inglés. Si el visitante pulsa el selector English | Español, su elección se guarda en `localStorage`.

Para añadir o cambiar texto, marca el elemento en `index.html` con `data-i18n="clave"` y añade la traducción en el objeto `ES` de `script.js`.

## Probar en local

```sh
python3 -m http.server 8000
```
