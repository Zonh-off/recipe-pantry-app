import {
  CookFromPantryResponse,
  RecipeDetails,
  SearchRecipesResult,
} from '../entities/types';

export const RECIPES_CACHE_REPOSITORY = Symbol('RECIPES_CACHE_REPOSITORY');

export interface IRecipesCacheRepository {
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
