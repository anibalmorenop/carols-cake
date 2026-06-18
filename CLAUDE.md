# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Los Dulcitos de Caro** — landing page de una pastelería casera venezolana por encargo. Sitio de una sola página (single-page) construido con Next.js 15 y React 19, sin backend ni base de datos.

## Commands

```bash
npm run dev    # inicia el servidor de desarrollo en localhost:3000
npm run build  # compila para producción
npm run start  # sirve el build de producción
```

No hay linter, formatter ni tests configurados actualmente.

## Architecture

El sitio es una sola ruta (`/`) compuesta por secciones apiladas verticalmente. La página principal está en `src/app/page.jsx` y monta los componentes en este orden:

```
Header → Hero → PromiseBand → Products → Orders → Contact → Footer
```

**Datos centralizados:** Todo el contenido de productos y los URLs externos (WhatsApp, Instagram) viven en `src/data/products.js`. Al agregar o modificar productos, ese es el único archivo a tocar — los componentes `Products`, `Hero`, `Orders` y `Contact` consumen ese módulo.

**Estilos:** Un solo archivo global, `src/app/globals.css`, contiene todo el CSS (reset, variables, componentes). Las variables de marca (`--caro-*`) están definidas ahí y también duplicadas en `brand/brand-tokens.css` (fuente de referencia de diseño). No se usa CSS Modules ni Tailwind.

**Alias de rutas:** `@/` apunta a `src/` (definido en `jsconfig.json`).

**Imágenes:** Las imágenes de productos están en `public/img/publicaciones/` con la convención de nombre `[nombre-producto]-los-dulcitos-de-caro.png`. El logo está en `public/img/logo/`. Se usa el componente `<Image>` de Next.js en todos los casos.

**Iconos:** SVG inline definidos como componentes React en `src/components/Icons/Icons.jsx`.
