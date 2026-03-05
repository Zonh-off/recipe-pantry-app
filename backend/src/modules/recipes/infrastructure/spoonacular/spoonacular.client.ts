import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import {
  IRecipesProviderPort,
  SearchRecipesParams,
  SearchRecipesResult,
  RecipeDetails,
  CookRecipeItem,
  CookFromPantryResponse,
  SpoonFindByIngredientsItem,
  SpoonIngredient,
  CookIngredient,
} from '../../domain/ports/i-recipes-provider.port';

@Injectable()
export class SpoonacularClient implements IRecipesProviderPort {
  private readonly baseUrl = 'https://api.spoonacular.com';
  private readonly apiKey: string;

  constructor(private readonly http: HttpService) {
    const key = process.env.SPOONACULAR_API_KEY;
    if (!key) {
      throw new Error('SPOONACULAR_API_KEY is not set');
    }
    this.apiKey = key;
  }

  async search(params: SearchRecipesParams): Promise<SearchRecipesResult> {
    // Spoonacular uses offset, number
    const number = params.pageSize;
    const offset = (params.page - 1) * params.pageSize;

    const queryParams: Record<string, any> = {
      apiKey: this.apiKey,
      query: params.query || undefined,
      diet: params.diet || undefined,
      intolerances: params.intolerances || undefined,
      cuisine: params.cuisine || undefined,
      maxReadyTime: params.maxReadyTime ?? undefined,
      minCalories: params.minCalories ?? undefined,
      maxCalories: params.maxCalories ?? undefined,
      number,
      offset,

      // Ask for some extra fields if available (still safe if absent)
      addRecipeInformation: true,
      fillIngredients: false,
    };

    try {
      const { data } = await firstValueFrom(
        this.http.get(`${this.baseUrl}/recipes/complexSearch`, {
          params: queryParams,
        }),
      );

      const items = Array.isArray(data?.results)
        ? data.results.map((r: any) => ({
          id: r.id,
          title: r.title,
          image: r.image,
          readyInMinutes: r.readyInMinutes,
        }))
        : [];

      return {
        items,
        total: Number(data?.totalResults ?? items.length),
        page: params.page,
        pageSize: params.pageSize,
      };
    } catch (e: any) {
      // Do not leak external errors
      throw new InternalServerErrorException(
        'Recipe search temporarily unavailable',
      );
    }
  }

  async getDetails(id: number): Promise<RecipeDetails> {
    const queryParams: Record<string, any> = {
      apiKey: this.apiKey,
      includeNutrition: false,
    };

    try {
      const { data } = await firstValueFrom(
        this.http.get(`${this.baseUrl}/recipes/${id}/information`, {
          params: queryParams,
        }),
      );

      const ingredients = Array.isArray(data?.extendedIngredients)
        ? data.extendedIngredients.map((i: any) => ({
          name: i.name,
          amount: Number(i.amount ?? 0),
          unit: String(i.unit ?? ''),
        }))
        : [];

      return {
        id: data.id,
        title: data.title,
        image: data.image,
        summary: data.summary,
        readyInMinutes: data.readyInMinutes,
        servings: data.servings,
        ingredients,
        instructions: data.instructions,
      };
    } catch (e: any) {
      throw new InternalServerErrorException(
        'Recipe details temporarily unavailable',
      );
    }
  }

  async cookFromPantry(params: {
    ingredients: string[];
    maxMissing?: number;
    limit?: number;
  }): Promise<CookFromPantryResponse> {
    if (!params.ingredients?.length) {
      return { items: [] };
    }

    const queryParams: Record<string, any> = {
      apiKey: this.apiKey,
      ingredients: params.ingredients.join(','),
      number: params.limit ?? 12,
      ranking: 1,
      ignorePantry: true,
    };

    try {
      const { data } = await firstValueFrom(
        this.http.get<SpoonFindByIngredientsItem[]>(
          `${this.baseUrl}/recipes/findByIngredients`,
          { params: queryParams },
        ),
      );

      const mapIng = (i: SpoonIngredient): CookIngredient => ({
        name: String(i?.name ?? ''),
        amount: i?.amount !== undefined ? Number(i.amount) : undefined,
        unit: String(i?.unit ?? i?.unitShort ?? i?.unitLong ?? ''),
        original: i?.original ? String(i.original) : undefined,
      });

      const items: CookRecipeItem[] = Array.isArray(data)
        ? data.map((r) => {
          const used = Array.isArray(r.usedIngredients)
            ? r.usedIngredients
            : [];
          const missed = Array.isArray(r.missedIngredients)
            ? r.missedIngredients
            : [];

          const missedCount = Number(
            r.missedIngredientCount ?? missed.length ?? 0,
          );

          return {
            id: Number(r.id),
            title: String(r.title ?? ''),
            image: r.image ? String(r.image) : undefined,
            usedIngredients: used.map(mapIng),
            missedIngredients: missed.map(mapIng),
            missedCount,
          };
        })
        : [];

      const filtered =
        typeof params.maxMissing === 'number'
          ? items.filter((x) => x.missedCount <= params.maxMissing!)
          : items;

      return { items: filtered };
    } catch (e: any) {
      const status = e?.response?.status;
      const data = e?.response?.data;
      const msg = e?.message;

      console.error('[Spoonacular findByIngredients] failed', {
        status,
        msg,
        data,
      });

      throw new InternalServerErrorException(
        status
          ? `Cook-from-pantry failed (status ${status})`
          : 'Cook-from-pantry temporarily unavailable',
      );
    }
  }

  private mapSpoonToSearch(data: any, page: number, pageSize: number): SearchRecipesResult {
    const items = Array.isArray(data?.results)
      ? data.results.map((r: any) => ({
        id: r.id,
        title: r.title,
        image: r.image,
        readyInMinutes: r.readyInMinutes,
      }))
      : [];

    return {
      items,
      total: Number(data?.totalResults ?? items.length),
      page,
      pageSize,
    };
  }

  async getPopular(params: {
    category?: string;
    limit: number;
  }): Promise<SearchRecipesResult> {
    const queryParams: Record<string, any> = {
      apiKey: this.apiKey,
      type: params.category || undefined,
      sort: 'popularity',
      number: params.limit,
      addRecipeInformation: true,
    };

    try {
      const { data } = await firstValueFrom(
        this.http.get(`${this.baseUrl}/recipes/complexSearch`, {
          params: queryParams,
        }),
      );
      return this.mapSpoonToSearch(data, 1, params.limit);
    } catch (e: any) {
      throw new InternalServerErrorException(
        'Popular recipes temporarily unavailable',
      );
    }
  }

  async getCategories(): Promise<any[]> {
    // Section 2.5: Predefined and centrally mapped.
    // We avoid exposing Spoonacular's raw mealTypes directly.
    return [
      { id: 'breakfast', name: 'Breakfast', image: 'https://spoonacular.com/recipeImages/636041-312x231.jpg' },
      { id: 'main course', name: 'Main Course', image: 'https://spoonacular.com/recipeImages/642583-312x231.jpg' },
      { id: 'dessert', name: 'Dessert', image: 'https://spoonacular.com/recipeImages/648439-312x231.jpg' },
      { id: 'salad', name: 'Salad', image: 'https://spoonacular.com/recipeImages/649114-312x231.jpg' },
      { id: 'soup', name: 'Soup', image: 'https://spoonacular.com/recipeImages/660405-312x231.jpg' },
    ];
  }

  async getRecommendations(params: {
    userId: string;
    diet?: string;
    intolerances?: string;
    cuisine?: string;
    limit: number;
  }): Promise<SearchRecipesResult> {
    // Simulate recommendations using complexSearch with user profile settings
    const queryParams: Record<string, any> = {
      apiKey: this.apiKey,
      diet: params.diet || undefined,
      intolerances: params.intolerances || undefined,
      cuisine: params.cuisine || undefined,
      sort: 'random',
      number: params.limit,
      addRecipeInformation: true,
    };

    try {
      const { data } = await firstValueFrom(
        this.http.get(`${this.baseUrl}/recipes/complexSearch`, {
          params: queryParams,
        }),
      );
      return this.mapSpoonToSearch(data, 1, params.limit);
    } catch (e: any) {
      throw new InternalServerErrorException(
        'Recommendations temporarily unavailable',
      );
    }
  }
}
