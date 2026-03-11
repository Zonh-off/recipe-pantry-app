export type SearchRecipesParams = {
  query?: string;
  diet?: string;
  intolerances?: string; // comma-separated
  cuisine?: string;
  maxReadyTime?: number;
  minCalories?: number;
  maxCalories?: number;
  page: number; // 1-based
  pageSize: number;
};

export type RecipeSearchItem = {
  id: number;
  title: string;
  image?: string;
  readyInMinutes?: number;
  explanation?: string;
};

export type SearchRecipesResult = {
  items: RecipeSearchItem[];
  total: number;
  page: number;
  pageSize: number;
};

export type RecipeIngredient = {
  name: string;
  amount: number;
  unit: string;
};

export type RecipeDetails = {
  id: number;
  title: string;
  image?: string;
  summary?: string;
  readyInMinutes?: number;
  servings?: number;
  ingredients: RecipeIngredient[];
  instructions?: string;
  calories?: number;
};

export type CookFromPantryParams = {
  ingredients: string[]; // normalized names
  maxMissing?: number; // filter server-side
  limit?: number; // number of recipes to return
};

export type SpoonIngredient = {
  name?: string;
  amount?: number;
  unit?: string;
  unitShort?: string;
  unitLong?: string;
  original?: string;
};

export type SpoonFindByIngredientsItem = {
  id: number;
  title: string;
  image?: string;
  usedIngredients?: SpoonIngredient[];
  missedIngredients?: SpoonIngredient[];
  missedIngredientCount?: number;
};

export type CookIngredient = {
  name: string;
  amount?: number;
  unit?: string;
  original?: string;
};

export type CookRecipeItem = {
  id: number;
  title: string;
  image?: string;
  usedIngredients: CookIngredient[];
  missedIngredients: CookIngredient[];
  missedCount: number;
};

export type CookFromPantryResponse = {
  items: CookRecipeItem[];
};

export type GetPopularParams = {
  category?: string;
  limit: number;
};

export type RecommendParams = {
  userId: string;
  diet?: string;
  intolerances?: string;
  cuisine?: string;
  limit: number;
};

export type PopularCategory = {
  id: string; // internal id e.g. 'breakfast'
  name: string; // display name e.g. 'Breakfast'
  image?: string;
};
