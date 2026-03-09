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
  GetPopularParams,
  SearchRecipesResult,
} from '../../domain/entities/types';

@Injectable()
export class GetPopularRecipesUseCase {
  constructor(
    @Inject(RECIPES_REPOSITORY)
    private readonly provider: IRecipesRepository,

    @Inject(RECIPES_CACHE_REPOSITORY)
    private readonly cache: IRecipesCacheRepository,
  ) {}

  async execute(params: GetPopularParams): Promise<SearchRecipesResult> {
    const cached = await this.cache.getPopular(params);
    if (cached) return cached;

    const result = await this.provider.getPopular(params);
    await this.cache.setPopular(params, result);

    return result;
  }
}
