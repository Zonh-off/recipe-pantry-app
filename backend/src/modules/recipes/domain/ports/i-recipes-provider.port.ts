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

export interface IRecipesProviderPort {
  search(params: SearchRecipesParams): Promise<SearchRecipesResult>;
  getDetails(id: number): Promise<RecipeDetails>;
  cookFromPantry(params: CookFromPantryParams): Promise<CookFromPantryResponse>;
  getPopular(params: GetPopularParams): Promise<SearchRecipesResult>;
  getCategories(): Promise<PopularCategory[]>;
  getRecommendations(params: RecommendParams): Promise<SearchRecipesResult>;
}

export interface IRecipesCachePort {
  getSearch(keyObj: unknown): Promise<SearchRecipesResult | null>;
  setSearch(keyObj: unknown, value: SearchRecipesResult): Promise<void>;

  getDetails(id: number): Promise<RecipeDetails | null>;
  setDetails(id: number, value: RecipeDetails): Promise<void>;

  getCookFromPantry(id: string): Promise<CookFromPantryResponse | null>;
  setCookFromPantry(id: string, value: CookFromPantryResponse): Promise<void>;

  getPopular(keyObj: unknown): Promise<SearchRecipesResult | null>;
  setPopular(keyObj: unknown, value: SearchRecipesResult): Promise<void>;

  getRecommendations(userId: string): Promise<SearchRecipesResult | null>;
  setRecommendations(userId: string, value: SearchRecipesResult): Promise<void>;
}
