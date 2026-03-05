import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { GetCollectionsUseCase } from '../application/use-cases/get-collections.use-case';
import { CreateCollectionUseCase } from '../application/use-cases/create-collection.use-case';
import { AddRecipeToCollectionUseCase } from '../application/use-cases/add-recipe-to-collection.use-case';
import { RemoveRecipeFromCollectionUseCase } from '../application/use-cases/remove-recipe-from-collection.use-case';
import { DeleteCollectionUseCase } from '../application/use-cases/delete-collection.use-case';
import { CreateCollectionDto } from './dto/create-collection.dto';

@ApiTags('Collections')
@Controller('collections')
export class CollectionsController {
    constructor(
        private readonly getCollections: GetCollectionsUseCase,
        private readonly createCollection: CreateCollectionUseCase,
        private readonly addRecipe: AddRecipeToCollectionUseCase,
        private readonly removeRecipe: RemoveRecipeFromCollectionUseCase,
        private readonly deleteCollectionUC: DeleteCollectionUseCase,
    ) { }

    @ApiOperation({ summary: 'List all recipe collections for the current user' })
    @Get()
    async list() {
        const userId = 'dev-user-001';
        return this.getCollections.execute(userId);
    }

    @ApiOperation({ summary: 'Create a new custom recipe collection' })
    @Post()
    async create(@Body() dto: CreateCollectionDto) {
        const userId = 'dev-user-001';
        return this.createCollection.execute(userId, dto.name);
    }

    @ApiOperation({ summary: 'Add a recipe to a specific collection' })
    @ApiParam({ name: 'id', description: 'Internal Collection ID', example: 'clv...' })
    @ApiParam({ name: 'recipeId', description: 'Recipe ID from Spoonacular', example: 716429 })
    @Post(':id/recipes/:recipeId')
    async add(@Param('id') id: string, @Param('recipeId') recipeId: string) {
        const userId = 'dev-user-001';
        return this.addRecipe.execute(userId, id, Number(recipeId));
    }

    @ApiOperation({ summary: 'Remove a recipe from a specific collection' })
    @ApiParam({ name: 'id', description: 'Internal Collection ID', example: 'clv...' })
    @ApiParam({ name: 'recipeId', description: 'Recipe ID from Spoonacular', example: 716429 })
    @Delete(':id/recipes/:recipeId')
    async remove(@Param('id') id: string, @Param('recipeId') recipeId: string) {
        const userId = 'dev-user-001';
        return this.removeRecipe.execute(userId, id, Number(recipeId));
    }

    @ApiOperation({ summary: 'Delete an entire custom collection (except "Saved")' })
    @ApiParam({ name: 'id', description: 'Internal Collection ID', example: 'clv...' })
    @Delete(':id')
    async deleteCollection(@Param('id') id: string) {
        const userId = 'dev-user-001';
        return this.deleteCollectionUC.execute(userId, id);
    }
}
