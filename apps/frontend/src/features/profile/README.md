# profile feature

Owns all user profile and preferences logic:
- `api/` — get-profile.ts, update-preferences.ts
- `components/` — PreferencesForm, DietChipSelector, IntoleranceSelector, CuisineSelector
- `hooks/` — useProfile, useUpdatePreferencesMutation
- `lib/` — query-keys.ts
- `schemas/` — profile-preferences.schema.ts (Zod)
- `types/` — UserProfile, UserPreferences
