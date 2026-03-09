# collections feature

Owns all collection-related logic:
- `api/` — list-collections.ts, create-collection.entity.ts, add-recipe.ts, remove-recipe.ts
- `components/` — CollectionCard, CollectionGrid, CreateCollectionDialog
- `hooks/` — useCollections, useCreateCollectionMutation, useAddRecipeToCollectionMutation
- `lib/` — query-keys.ts
- `schemas/` — create-collection.schema.ts (Zod)
- `types/` — CollectionEntity, CollectionDto
