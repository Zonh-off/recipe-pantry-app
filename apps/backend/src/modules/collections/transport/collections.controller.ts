import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  AddRecipeToCollectionUseCase,
  CreateCollectionUseCase,
  DeleteCollectionUseCase,
  GetCollectionsUseCase,
  RemoveRecipeFromCollectionUseCase,
} from '../application/use-cases';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { CurrentUser } from '@common/decorators';

@ApiBearerAuth('bearer')
@ApiTags('Collections')
@Controller('collections')
export class CollectionsController {
  constructor(
    private readonly getCollections: GetCollectionsUseCase,
    private readonly createCollection: CreateCollectionUseCase,
    private readonly addRecipe: AddRecipeToCollectionUseCase,
    private readonly removeRecipe: RemoveRecipeFromCollectionUseCase,
    private readonly deleteCollectionUC: DeleteCollectionUseCase,
  ) {}

  @ApiOperation({ summary: 'List all recipe collections for the current user' })
  @Get()
  async list(@CurrentUser() userId: string) {
    return this.getCollections.execute(userId);
  }

  @ApiOperation({ summary: 'Create a new custom recipe collection' })
  @Post()
  async create(
    @CurrentUser() userId: string,
    @Body() dto: CreateCollectionDto,
  ) {
    return this.createCollection.execute(userId, dto.name);
  }

  @ApiOperation({ summary: 'Add a recipe to a specific collection' })
  @ApiParam({
    name: 'id',
    description: 'Internal CollectionEntity ID',
    example: 'clv...',
  })
  @ApiParam({
    name: 'recipeId',
    description: 'Recipe ID from Spoonacular',
    example: 716429,
  })
  @Post(':id/recipes/:recipeId')
  async add(
    @CurrentUser() userId: string,
    @Param('id') id: string,
    @Param('recipeId') recipeId: string,
  ) {
    return this.addRecipe.execute(userId, id, Number(recipeId));
  }

  @ApiOperation({ summary: 'Remove a recipe from a specific collection' })
  @ApiParam({
    name: 'id',
    description: 'Internal CollectionEntity ID',
    example: 'clv...',
  })
  @ApiParam({
    name: 'recipeId',
    description: 'Recipe ID from Spoonacular',
    example: 716429,
  })
  @Delete(':id/recipes/:recipeId')
  async remove(
    @CurrentUser() userId: string,
    @Param('id') id: string,
    @Param('recipeId') recipeId: string,
  ) {
    return this.removeRecipe.execute(userId, id, Number(recipeId));
  }

  @ApiOperation({
    summary: 'Delete an entire custom collection (except "Saved")',
  })
  @ApiParam({
    name: 'id',
    description: 'Internal CollectionEntity ID',
    example: 'clv...',
  })
  @Delete(':id')
  async deleteCollection(
    @CurrentUser() userId: string,
    @Param('id') id: string,
  ) {
    return this.deleteCollectionUC.execute(userId, id);
  }
}
