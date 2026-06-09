# Project: Wang Mobile Audit & Layout Optimization

## Architecture
- The application is a Next.js (App Router) project using Tailwind CSS v4.
- This phase focuses exclusively on making the UI mobile-first while preserving the desktop design.
- We must enforce single columns on mobile using Tailwind breakpoints (e.g., grids collapse below `md:` or `lg:`).
- Touch interactions need full width sizes and padding adjustments.
- Mobile menu requires a slide-up exit animation on item click.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Mobile Grids Collapse | `src/app/page.tsx`, `src/app/materiali/page.tsx`, `src/app/dispositivi/[slug]/page.tsx`, `src/app/dispositivi/page.tsx` | none | PLANNED |
| 2 | Navigation & Footer | `src/components/Navigation.tsx`, `src/components/Footer.tsx` | none | PLANNED |
| 3 | Product Configurator | `src/components/ProductConfigurator.tsx`, `src/components/ProductSizeSelector.tsx` | none | PLANNED |

## Interface Contracts
- Standard React component props remain unchanged; only Tailwind classes and styling logic are modified.
- Desktop layout must be strictly preserved through the use of breakpoints (`md:`, `lg:`, `xl:`).

## Code Layout
- `src/app/**/page.tsx`: Route entry points.
- `src/components/`: Core UI blocks.
