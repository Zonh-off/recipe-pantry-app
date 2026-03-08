# pantry feature

Owns all pantry-related logic:
- `api/` — Axios calls via shared client (add, edit, delete, list pantry items)
- `components/` — PantryItemCard, AddItemForm, EmptyPantryState
- `hooks/` — usePantryItems, useAddPantryItemMutation, useDeletePantryItemMutation
- `schemas/` — add-pantry-item.schema.ts (Zod)
- `types/` — PantryItem, PantryItemDto
- `utils/` — ingredient normalisation helpers
