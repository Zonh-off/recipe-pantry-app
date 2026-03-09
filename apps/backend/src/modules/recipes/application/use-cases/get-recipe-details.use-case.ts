import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  type IRecipesRepository,
  RECIPES_REPOSITORY,
} from '../../domain/interfaces/recipes-repository.interface';
import {
  type IRecipesCacheRepository,
  RECIPES_CACHE_REPOSITORY,
} from '../../domain/interfaces/recipes-cache-repository.interface';
import { RecipeDetails } from '../../domain/entities/types';

@Injectable()
export class GetRecipeDetailsUseCase {
  constructor(
    @Inject(RECIPES_REPOSITORY)
    private readonly provider: IRecipesRepository,

    @Inject(RECIPES_CACHE_REPOSITORY)
    private readonly cache: IRecipesCacheRepository,
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
