import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@core/cache/cache.module';
import { PantryModule } from '@modules/pantry/pantry.module';
import { ProfileModule } from '@modules/profile/profile.module';
import { RecipesController } from './transport/recipes.controller';
import {
  CookFromPantryUseCase,
  GetCategoriesUseCase,
  GetPopularRecipesUseCase,
  GetRecipeDetailsUseCase,
  GetRecommendationsUseCase,
  SearchRecipesUseCase,
} from './application/use-cases';
import { RECIPES_CACHE_REPOSITORY } from './domain/interfaces/recipes-cache-repository.interface';
import { RecipesCacheRepository } from './infrastructure/repositories/cache/recipes-cache.repository';
import { MockRecipesRepository } from './infrastructure/repositories/mock/mock-recipes.repository';
import { SpoonacularRepository } from './infrastructure/repositories/spoonacular/spoonacular.repository';
import { RECIPES_REPOSITORY } from '@modules/recipes/domain/interfaces/recipes-repository.interface';

@Module({
  imports: [HttpModule, CacheModule, PantryModule, ProfileModule],
  controllers: [RecipesController],
  providers: [
    SearchRecipesUseCase,
    GetRecipeDetailsUseCase,
    CookFromPantryUseCase,
    GetPopularRecipesUseCase,
    GetCategoriesUseCase,
    GetRecommendationsUseCase,

    // Cache adapter (feature-level)
    {
      provide: RECIPES_CACHE_REPOSITORY,
      useClass: RecipesCacheRepository,
    },

    // External provider adapter
    MockRecipesRepository,
    SpoonacularRepository,

    // switch provider without "new"
    {
      provide: RECIPES_REPOSITORY,
      useFactory: (
        mock: MockRecipesRepository,
        spoon: SpoonacularRepository,
      ) => {
        const mode = (
          process.env.RECIPES_PROVIDER_MODE ?? 'spoonacular'
        ).toLowerCase();
        return mode === 'mock' ? mock : spoon;
      },
      inject: [MockRecipesRepository, SpoonacularRepository],
    },
  ],
  exports: [],
})
export class RecipesModule {}
