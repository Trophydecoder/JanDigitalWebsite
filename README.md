# JANDIGITAL — Angular Website

Component-based Angular website for JANDIGITAL.

## Structure

```text
src/app/
├── components/
│   ├── global/
│   │   ├── navbar/
│   │   ├── footer/
│   │   └── contact/
│   └── home/
│       ├── home-hero/
│       ├── services-preview/
│       ├── client-showcase/
│       └── process/
├── pages/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── clients/
│   ├── how-we-work/
│   └── contact/
├── app.component.ts
└── app.routes.ts
```

## Run

```bash
npm i
npm start
```

Then open the local Angular URL shown by the CLI.

## Build

```bash
npm run build
```

## Notes

- Standalone Angular components.
- Page-based routing.
- Global Navbar, Footer and Contact CTA components.
- Supa Rain screenshots supplied in the conversation are included under `src/assets/images/`.
- The homepage hero and supporting website visuals are based on the approved JANDIGITAL dark blue/black digital-mall-inspired UI direction.
- Replace placeholder email/social details with the final JANDIGITAL contact details before launch.
