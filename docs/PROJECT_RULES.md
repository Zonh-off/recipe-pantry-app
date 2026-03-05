# 🧠 Project Rules – Recipe Pantry App

This document defines the functional behavior and product boundaries of the Recipe Pantry application.

---

# 1. Product Vision

The application MUST support:

- Pantry management
- Search recipes
- Cook from pantry (recipes by ingredients)
- Recipe details
- Popular recipes
- Collections (create + add/remove recipes)
- Personalized recommendations (based on profile)
- Popular by category
- User profile preferences (diet, intolerances, cuisine, goals)
- Grocery list from missing ingredients
- Improved filtering and sorting

The agent MUST NOT implement features outside this scope unless explicitly requested.

---

# 2. Core Product Modules

---

## 2.1 Pantry

Pantry represents ingredients available at home.

MUST:
- Allow adding ingredients
- Normalize ingredient names
- Merge duplicates automatically
- Allow editing and deleting items

MUST NOT:
- Depend strictly on quantity for cookability logic
- Store complex measurement conversions

Empty Pantry Behavior:
- Show onboarding prompt
- Suggest adding common ingredients

---

## 2.2 Cook From Pantry

MUST:
- Query external recipe provider using pantry ingredients
- Return:
    - usedIngredients
    - missedIngredients
    - missedCount
- Allow filtering by maxMissing threshold

Sorting priority:
1. Lowest missedCount
2. Popularity
3. Shortest cooking time

If external API fails:
- Return cached results if available
- Otherwise return controlled error

---

## 2.3 Search Recipes

MUST support:
- Query string search
- Filters:
    - diet
    - intolerances
    - cuisine
    - maxReadyTime
    - calorie range
- Pagination or infinite scroll
- URL-synced state

Search MUST NOT depend on pantry.

---

## 2.4 Popular Recipes

MUST:
- Display at least one trending feed
- Support category-based popular feeds

If API lacks direct endpoint:
- Simulate via sorted search query

---

## 2.5 Categories

Categories are predefined and centrally mapped.

Agent MUST:
- Maintain mapping layer
- Avoid hardcoding API enums in UI

Categories may represent:
- meal type
- cuisine
- diet
- tags

---

## 2.6 Collections

MUST:
- Allow custom collection creation
- Allow recipe in multiple collections
- Include default "Saved" collection

MUST NOT:
- Store full recipe object in DB
- Duplicate recipe metadata

---

## 2.7 Recommendations

Based on:
- User profile preferences
- Saved recipe patterns

If profile missing:
- Show fallback recommendations
- Prompt configuration

Recommendations must be explainable.

---

## 2.8 Grocery List

MUST:
- Generate from missed ingredients
- Merge duplicates
- Allow manual edit
- Support check/uncheck

---

# 3. Non-Goals

Do NOT implement:
- Social features
- Ratings/comments
- Payments
- Full recipe persistence
- Real-time collaboration

---

# 4. External Dependency Rules

- All recipe data is volatile
- Must implement caching
- Must handle rate limits
- Must not expose external API directly to frontend

# Final Product Rule

If a feature does not directly improve:
- Decision speed
- Organization
- Personalization

It should not be implemented.