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
    └── photos/
        ├── team.webp              # Group photo of Ubora staff
        ├── cleaning.webp          # Floor polishing in a marble lobby
        ├── cleaning-vacuum.webp   # Vacuuming an executive office
        ├── fumigation.webp        # Technician in PPE treating a drain
        ├── waste.webp             # Branded waste-handling truck
        └── landscaping.svg        # Brand-styled illustration
```

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
