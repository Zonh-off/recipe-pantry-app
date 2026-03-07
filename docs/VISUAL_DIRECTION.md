# 📘 Visual Direction – Recipe Pantry App

This document defines the visual direction, UI principles, and design system guidance for the Recipe Pantry frontend.

The design should feel modern, clean, practical, and premium.
It may be inspired by Spotify-style discovery layouts, but it must be adapted for a food product and built **light theme first**.

---

# 1. Design Direction

## Core Style
The product should feel like:

- a modern food discovery app
- a practical utility app
- a clean SaaS-like dashboard
- visually rich, but not noisy

The interface should combine:

- strong content sections
- large recipe cards
- clear hierarchy
- generous spacing
- soft surfaces
- modern rounded UI

---

# 2. Light Theme First

The primary design target is **light theme**.

Rules:

- All components must be designed for light mode first
- Contrast and readability must be excellent on light backgrounds
- Dark mode may be added later, but must not drive visual decisions now
- Surfaces should be soft, not stark white everywhere
- Background layering should create depth without visual clutter

---

# 3. Color System

Use **Tailwind color tokens only**.
Do not invent custom HEX colors unless explicitly approved.

## Recommended Palette

### Backgrounds
- `bg-slate-50` — app background
- `bg-white` — primary surfaces
- `bg-slate-100` — secondary surfaces
- `bg-slate-200` — subtle separators / muted containers

### Text
- `text-slate-900` — primary text
- `text-slate-700` — secondary text
- `text-slate-500` — muted text

### Borders
- `border-slate-200`
- `border-slate-300`

### Primary Accent
Use green as the core product accent:

- `green-600`
- `green-500`
- `green-700`

Recommended usage:
- primary buttons
- active states
- positive actions
- CTA highlights

### Secondary Accent Options
For supporting UI sections and category coloring:
- `amber-500` / `amber-600`
- `orange-500`
- `rose-500`
- `sky-500`
- `violet-500`

These should be used sparingly for:
- category accents
- badges
- section highlights
- empty state illustrations

---

# 4. General UI Mood

The UI should feel:

- fresh
- bright
- appetizing
- calm
- modern
- structured

It must not feel:

- too corporate
- too playful
- too dark
- too crowded
- too minimal to the point of being empty

---

# 5. Layout Principles

## 5.1 Structure
Use a dashboard/discovery layout.

Recommended structure:

- top navigation or left sidebar
- prominent home/discover page
- section-based layout
- large content cards
- strong visual grouping

## 5.2 Spacing
Use generous spacing.

Rules:
- avoid cramped layouts
- use clear separation between sections
- cards should breathe
- section headings must stand apart from content

Preferred spacing feel:
- relaxed
- premium
- readable

## 5.3 Width
Main content should not become too stretched.

Recommended:
- centered content with max width
- grids for card-heavy pages
- readable line lengths for detail pages

## 5.4 Responsive Layout

The interface must be responsive and support:

- Desktop
- Tablet
- Mobile

Layouts must adapt progressively using Tailwind breakpoints.

Recommended breakpoints:

- `sm` mobile
- `md` tablet
- `lg` desktop
- `xl` wide screens

Prefer responsive grids rather than completely separate layouts.

Example:
`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`

Cards and content blocks must reflow naturally on smaller screens.

## 5.5 Mobile Navigation

Mobile devices must use a **bottom navigation bar** instead of sidebar navigation.

Mobile navigation items:

- Home
- Pantry
- Search
- Collections
- Profile

Rules:

- Navigation must remain fixed at the bottom
- Icons must be clearly visible
- Labels must remain readable
- Active tab must be highlighted

Example Tailwind structure:

`fixed bottom-0 w-full bg-white border-t border-slate-200`

Desktop continues to use the left sidebar navigation.

---

# 6. Component Philosophy

## 6.1 Cards
Cards are a primary UI primitive.

Recipe cards should:
- use rounded corners
- have subtle borders or soft shadows
- emphasize image first
- keep metadata readable and compact

Recommended classes:
- `rounded-2xl`
- `border border-slate-200`
- `bg-white`
- `shadow-sm`
- `hover:shadow-md`

Cards must feel tactile and pleasant, not flat and lifeless.

---

## 6.2 Buttons
Buttons should be clean and obvious.

### Primary buttons
Use:
- `bg-green-600`
- `hover:bg-green-700`
- `text-white`

### Secondary buttons
Use:
- `bg-white`
- `border border-slate-300`
- `text-slate-800`

### Ghost buttons
Use for low-priority actions only.

Buttons should feel modern, not overly rounded cartoon UI.

---

## 6.3 Inputs
Inputs must be:
- clean
- readable
- slightly soft
- consistent across forms

Recommended feel:
- white background
- subtle border
- clear focus ring
- comfortable padding

Use Tailwind focus states clearly, for example:
- `focus:ring-2`
- `focus:ring-green-500`
- `focus:border-green-500`

---

## 6.4 Chips / Badges
Use chips for:
- diet
- cuisine
- calories
- time
- missing ingredients
- category labels

They should be:
- compact
- softly tinted
- easily scannable

Use Tailwind tinted backgrounds like:
- `bg-green-100 text-green-700`
- `bg-amber-100 text-amber-700`
- `bg-sky-100 text-sky-700`
- `bg-rose-100 text-rose-700`

---

# 7. Page-Specific Visual Direction

## 7.1 Home / Discover
This should be the most visually rich page.

Structure:
- hero CTA for “Cook from pantry”
- personalized recommendations
- popular recipes
- categories
- quick collections access

Visual principles:
- section-based discovery
- large cards and carousels
- strong hierarchy
- warm and inviting feel

This page may be inspired by Spotify-style content sections, but in a lighter, cleaner, food-oriented way.

---

## 7.2 Pantry
Pantry is more utility-focused.

Visual direction:
- clean, structured list/grid
- ingredient chips or rows
- fast interaction
- lightweight UI
- strong CTA to cook from pantry

This page should feel more productive than decorative.

---

## 7.3 Recipe Search
Search page should feel powerful but simple.

Must include:
- clearly visible filters
- easy scanning of results
- compact but attractive cards
- optional sticky filter area

Search UI should not feel overwhelming.

---

## 7.4 Recipe Details
Recipe details should feel premium and content-rich.

Must include:
- large image
- title and metadata
- ingredients section
- instructions section
- save/add-to-collection actions
- add missing ingredients to grocery list

This page should feel polished and editorial, not just functional.

---

## 7.5 Collections
Collections should feel organized and personal.

Visual direction:
- clean grid/list of saved groups
- covers or recipe previews
- clear count and naming
- light personalization

---

## 7.6 Grocery List
Grocery list is a utility screen.

Visual direction:
- minimal
- clear
- fast to use
- check/uncheck friendly

This screen should prioritize usability over visual richness.

---

## 7.7 Profile / Preferences
Profile screen should be simple and structured.

Use:
- grouped form sections
- clear labels
- chips/selectors for diet and intolerances
- goal settings in compact cards

---

# 8. Typography

Typography must be:

- highly readable
- clean
- modern
- slightly soft rather than overly technical

Rules:
- strong visual hierarchy
- clear section titles
- compact metadata text
- avoid oversized display text unless in hero sections

Recommended feel:
- medium/semibold section headers
- muted support text
- strong titles for recipes

---

# 9. Imagery

Recipe images are important and should be treated as premium content.

Rules:
- large enough to feel appetizing
- rounded corners
- consistent aspect ratios
- never distorted
- should visually anchor recipe cards

Images should make the app feel alive.

---

# 10. Shadows and Borders

Use both borders and shadows carefully.

Recommended approach:
- `border-slate-200` for structure
- `shadow-sm` for subtle separation
- `hover:shadow-md` for interactivity

Avoid:
- heavy dark shadows
- excessive glassmorphism
- neon effects
- overly flat surfaces everywhere

---

# 11. Motion and Interaction

Motion should be subtle.

Allowed:
- hover elevation
- fade/scale on cards
- smooth transitions
- collapsible panels
- soft modal animations

Avoid:
- flashy motion
- exaggerated bounce
- over-animated screens

The app should feel polished, not gimmicky.

## 11.1 Mobile Interaction

Mobile UX must prioritize:

- large tap targets
- simple gestures
- one-hand usability

Minimum touch targets:

- buttons: **44px height**
- list items: **40px height**

Avoid:

- tiny buttons
- dense UI elements
- complex multi-column layouts

Prefer:

- vertical stacking
- collapsible sections
- large action buttons

---

# 12. UX Principles

The frontend must optimize for:

- discoverability
- clarity
- speed
- comfort
- appetite and engagement
- easy repeated usage

Every screen should communicate:
- what this page is for
- what the user can do next
- where the main CTA is

---

# 13. Design Constraints for AI Agent

The AI agent must follow these rules:

- Design light theme first
- Use Tailwind colors only
- Prefer `slate` for neutral structure
- Use `green` as the primary accent
- Use rounded, modern cards
- Avoid dark-first design decisions
- Avoid overdecorated gradients
- Avoid overly dense dashboards
- Keep UI clean and section-based
- Prefer modern food/product aesthetic over generic admin dashboard styling

---

# 14. Recommended Tailwind Style Tokens

## Surfaces
- `bg-slate-50`
- `bg-white`
- `bg-slate-100`

## Text
- `text-slate-900`
- `text-slate-700`
- `text-slate-500`

## Borders
- `border-slate-200`
- `border-slate-300`

## Primary Accent
- `bg-green-600`
- `hover:bg-green-700`
- `text-green-700`
- `bg-green-100`

## Optional Support Colors
- `amber-100 text-amber-700`
- `sky-100 text-sky-700`
- `rose-100 text-rose-700`
- `violet-100 text-violet-700`

---

# Final Design Rule

The UI must feel like a modern food product that is both useful and desirable.

It should be easier to use than a dashboard,
and cleaner than a typical recipe website.

The design must always be tested in both desktop and mobile layouts.
Mobile usability is a critical requirement.