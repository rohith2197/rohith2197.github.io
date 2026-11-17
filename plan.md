# Current implementation plan

## Product and visual direction

This is Rohith Pallamreddy’s personal portfolio, with resume-derived engineering details and five separate pages. Retain the current editorial New York night palette, the existing homepage art and About artwork. The new Projects and Experience banners should be two distinct original illustrations in the same painterly editorial style: a warm Manhattan roommate-apartment scene and a cozy neighborhood pub scene. Avoid characters, readable signs, logos, or copied brand marks.

Keep page copy short and specific. Remove the yellow dot before “Georgia Tech · Computer Science.” Replace the specific embedded/data/ML tagline with a simple description of Rohith as a Georgia Tech CS student who is enthusiastic and curious across many fields. Shift the About heading to “Haaaaave you met Rohith?” as a compact show reference without changing its existing artwork.

The About page keeps the existing Education and professional overview, expands the skill highlights with accurate resume-based items at readable chip sizes, and gains an “Off the clock” section containing the user-listed interests: How I Met Your Mother, Modern Family, The Hunger Games, Dune films, UFC, boxing, wrestling, BJJ, and F1.

The custom pointer remains a small yellow umbrella but its canopy must be fully visible. Increase its viewbox/inside inset and adjust the hotspot so it is not clipped. Preserve the spinning hero umbrella, reduced-motion rules, and native pointers on touch devices.

## Implementation

Keep React, TypeScript, Vite, and React Router with `/`, `/projects`, `/experience`, `/about`, and `/contact`. Projects retains filters/search and its existing work content. Replace the Projects header image and homepage Projects tile with the new apartment illustration. Replace the Experience header image and homepage Experience tile with the new pub illustration. About retains its existing blue-horn/yellow-umbrella artwork. Keep responsive layout, accessible controls, accurate route manifest and current static build setup. No backend, database, login, or public publishing is needed.

## Project structure

- `index.html`: document metadata and font loading.
- `public/manus-routes.json`: all five routes.
- `src/main.tsx`: app entry point.
- `src/App.tsx`: route map.
- `src/components/SiteLayout.tsx`: navigation, footer, jokes, and umbrella icon.
- `src/pages/`: home, projects, experience, about, and contact.
- `src/data/portfolio.ts`: resume-derived project and experience content.
- `src/styles.css`: responsive page layouts, illustration framing, cursor, motion, reduced-motion rules.
- `TODO.md`: outcome criteria and progress.
