import { Inject, Injectable } from '@nestjs/common';
import {
  type IRecipesRepository,
  RECIPES_REPOSITORY,
} from '../../domain/interfaces/recipes-repository.interface';
import {
  type IRecipesCacheRepository,
  RECIPES_CACHE_REPOSITORY,
} from '../../domain/interfaces/recipes-cache-repository.interface';
import {
  SearchRecipesParams,
  SearchRecipesResult,
} from '../../domain/entities/types';

@Injectable()
export class SearchRecipesUseCase {
  constructor(
    @Inject(RECIPES_REPOSITORY)
    private readonly provider: IRecipesRepository,

    @Inject(RECIPES_CACHE_REPOSITORY)
    private readonly cache: IRecipesCacheRepository,
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
