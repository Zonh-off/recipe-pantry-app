import { Inject, Injectable } from '@nestjs/common';
import {
  SearchRecipesParams,
  SearchRecipesResult,
} from '../../domain/ports/i-recipes-provider.port';
import type { IRecipesCachePort } from '../../domain/ports/i-recipes-provider.port';
import type { IRecipesProviderPort } from '../../domain/ports/i-recipes-provider.port';

@Injectable()
export class SearchRecipesUseCase {
  constructor(
    @Inject('IRecipesProviderPort')
    private readonly provider: IRecipesProviderPort,

    @Inject('IRecipesCachePort')
    private readonly cache: IRecipesCachePort,
  ) {}

  async execute(params: SearchRecipesParams): Promise<SearchRecipesResult> {
    // Clamp
    const safe: SearchRecipesParams = {
      ...params,
      page: Math.max(1, params.page),
      pageSize: Math.min(20, Math.max(1, params.pageSize)),
    };

    const cached = await this.cache.getSearch(safe);
    if (cached) return cached;

    const result = await this.provider.search(safe);
    await this.cache.setSearch(safe, result);

    return result;
  }
}
