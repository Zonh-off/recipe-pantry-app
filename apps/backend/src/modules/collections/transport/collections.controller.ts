import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
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
  GetCollectionByIdUseCase,
  UpdateCollectionUseCase,
} from '../application/use-cases';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
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
    private readonly getCollectionById: GetCollectionByIdUseCase,
    private readonly updateCollectionUC: UpdateCollectionUseCase,
  ) { }

  @ApiOperation({ summary: 'List all recipe collections for the current user' })
  @Get()
  async list(@CurrentUser() userId: string) {
    return this.getCollections.execute(userId);
  }

  @ApiOperation({ summary: 'Get details of a specific collection' })
  @ApiParam({
    name: 'id',
    description: 'Internal CollectionEntity ID',
    example: 'clv...',
  })
  @Get(':id')
  async getOne(@CurrentUser() userId: string, @Param('id') id: string) {
    return this.getCollectionById.execute(userId, id);
  }

  @ApiOperation({ summary: 'Create a new custom recipe collection' })
  @Post()
  async create(
    @CurrentUser() userId: string,
    @Body() dto: CreateCollectionDto,
  ) {
    return this.createCollection.execute(userId, dto.name);
  }

  @ApiOperation({ summary: 'Update an existing recipe collection (e.g. rename)' })
  @ApiParam({
    name: 'id',
    description: 'Internal CollectionEntity ID',
    example: 'clv...',
  })
  @Patch(':id')
  async update(
    @CurrentUser() userId: string,
    @Param('id') id: string,
    @Body() dto: UpdateCollectionDto,
  ) {
    return this.updateCollectionUC.execute(userId, id, dto.name);
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
