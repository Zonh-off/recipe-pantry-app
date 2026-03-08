# recipes feature

Owns all recipe-related logic:
- `api/` — search-recipes.ts, get-recipe-details.ts, cook-from-pantry.ts
- `components/` — RecipeCard, RecipeGrid, RecipeFilters, RecipeDetails
- `hooks/` — useSearchRecipes, useRecipeDetails, useCookFromPantry
- `lib/` — query-keys.ts
- `schemas/` — search-filters.schema.ts (Zod)
- `types/` — Recipe, RecipeDetails, SearchFilters, CookFromPantryResult
- `utils/` — filter serialisation for URL params
