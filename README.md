# c-bedmarine

A modern, responsive React single‑page application built with Tailwind CSS.
Deployed on Netlify: **[https://cbedmarinesample.netlify.app/](https://cbedmarinesample.netlify.app/)**

---

## Table of contents

* [Features](#features)
* [Tech stack](#tech-stack)
* [Project structure](#project-structure)
* [Getting started](#getting-started)
* [Available scripts](#available-scripts)
* [Build & deploy](#build--deploy)
* [Roadmap / ideas](#roadmap--ideas)
* [Contributing](#contributing)
* [License](#license)

---

## Features

* ⚛️ React 18 SPA with client‑side routing
* 💨 Tailwind CSS utility‑first styling
* 🎞️ Animations on scroll (`aos`)
* ⌨️ Typed hero text effects (`react-typed`)
* 🧭 Iconography via `react-icons`
* 🖼️ Carousels/sliders with `react-slick` + `slick-carousel`
* ✅ Basic testing setup via React Testing Library
* 🚀 Production build ready for Netlify

> Live demo: **[https://cbedmarinesample.netlify.app/](https://cbedmarinesample.netlify.app/)**

---

## Tech stack

* **React** 18, **react-dom**
* **react-router-dom** (routing)
* **Tailwind CSS** (styling)
* **AOS**, **react-typed**, **react-icons**, **react-slick** / **slick-carousel**
* **Create React App** tooling (`react-scripts`)
* **Web Vitals** reporting

`package.json` (high level):

```json
{
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "aos": "^2.3.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0",
    "react-router-dom": "^6.22.3",
    "react-scripts": "5.0.1",
    "react-slick": "^0.30.3",
    "react-typed": "^2.0.12",
    "slick-carousel": "^1.8.1",
    "web-vitals": "^2.1.4"
  },
  "devDependencies": {
    "tailwindcss": "^3.2.7"
  }
}
```

---

## Project structure

```
react-tailwind/
├─ public/
│  ├─ index.html
│  └─ ...assets, manifest, icons
├─ src/
│  ├─ Assets/            # images & static assets
│  ├─ Components/        # reusable UI components
│  ├─ App.js             # app shell & routes
│  ├─ index.js           # React entry
│  ├─ index.css          # Tailwind & global styles
│  └─ reportWebVitals.js
├─ tailwind.config.js
├─ package.json
└─ README.md
```

---

## Getting started

### Prerequisites

* **Node.js** ≥ 16 and **npm** ≥ 8 (or **pnpm**/**yarn**)

### Installation

```bash
# clone
git clone https://github.com/<your-username>/c-bedmarine.git
cd c-bedmarine/react-tailwind

# install deps
npm install
```

### Run locally

```bash
npm start
```

App runs at **[http://localhost:3000](http://localhost:3000)**.

---

## Available scripts

```bash
npm start      # start dev server
npm test       # run tests (watch mode)
npm run build  # production build to /build
npm run eject  # CRA eject (irreversible)
```

---

## Build & deploy

### Build

```bash
npm run build
```

This creates an optimized production bundle in `build/`.

### Netlify

* Site is currently hosted at **[https://cbedmarinesample.netlify.app/](https://cbedmarinesample.netlify.app/)**
* Suggested Netlify settings:

  * **Build command**: `npm run build`
  * **Publish directory**: `react-tailwind/build`
  * **Environment** (optional): set `NODE_VERSION` to your local version for consistency.

> You can also use **drag‑and‑drop** deploys by uploading the `build/` folder to Netlify.

---

## Roadmap / ideas

* Add 404 route and loading states
* Split code with `React.lazy` & `Suspense`
* Configure ESLint + Prettier
* Lighthouse pass (PWA icons, meta tags, performance tweaks)
* Add CI (GitHub Actions) for build & deploy

---

## Contributing

Issues and PRs are welcome. Please open an issue to discuss major changes first.

---

## License

This project is open‑sourced under the **MIT License** (or update this section if you prefer a different license).

---

**Author:** ArafatSable · **Repo:** `c-bedmarine`
**Live:** [https://cbedmarinesample.netlify.app/](https://cbedmarinesample.netlify.app/)
