# Personal Website

This is the codebase for my personal website, deployed at [mattcadena.com](https://mattcadena.com). The site covers my work experience and projects.

## Overview

The site is built with Astro and TypeScript. Every page is static HTML generated at build time; the work history and project writeups live as markdown files in [`src/content`](src/content), validated by Astro content collection schemas. There are no client-side JavaScript interactions like the expandable project list use native HTML elements, and there's light/dark theming follows the visitor's system preference via CSS.

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # static build into out/
npm run preview  # serve production build
```

## Deployment

Pushes to `main` build the site and sync `out/` to S3 via GitHub Actions. The site is live at [mattcadena.com](https://mattcadena.com).
