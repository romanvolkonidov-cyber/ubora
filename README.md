# Ubora Services Limited — Website

A static, multi-page marketing website for Ubora Services Limited — a Kenyan integrated services company delivering cleaning, fumigation, waste management, landscaping and technical services since 2014.

## Structure

```
.
├── index.html        # Landing page
├── about.html        # About, vision, values, compliance
├── services.html     # Full services catalogue (Facility + Technical)
├── clients.html      # Client portfolio with industry filter
├── contact.html      # Two offices + enquiry form
├── css/
│   └── styles.css    # Design system + all page styles
├── js/
│   └── main.js       # Header, mobile menu, reveal, form, filter
└── images/
    ├── favicon.svg
    └── photos/            # Branded placeholders — swap for real photos
        ├── team.svg        # Ubora staff (used in home hero)
        ├── cleaning.svg
        ├── fumigation.svg
        ├── waste.svg
        └── landscaping.svg
```

## Photos

The files in `images/photos/` are tasteful branded **placeholders**. To use real
photography, drop your image into `images/photos/` and update the matching
`<img src="…">` (e.g. point `team.svg` → `team.jpg`). Recommended sizes:
- `team.*` — 800×600 (4:3), home hero
- service photos — 800×600 (4:3), used on `services.html`

## Design System

- **Primary**: `#0F766E` (teal) — cleanliness, environment, trust
- **Accent**: `#F59E0B` (amber) — excellence, warmth
- **Typography**: Plus Jakarta Sans (display) + Inter (body)
- **Layout**: 1200px container, fluid type via `clamp()`, mobile-first responsive

## Run Locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

No build step. No dependencies.
