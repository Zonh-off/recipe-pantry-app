import {
  CookFromPantryParams,
  CookFromPantryResponse,
  GetPopularParams,
  PopularCategory,
  RecipeDetails,
  RecommendParams,
  SearchRecipesParams,
  SearchRecipesResult,
} from '../entities/types';

export const RECIPES_REPOSITORY = Symbol('RECIPES_REPOSITORY');

export interface IRecipesRepository {
  search(params: SearchRecipesParams): Promise<SearchRecipesResult>;
  getDetails(id: number): Promise<RecipeDetails>;
  cookFromPantry(params: CookFromPantryParams): Promise<CookFromPantryResponse>;
  getPopular(params: GetPopularParams): Promise<SearchRecipesResult>;
  getCategories(): Promise<PopularCategory[]>;
  getRecommendations(params: RecommendParams): Promise<SearchRecipesResult>;
  searchIngredients(query: string, limit?: number): Promise<string[]>;
}
