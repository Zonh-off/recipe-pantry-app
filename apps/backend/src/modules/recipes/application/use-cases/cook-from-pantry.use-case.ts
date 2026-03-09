import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import {
  type IRecipesRepository,
  RECIPES_REPOSITORY,
} from '@modules/recipes/domain/interfaces/recipes-repository.interface';
import {
  type IPantryRepository,
  PANTRY_REPOSITORY,
} from '@modules/pantry/domain/repositories/pantry-repository.interface';
import {
  type IRecipesCacheRepository,
  RECIPES_CACHE_REPOSITORY,
} from '@modules/recipes/domain/interfaces/recipes-cache-repository.interface';
import { PantryItem } from '@modules/pantry/domain/entities/pantry-item.entity';

@Injectable()
export class CookFromPantryUseCase {
  constructor(
    @Inject(RECIPES_REPOSITORY)
    private readonly provider: IRecipesRepository,

    @Inject(RECIPES_CACHE_REPOSITORY)
    private readonly cache: IRecipesCacheRepository,

    @Inject(PANTRY_REPOSITORY)
    private readonly pantryRepo: IPantryRepository,
  ) {}

  async execute(userId: string, maxMissing?: number, limit?: number) {
    if (!userId) throw new BadRequestException('Missing user');

    const pantryItems = await this.pantryRepo.list(userId);

    const ingredients = (pantryItems ?? [])
      .map((x: PantryItem) => x.name)
      .filter(Boolean);

    if (ingredients.length === 0) {
      return { items: [] };
    }

    const cached = await this.cache.getCookFromPantry(userId);
    if (cached) return cached;

    const result = await this.provider.cookFromPantry({
      ingredients,
      maxMissing,
      limit,
    });

    // Rule 2.2: Sorting priority
    // 1. Lowest missedCount
    // 2. Popularity (future)
    // 3. Shortest cooking time (future)
    if (result.items) {
      result.items.sort((a, b) => (a.missedCount ?? 0) - (b.missedCount ?? 0));
    }

    await this.cache.setCookFromPantry(userId, result);
    return result;
  }
}
