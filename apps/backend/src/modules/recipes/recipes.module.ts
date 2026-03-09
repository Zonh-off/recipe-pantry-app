import { Module } from '@nestjs/common';
import { RecipesController } from './transport/recipes.controller';
import { SearchRecipesUseCase } from './application/use-cases/search-recipes.use-case';
import { GetRecipeDetailsUseCase } from './application/use-cases/get-recipe-details.use-case';
import { GetPopularRecipesUseCase } from './application/use-cases/get-popular-recipes.use-case';
import { GetCategoriesUseCase } from './application/use-cases/get-categories.use-case';
import { GetRecommendationsUseCase } from './application/use-cases/get-recommendations.use-case';
import { SpoonacularClient } from './infrastructure/spoonacular/spoonacular.client';
import { RecipesCache } from './infrastructure/cache/recipes-cache';
import { CacheModule } from '../../core/cache/cache.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { MockRecipesProvider } from './infrastructure/mock/mock-recipes.provider';
import { CookFromPantryUseCase } from './application/use-cases/cook-from-pantry.use-case';
import { PantryModule } from '../pantry/pantry.module';
import { ProfileModule } from '../profile/profile.module';

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
      provide: 'IRecipesCachePort',
      useClass: RecipesCache,
    },

    // External provider adapter
    MockRecipesProvider,
    SpoonacularClient,

    // ✅ switch provider without "new"
    {
      provide: 'IRecipesProviderPort',
      useFactory: (mock: MockRecipesProvider, spoon: SpoonacularClient) => {
        const mode = (
          process.env.RECIPES_PROVIDER_MODE ?? 'spoonacular'
        ).toLowerCase();
        return mode === 'mock' ? mock : spoon;
      },
      inject: [MockRecipesProvider, SpoonacularClient],
    },
  ],
  exports: [],
})
export class RecipesModule { }
