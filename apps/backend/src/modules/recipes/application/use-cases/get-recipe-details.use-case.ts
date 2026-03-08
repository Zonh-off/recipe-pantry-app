import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RecipeDetails } from '../../domain/ports/i-recipes-provider.port';
import type { IRecipesCachePort } from '../../domain/ports/i-recipes-provider.port';
import type { IRecipesProviderPort } from '../../domain/ports/i-recipes-provider.port';

@Injectable()
export class GetRecipeDetailsUseCase {
  constructor(
    @Inject('IRecipesProviderPort')
    private readonly provider: IRecipesProviderPort,

    @Inject('IRecipesCachePort')
    private readonly cache: IRecipesCachePort,
  ) {}

  async execute(id: number): Promise<RecipeDetails> {
    if (!Number.isFinite(id) || id <= 0) {
      throw new NotFoundException('Recipe not found');
    }

    const cached = await this.cache.getDetails(id);
    if (cached) return cached;

    const result = await this.provider.getDetails(id);
    await this.cache.setDetails(id, result);

    return result;
  }
}
