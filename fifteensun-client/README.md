# FifteenSun — Vue 3 + Vuetify 3

Multipage "homebase" website for FifteenSun, built with Vue 3 and Vuetify 3.
Pages: Home, About, Photos, Stream (embedded Twitch), and Extra Life.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

If icons don't render, ensure the Material Design Icons stylesheet is loaded in `index.html`.

### Compile and Hot-Reload for Development

```sh
npm run dev
```

The Twitch embed requires a `parent` parameter. It's set automatically to your current hostname.
If deploying to a custom domain, the embed will work out-of-the-box.

### Compile and Minify for Production

```sh
npm run build
```

## Assets

- Place logos under `public/assets/logos`:
  - `fifteensun.png`, `extralife.png`, `twitch.png`
- Place photos under `public/assets/photos` and update `src/pages/Photos.vue` with your filenames.

## Theme

Vuetify theme uses the FifteenSun palette:
- Primary: `#0365F8`
- Secondary: `#FDAF03`
- Accent: `#F4CA82`
- Background: `#EEF0EF`
- Surface: `#FFFFFF`
