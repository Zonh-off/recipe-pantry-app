# 📘 Frontend Rules & Architecture – Recipe Pantry App

This document defines the frontend architecture, engineering rules, and implementation constraints for the Recipe Pantry application.

It is intended for both human developers and AI agents.

---

# 1. Frontend Goals

The frontend must:

* Provide a clean and fast user experience
* Communicate only with the backend API
* Remain maintainable as new features are added
* Keep business logic outside UI components
* Be organized by feature, not by global file type

The frontend is not responsible for external provider integration.
It must never call Spoonacular or any third-party recipe API directly.

---

# 2. Mandatory Tech Stack

## Core

* Next.js (App Router)
* TypeScript (strict mode)
* TailwindCSS
* shadcn/ui
* Axios
* TanStack Query
* React Hook Form
* Zod
* NextAuth

## Principles

* Axios is the only HTTP client allowed for backend communication
* TanStack Query is the only server-state solution allowed
* React local state is preferred for transient UI state
* Global state is forbidden unless explicitly justified
* Redux is not allowed unless explicitly approved

---

# 3. Recommended Frontend Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    pantry/
    recipes/
    collections/
    grocery-list/
    profile/

  features/
    pantry/
      api/
      components/
      hooks/
      schemas/
      types/
      utils/
    recipes/
      api/
      components/
      hooks/
      schemas/
      types/
      utils/
    collections/
    grocery-list/
    profile/
    recommendations/

  shared/
    components/
      ui/
      layout/
      feedback/
    lib/
      api/
      env/
      utils/
      query/
    hooks/
    types/
    constants/

  providers/
    query-provider.tsx
    theme-provider.tsx
```

---

# 4. Folder Responsibilities

## 4.1 `app/`

`app/` is for:

* routes
* layouts
* page composition
* route-level loading/error boundaries
* server component entry points

`app/` MUST NOT contain:

* feature-specific business logic
* direct Axios calls in page components
* reusable feature code

---

## 4.2 `features/`

Each feature owns its internal logic.

A feature may contain:

* API functions
* hooks
* feature components
* validation schemas
* local utilities
* feature-specific types

Examples:

* `features/pantry`
* `features/recipes`
* `features/collections`
* `features/grocery-list`
* `features/profile`

Feature code MUST stay inside its own feature unless truly shared.

---

## 4.3 `shared/`

`shared/` is only for generic reusable code.

Allowed in `shared/`:

* UI primitives
* layout wrappers
* generic feedback components
* API client setup
* utility functions
* app-wide constants
* generic hooks

Forbidden in `shared/`:

* Recipe-specific components
* Pantry-specific logic
* Collection-specific hooks
* Feature business rules

If code contains product meaning, it does not belong in `shared/`.

---

# 5. Axios Rules

## 5.1 Single API Client

All HTTP calls must go through a centralized Axios client.

Recommended location:

```text
src/shared/lib/api/client.ts
```

This client must define:

* `baseURL`
* `timeout`
* JSON defaults
* credentials policy if cookies are used
* response error normalization

Example responsibilities:

* attach auth headers if needed
* normalize backend errors
* handle common response parsing

Components must never call `axios.create()` themselves.

---

## 5.2 Feature API Modules

Feature-specific API functions must live inside feature folders.

Examples:

```text
features/recipes/api/search-recipes.ts
features/recipes/api/get-recipe-details.ts
features/pantry/api/add-pantry-item.ts
```

Rules:

* API files call the shared Axios client
* API files return typed responses
* API files may map backend DTOs into UI-safe models
* UI components must not perform raw response transformation

---

## 5.3 Error Handling

Axios errors must be normalized before reaching the UI.

The UI must never display raw backend error payloads directly.

Preferred pattern:

* shared error parser in `shared/lib/api/`
* feature hooks show friendly messages

---

# 6. TanStack Query Rules

## 6.1 Query Ownership

Each feature owns its own query keys and hooks.

Example:

```text
features/recipes/hooks/use-search-recipes.ts
features/recipes/hooks/use-recipe-details.ts
```

Recommended:

```text
features/recipes/lib/query-keys.ts
```

---

## 6.2 Query Responsibilities

TanStack Query is responsible for:

* fetching server state
* caching server state
* invalidation after mutations
* loading/error status

TanStack Query must not be replaced with custom ad-hoc fetch state handling.

---

## 6.3 Mutations

Mutations must be isolated in feature hooks or feature API modules.

Examples:

* `useAddPantryItemMutation`
* `useCreateCollectionMutation`
* `useToggleGroceryItemMutation`

Components should trigger mutations, not implement mutation logic themselves.

---

# 7. State Management Rules

## 7.1 Allowed State Types

Use the correct state mechanism for the correct problem.

### Server state

Use TanStack Query.

### Local UI state

Use React local state.
Examples:

* modal open/close
* selected tab
* temporary draft input

### URL state

Use search params for:

* recipe search filters
* sort order
* pagination
* category filters

### Global state

Avoid unless truly necessary.

---

## 7.2 Forbidden State Patterns

* No Redux by default
* No storing server state in custom global stores
* No duplicating TanStack Query data into local state without reason
* No global store for simple modal/filter state

---

# 8. Component Rules

## 8.1 Component Types

Frontend should distinguish between:

* presentational components
* feature components
* route/page composition components

### Presentational components

* receive props
* render UI
* minimal logic

### Feature components

* may use hooks
* may orchestrate user interaction
* still should avoid heavy data transformation

---

## 8.2 Forbidden Component Patterns

Components must not:

* call backend APIs directly with Axios
* contain large business workflows
* normalize raw backend data inline repeatedly
* become 300-line god components

---

# 9. Forms

All forms must use:

* React Hook Form
* Zod validation

Validation must be explicit and typed.

Recommended:

```text
features/profile/schemas/profile-preferences.schema.ts
features/pantry/schemas/add-pantry-item.schema.ts
```

Forms must support:

* field-level validation messages
* submit/loading state
* graceful backend error handling

---

# 10. UX Rules

Every async screen must provide:

* loading state
* empty state
* error state

Examples:

* no pantry items
* no recipes found
* failed recommendations load
* empty collection

The UI must remain usable even when some sections fail.

Do not block the entire page for a small widget failure.

---

# 11. Route Architecture

## Home

Purpose:

* popular recipes
* recommendations
* categories
* cook-from-pantry entry point

## Pantry

Purpose:

* list pantry items
* add/edit/remove ingredients
* launch cook-from-pantry flow

## Recipes

Purpose:

* search recipes
* apply filters
* browse results

## Recipe Details

Purpose:

* display full recipe details
* save to collection
* add missing ingredients to grocery list

## Collections

Purpose:

* list collections
* create/edit collections
* browse saved recipes

## Grocery List

Purpose:

* show aggregated missing ingredients
* check/uncheck items
* manual edits

## Profile

Purpose:

* manage preferences
* diet
* intolerances
* cuisine
* goals

---

# 12. API Contract Rules

The frontend must assume the backend API is the source of truth.

Rules:

* backend DTOs may be mapped in feature API layer
* frontend must not guess missing fields
* response types must be explicit
* query params must be typed and validated where needed

---

# 13. Styling Rules

* TailwindCSS only
* shadcn/ui for common primitives
* avoid duplicated utility blobs when reusable component is justified
* avoid page files full of UI markup
* prefer small reusable feature components

Design direction:

* clean
* modern
* readable
* fast
* minimal clutter

---

# 14. Frontend Architecture Principles

## 14.1 Feature-First

Frontend architecture is organized by feature, not by technical layer globally.

Correct:

```text
features/recipes/components/
features/recipes/api/
features/recipes/hooks/
```

Incorrect:

```text
components/
hooks/
api/
```

for all features mixed together.

---

## 14.2 Backend Authority

Frontend must never bypass backend boundaries.

That means:

* no direct Spoonacular calls
* no direct database access
* no secret usage in browser code

---

## 14.3 Explicit Data Flow

Preferred flow:

```text
Page -> Feature Hook -> Feature API -> Shared Axios Client -> Backend API
```

Business decisions must not be hidden inside components.

---

# 15. Non-Goals

Do NOT introduce without approval:

* Redux
* GraphQL
* multiple HTTP clients
* direct third-party API calls from frontend
* overengineered client-side architecture layers

---

# 16. Mobile Design & Responsive Rules

The application must be designed with responsive layouts for:

* Desktop
* Tablet
* Mobile

Mobile UX is a **first‑class requirement**, because pantry management, grocery lists, and cooking instructions are frequently used on phones.

The UI must be comfortable to use with one hand while cooking.

---

## 16.1 Breakpoints

Use standard Tailwind breakpoints:

* `sm` – small devices
* `md` – tablets
* `lg` – desktop
* `xl` – wide desktop

Layouts must adapt progressively rather than switching to completely different UI structures.

Prefer responsive utility classes instead of separate component implementations.

Example:

```text
single column on mobile
2 columns on tablet
3‑4 columns on desktop
```

---

## 16.2 Navigation

### Desktop

Use a **left sidebar navigation**.

Example:

* Home
* Pantry
* Recipes
* Collections
* Grocery List
* Profile

### Mobile

Use a **bottom navigation bar**.

Example:

* Home
* Pantry
* Search
* Collections
* Profile

Rules:

* Bottom navigation must remain fixed
* Icons must be easily recognizable
* Labels should remain visible
* Active tab must be visually highlighted

Recommended Tailwind layout:

```text
fixed bottom-0
border-t border-slate-200
bg-white
```

---

## 16.3 Mobile Layout Principles

Mobile screens must:

* prioritize content over decoration
* keep actions reachable with one hand
* avoid complex multi‑column layouts
* use vertical stacking

Prefer:

* single column layouts
* large tap targets
* clear section separation

Avoid:

* dense tables
* tiny clickable elements
* horizontal scroll for core interactions

---

## 16.4 Mobile Components

Recipe cards must adapt to smaller screens.

Desktop:

* grid layouts
* multi‑column card lists

Mobile:

* stacked cards
* full width cards
* larger images
* compressed metadata

Recommended Tailwind example:

```text
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

Ingredient lists must remain easily scannable on small screens.

Use:

* ingredient chips
* simple rows
* grouped sections

---

## 16.5 Mobile Interactions

Mobile interactions must support:

* large primary buttons
* simple gestures
* collapsible content

Examples:

Recipe instructions:

* collapsible step sections
* clear step numbering

Pantry items:

* quick remove buttons
* quick edit actions

Grocery list:

* large checkbox targets
* swipe or tap to mark complete

---

## 16.6 Mobile UX Priorities

The following screens must be optimized first for mobile usage:

Pantry
Grocery List
Recipe Details
Cook From Pantry

These flows should be extremely fast and comfortable for repeated use in kitchen scenarios.

---

## 16.7 Touch Target Rules

Minimum tap target size:

* **44px height** for buttons
* **40px height** for list items

Spacing between tappable elements must prevent accidental taps.

---

## 16.8 Content Density

Mobile layouts must avoid visual overload.

Rules:

* reduce secondary metadata
* prioritize primary actions
* collapse advanced filters
* avoid large control panels

Prefer progressive disclosure of complex features.

---

# 17. Final Rule

Implement the frontend step by step.

If a frontend decision makes the UI faster to build but harder to understand, test, or scale,
it is the wrong decision.

Frontend must optimize for:

* clarity
* maintainability
* feature isolation
* typed API communication
* good UX

If a frontend decision makes the UI faster to build but harder to understand, test, or scale,
it is the wrong decision.