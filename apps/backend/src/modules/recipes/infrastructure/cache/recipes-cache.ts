import { Inject, Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import {
  CookFromPantryResponse,
  CookRecipeItem,
  IRecipesCachePort,
  RecipeDetails,
  SearchRecipesResult,
} from '../../domain/ports/i-recipes-provider.port';
import type { ICacheService } from '../../../../core/cache/cache-service.interface';

@Injectable()
export class RecipesCache implements IRecipesCachePort {
  private static readonly SEARCH_TTL_SECONDS = 15 * 60; // 15 min
  private static readonly DETAILS_TTL_SECONDS = 6 * 60 * 60; // 6 hours

  constructor(
    @Inject('ICacheService')
    private readonly cache: ICacheService,
  ) { }

  async getSearch(keyObj: unknown): Promise<SearchRecipesResult | null> {
    const key = this.searchKey(keyObj);
    return this.cache.get<SearchRecipesResult>(key);
  }

  async setSearch(keyObj: unknown, value: SearchRecipesResult): Promise<void> {
    const key = this.searchKey(keyObj);
    await this.cache.set(key, value, RecipesCache.SEARCH_TTL_SECONDS);
  }

  async getDetails(id: number): Promise<RecipeDetails | null> {
    return this.cache.get<RecipeDetails>(this.detailsKey(id));
  }

  async setDetails(id: number, value: RecipeDetails): Promise<void> {
    await this.cache.set(
      this.detailsKey(id),
      value,
      RecipesCache.DETAILS_TTL_SECONDS,
    );
  }

  async getCookFromPantry(id: string): Promise<CookFromPantryResponse | null> {
    return this.cache.get<CookFromPantryResponse>(this.cookFromPantryKey(id));
  }

  async setCookFromPantry(
    id: string,
    value: CookFromPantryResponse,
  ): Promise<void> {
    await this.cache.set(
      this.cookFromPantryKey(id),
      value,
      RecipesCache.DETAILS_TTL_SECONDS,
    );
  }

  async getPopular(keyObj: unknown): Promise<SearchRecipesResult | null> {
    const key = `recipes:popular:${this.hashObj(keyObj)}`;
    return this.cache.get<SearchRecipesResult>(key);
  }

  async setPopular(keyObj: unknown, value: SearchRecipesResult): Promise<void> {
    const key = `recipes:popular:${this.hashObj(keyObj)}`;
    await this.cache.set(key, value, RecipesCache.SEARCH_TTL_SECONDS);
  }

  async getRecommendations(
    userId: string,
  ): Promise<SearchRecipesResult | null> {
    const key = `recipes:recommendations:${userId}`;
    return this.cache.get<SearchRecipesResult>(key);
  }

  async setRecommendations(
    userId: string,
    value: SearchRecipesResult,
  ): Promise<void> {
    const key = `recipes:recommendations:${userId}`;
    await this.cache.set(key, value, RecipesCache.SEARCH_TTL_SECONDS);
  }

  private hashObj(obj: unknown): string {
    const json = JSON.stringify(obj);
    return createHash('sha256').update(json).digest('hex');
  }

  private searchKey(obj: unknown): string {
    return `recipes:search:${this.hashObj(obj)}`;
  }

  private detailsKey(id: number): string {
    return `recipes:details:${id}`;
  }

  private cookFromPantryKey(id: string): string {
    return `recipes:cookFromPantry:${id}`;
  }
}
