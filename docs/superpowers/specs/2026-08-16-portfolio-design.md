# Interactive Media Portfolio — Design Specification

**Status:** Approved for implementation planning  
**Date:** August 16, 2026

## 1. Purpose and positioning

The website presents Jonas as an **Interactive Media Designer** seeking opportunities across creative technology, game and level design, 3D design, and interactive media. Its primary conversion goal is to encourage recruiters and hiring teams to explore the featured projects.

The experience must feel modern, minimal, visually strong, slightly experimental, and professional. It must remain brief, stylish, accessible, and easy to scan. It must not resemble a generic developer portfolio or rely on excessive animation.

## 2. Content hierarchy and site structure

The portfolio uses two levels of work:

1. Four featured projects receive dedicated case-study pages.
2. Supporting VR films, web design, and UI/UX work appear on one consolidated Archive page without individual project pages.

### Routes

- `/` — Home and selected work
- `/work/two-player-2d-game` — Featured case study 01
- `/work/car-commercial` — Featured case study 02
- `/work/vr-game` — Featured case study 03
- `/work/virtual-exhibition` — Featured case study 04
- `/archive` — Supporting VR film, web design, and UI/UX work
- `/about` — Profile, practice, capabilities, and résumé link
- `/resume` — Browser-readable résumé with a PDF download action
- `/contact` — Email and professional-profile links

Exact public slugs may be updated when final project titles are supplied, but the route pattern and hierarchy remain fixed.

### Featured order

1. Two-player 2D game
2. Car commercial
3. VR game
4. Virtual exhibition

## 3. Navigation

The persistent desktop navigation contains:

- Identity lockup: `Jonas / Interactive Media Designer`
- `Work`
- `Résumé`
- `About`
- `Contact`

`Work` returns to the homepage project sequence. Archive does not appear in the primary navigation; it is linked after the homepage featured sequence and in the global footer.

On small screens, navigation collapses into a conventional labeled menu button. It must support keyboard navigation, visible focus states, Escape-to-close behavior, and body-scroll locking while open. No navigation interaction may depend on hover or gesture discovery.

Every featured case study includes visible Previous and Next project links.

## 4. Homepage structure

The selected homepage direction is **Cinematic Sequence**, implemented with normal document scrolling rather than scroll hijacking.

### 4.1 Compact introduction

- Primary title: `Interactive Media Designer`
- One short positioning sentence describing a practice across games, virtual environments, and digital experiences
- A restrained `Selected work — scroll` cue
- No splash gate, loading sequence, or biography-heavy hero

### 4.2 Featured project sequence

Each project occupies a large visual panel. Every panel is a semantic link and includes:

- Project number
- Project title
- Category and year
- One-sentence description
- `View project` action

The sequence follows the approved featured order. Text must remain legible over every image through controlled overlays, image art direction, or a separate text region. Essential information must never be available only on hover.

### 4.3 Archive preview

A compact grid or horizontal strip previews selected VR film, web, and UI/UX items. It remains visually subordinate to the four featured projects and links clearly to `/archive`.

### 4.4 Short profile

Two or three sentences summarize Jonas's practice, followed by links to About and the résumé.

### 4.5 Contact close

A short invitation, email link, relevant professional profiles, and the global footer conclude the page.

## 5. Featured project page structure

Case studies are concise visual narratives rather than long UX reports.

### 5.1 Project opener

- Project title
- One-sentence description
- Hero image or short muted video loop

### 5.2 Essential facts

- Year
- Project type
- Jonas's role
- Team or collaborators
- Tools or platform

Fields with no meaningful value are omitted rather than displayed empty.

### 5.3 Brief overview

An 80–150 word passage explains what the project is, Jonas's contribution, and its central design idea. Avoid formulaic headings such as `The Problem` and `The Solution` unless a specific project genuinely requires them.

### 5.4 Visual sequence

- Three to five large images
- Optional short captions where context is necessary
- A mixture of full-width and paired-image layouts for rhythm
- Optional muted video, always with visible playback controls

### 5.5 Closing and onward navigation

One short paragraph communicates an outcome, reflection, or key learning. Previous and Next links lead through the featured sequence; the final project continues back to the first.

## 6. Archive page

The Archive uses a denser responsive thumbnail grid grouped or filterable by:

- VR films
- Web design
- UI/UX design

Selecting an item opens an accessible lightweight modal containing a larger image, title, year, category, and one-sentence description. The modal must trap focus, close via a visible button and Escape, restore focus to its trigger, and remain usable without pointer input. Archive items do not receive dedicated routes in the initial release.

## 7. Visual direction

The approved art direction is **Digital Stage**: a dark, spatial presentation influenced by exhibition graphics and moving-image titles rather than game interfaces or developer tooling.

### Principles

- Near-black canvas
- Bold typographic hierarchy
- Generous negative space
- Large project imagery
- Restrained luminous accents
- Subtle spatial depth
- Minimal interface chrome

Project imagery supplies most of the page-to-page color variation. Interface styling remains stable so the portfolio feels like one authored system.

## 8. Typography

### Primary family

- Preferred premium options if licensed: Söhne or Suisse International
- Approved open-source default: Instrument Sans

The primary family handles display text, headings, navigation, and body copy. Display titles may use uppercase, tight tracking, and large scale. Body text uses sentence case, comfortable line height, and restrained line length.

### Secondary family

IBM Plex Mono is used sparingly for project numbers, categories, years, and technical metadata. It must not dominate the interface or create a terminal aesthetic.

Hierarchy is achieved through scale, spacing, and a small number of weights rather than many decorative styles.

## 9. Color system

Initial interface tokens:

- Canvas: `#0B0C0F`
- Primary text: `#F2F2EC`
- Secondary text: a WCAG-compliant cool gray selected during implementation
- Borders: a dark graphite that remains visible against the canvas
- Accent: luminous mint `#8CFFD1`

Mint should occupy less than roughly 10% of the interface. It is reserved for links, project numbers, focus states, progress indicators, and small highlights. Focus colors and all text/background combinations must meet WCAG 2.2 AA contrast requirements.

Individual case studies may borrow one muted accent from their artwork while retaining the shared dark foundation.

## 10. Motion and interaction

Motion supports hierarchy and spatial continuity; it is never required to understand or operate the site.

- Page entry: short opacity and vertical-position transition for titles and metadata
- Project panels: subtle image scale or depth as panels enter the viewport
- Hover: coordinated response across project title, arrow, and accent line
- Navigation: restrained active-state transition
- Archive: quick thumbnail-to-modal transition
- Page changes: optional short fade or shared-media transition when it causes no delay
- Video: muted by default, never autoplays with sound, and exposes play/pause controls

### Motion constraints

- Use normal vertical scrolling; never hijack scrolling
- Avoid pinned project sequences as a default behavior
- Keep functional transitions approximately 150–300 ms
- Respect `prefers-reduced-motion`
- Do not delay navigation or initial content visibility
- Do not place essential content behind hover
- Ensure all interactive behavior works with keyboard and touch input

## 11. Responsive and usability behavior

The site is designed mobile-first and expands into cinematic desktop compositions.

- Reading order in the DOM must remain logical at every breakpoint
- Homepage panels become stacked media-and-text blocks on narrow screens
- Project metadata wraps into a compact grid without horizontal scrolling
- Touch targets meet accessible size expectations
- Text remains selectable and is not rendered into images
- Native browser scrolling, history, deep links, and back navigation remain intact
- Images reserve layout space to avoid cumulative layout shift
- Video receives a static poster and must not block meaningful content

## 12. Recommended technical architecture

### Core stack

- Astro
- TypeScript
- Astro content collections for structured work entries
- Astro's image pipeline for responsive image generation
- Component-scoped CSS and shared custom properties
- Minimal client-side JavaScript for menu, modal, and viewport behavior
- Native CSS transitions and Intersection Observer for most motion
- Motion Mini only where native browser features are insufficient
- Static deployment on Vercel

The initial release does not require React, a CMS, a database, Three.js, or server-side rendering.

### Content model

Featured and archive entries store:

- Slug
- Title
- Year
- Category
- Short description
- Role
- Collaborators, when relevant
- Tools or platform
- Hero media
- Gallery media and optional captions
- Featured order
- Featured or archive status
- Optional case-study accent

The résumé PDF is versioned with the site and exposed through both the Résumé page and a direct download action.

## 13. Performance, accessibility, and quality targets

- Prefer static HTML and progressive enhancement
- Optimize and size all images responsively
- Lazy-load below-the-fold media while prioritizing the initial project visual
- Avoid autoplaying multiple videos simultaneously
- Preserve semantic heading structure and landmark regions
- Provide descriptive alternative text or intentionally empty alt text for decorative media
- Meet WCAG 2.2 AA for contrast and core interactions
- Test keyboard-only navigation, reduced motion, touch input, and common viewport widths
- Target strong Core Web Vitals without sacrificing essential image quality

## 14. Out of scope for the initial release

- CMS integration
- User accounts or database
- WebGL or Three.js scenes
- Custom cursor
- Scroll hijacking
- Long-form process essays
- Dedicated pages for Archive items
- Complex filtering beyond the three established Archive categories
- Autoplay audio

## 15. Success criteria

The design succeeds when:

1. A recruiter understands `Interactive Media Designer` immediately.
2. The first featured project is visible or clearly discoverable without navigating through an intro experience.
3. Visitors can reach any featured case study in one action from the homepage.
4. The four featured projects visibly outrank supporting Archive work.
5. Each case study communicates the project and Jonas's contribution through 3–5 images and concise text.
6. The interface feels authored and experimental while remaining predictable to navigate.
7. The site remains fully usable with keyboard, touch, and reduced-motion preferences.
8. Media-heavy presentation does not compromise page responsiveness or navigation.
