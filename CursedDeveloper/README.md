# Animated Portfolio (Next.js)

A lightweight, animated developer portfolio built with Next.js and React. This project demonstrates a collection of custom animated components and UI effects (cursor, curved text, gooey animations, parallax, etc.) to showcase projects and personal information.

**Live Demo:** Not included in this repo — you can run locally following the instructions below.

**Built With:** Next.js, React, SCSS, styled-components, react-spring, AOS, other UI/animation helpers.

**Highlights:**
- **Custom animated cursor & UI elements**: Interactive cursor and hover previews.
- **Parallax & spring animations**: Smooth movement and transitions.
- **Modular components**: Clean separation under `components/` and `views/`.
- **PWA support**: Basic service worker / manifest present under `public/`.

## Repository Structure

- `components/` — Reusable UI components and SVG icons.
- `views/` — Page-like views (MySelf, Projects, Works, Certifications, Contact, etc.).
- `pages/` — Next.js pages (`_app.js`, `_document.js`, `index.js`, API routes).
- `styles/` — SCSS stylesheets for components and views.
- `public/` — Static assets, PWA manifest, service worker.
- `utils/` — Helper data and methods used across the app.

## Prerequisites

- Node.js (recommended LTS)
- pnpm (project uses `pnpm`; you can use `npm` or `yarn` but commands below use `pnpm`)

## Quick Start

Install dependencies:

```bash
pnpm install
```

Run in development mode:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
pnpm start
```

Linting:

```bash
pnpm lint
```

These scripts are defined in `package.json` as `dev`, `build`, `start`, and `lint`.

## Notes & Tips

- Styles are authored in SCSS under `styles/`. Import or modify the files to change layout and theme.
- Most animated components live in `components/` and are composed into pages under `views/`.
- The project includes `next-pwa` and a minimal service worker in `public/`.

## Contributing

- Feel free to open issues or create pull requests to improve animations, accessibility, or performance.

## License

No license specified. Add a `LICENSE` file if you want to define one.

---

If you'd like, I can also:
- Run the dev server locally and verify the app starts.
- Add a short CONTRIBUTING section or examples showing how to add new animated components.

