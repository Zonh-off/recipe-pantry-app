import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  type IRecipesRepository,
  RECIPES_REPOSITORY,
} from '../../domain/interfaces/recipes-repository.interface';
import {
  type IRecipesCacheRepository,
  RECIPES_CACHE_REPOSITORY,
} from '../../domain/interfaces/recipes-cache-repository.interface';
import {
  type IPantryRepository,
  PANTRY_REPOSITORY,
} from '@modules/pantry/domain/repositories/pantry-repository.interface';
import { RecipeDetails } from '../../domain/entities/types';

@Injectable()
export class GetRecipeDetailsUseCase {
  constructor(
    @Inject(RECIPES_REPOSITORY)
    private readonly provider: IRecipesRepository,

    @Inject(RECIPES_CACHE_REPOSITORY)
    private readonly cache: IRecipesCacheRepository,

    @Inject(PANTRY_REPOSITORY)
    private readonly pantryRepo: IPantryRepository,
  ) { }

  async execute(id: number, userId?: string): Promise<RecipeDetails> {
    if (!Number.isFinite(id) || id <= 0) {
      throw new NotFoundException('Recipe not found');
    }

    const cached = await this.cache.getDetails(id);
    let recipe = cached;

    if (!recipe) {
      recipe = await this.provider.getDetails(id);
      await this.cache.setDetails(id, recipe);
    }

    // If userId provided, cross-reference with pantry
    if (userId && recipe.ingredients) {
      const pantry = await this.pantryRepo.list(userId);
      const pantryNames = pantry.map((p) => p.name.toLowerCase().trim());

      recipe = {
        ...recipe,
        ingredients: recipe.ingredients.map((ing) => {
          const recipeIngName = ing.name.toLowerCase().trim();

          // Check for direct or partial match
          // We split the recipe ingredient by common separators to handle "Salt and Pepper"
          const components = recipeIngName.split(/\s+and\s+|\s*,\s*|\s*&\s*/);

          const isAvailable = components.every(comp => {
            const trimmedComp = comp.trim();
            if (!trimmedComp) return true;
            return pantryNames.some(pName =>
              pName === trimmedComp ||
              pName.includes(trimmedComp) ||
              trimmedComp.includes(pName)
            );
          });

          return {
            ...ing,
            status: isAvailable ? 'available' : 'missing',
          };
        }),
      };
    } else if (recipe.ingredients) {
      recipe = {
        ...recipe,
        ingredients: recipe.ingredients.map((ing) => ({
          ...ing,
          status: 'neutral',
        })),
      };
    }

    return recipe;
  }
}
