import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SearchRecipesQueryDto } from './dto/search-recipes.query.dto';
import { SearchRecipesUseCase } from '../application/use-cases/search-recipes.use-case';
import { GetRecipeDetailsUseCase } from '../application/use-cases/get-recipe-details.use-case';
import { ApiParam, ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';
import { CookFromPantryQueryDto } from './dto/cook-from-pantry.query.dto';
import { CookFromPantryUseCase } from '../application/use-cases/cook-from-pantry.use-case';
import { GetPopularRecipesUseCase } from '../application/use-cases/get-popular-recipes.use-case';
import { GetCategoriesUseCase } from '../application/use-cases/get-categories.use-case';
import { GetRecommendationsUseCase } from '../application/use-cases/get-recommendations.use-case';
import { GetPopularQueryDto } from './dto/get-popular.query.dto';

@ApiTags('Recipes')
@Controller('recipes')
export class RecipesController {
  constructor(
    private readonly searchRecipes: SearchRecipesUseCase,
    private readonly getDetails: GetRecipeDetailsUseCase,
    private readonly cookFromPantryUC: CookFromPantryUseCase,
    private readonly getPopularUC: GetPopularRecipesUseCase,
    private readonly getCategoriesUC: GetCategoriesUseCase,
    private readonly getRecommendationsUC: GetRecommendationsUseCase,
  ) { }

  @ApiOperation({ summary: 'Search for recipes with various filters' })
  @ApiQuery({
    name: 'query',
    type: String,
    example: 'pasta',
    description: 'Search query string',
    required: false,
  })
  @Get('search')
  search(@Query() query: SearchRecipesQueryDto) {
    return this.searchRecipes.execute({
      query: query.query,
      diet: query.diet,
      intolerances: query.intolerances,
      cuisine: query.cuisine,
      maxReadyTime: query.maxReadyTime,
      minCalories: query.minCalories,
      maxCalories: query.maxCalories,
      page: query.page,
      pageSize: query.pageSize,
    });
  }

  @ApiOperation({ summary: 'Get popular/trending recipes' })
  @Get('popular')
  popular(@Query() query: GetPopularQueryDto) {
    return this.getPopularUC.execute({
      category: query.category,
      limit: query.limit,
    });
  }

  @ApiOperation({ summary: 'Get list of curated recipe categories' })
  @Get('categories')
  categories() {
    return this.getCategoriesUC.execute();
  }

  @ApiOperation({ summary: 'Get personalized recipe recommendations for the user' })
  @Get('recommendations')
  recommendations() {
    const userId = 'dev-user-001';
    return this.getRecommendationsUC.execute({
      userId,
      limit: 12,
    });
  }

  @ApiOperation({ summary: 'Get full details of a specific recipe' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 716429,
    description: 'Recipe ID',
  })
  @Get(':id')
  details(@Param('id') id: string) {
    return this.getDetails.execute(Number(id));
  }

  @ApiOperation({ summary: 'Find recipes based on current pantry ingredients' })
  @Post('cook-from-pantry')
  cookFromPantry(@Query() q: CookFromPantryQueryDto) {
    const userId = 'dev-user-001';
    return this.cookFromPantryUC.execute(userId, q.maxMissing, q.limit);
  }
}
