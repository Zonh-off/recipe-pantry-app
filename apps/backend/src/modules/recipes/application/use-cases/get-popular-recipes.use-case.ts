import { Inject, Injectable } from '@nestjs/common';
import type {
  IRecipesCachePort,
  IRecipesProviderPort,
  SearchRecipesResult,
  GetPopularParams,
} from '../../domain/ports/i-recipes-provider.port';

@Injectable()
export class GetPopularRecipesUseCase {
  constructor(
    @Inject('IRecipesProviderPort')
    private readonly provider: IRecipesProviderPort,

    @Inject('IRecipesCachePort')
    private readonly cache: IRecipesCachePort,
  ) {}

  async execute(params: GetPopularParams): Promise<SearchRecipesResult> {
    const cached = await this.cache.getPopular(params);
    if (cached) return cached;

    const result = await this.provider.getPopular(params);
    await this.cache.setPopular(params, result);

    return result;
  }
}
