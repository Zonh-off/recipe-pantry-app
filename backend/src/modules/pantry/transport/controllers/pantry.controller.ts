import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { AddPantryItemUseCase } from '../../application/use-cases/add-pantry-item.use-case';
import { GetPantryItemsUseCase } from '../../application/use-cases/get-pantry-items.use-case';
import { RemovePantryItemUseCase } from '../../application/use-cases/remove-pantry-item.use-case';
import { UpdatePantryItemUseCase } from '../../application/use-cases/update-pantry-item.use-case';
import { GetPantrySuggestionsUseCase } from '../../application/use-cases/get-pantry-suggestions.use-case';
import { AddPantryItemDto } from '../dto/add-pantry-item.dto';
import { UpdatePantryItemDto } from '../dto/update-pantry-item.dto';

@ApiTags('Pantry')
@Controller('pantry')
export class PantryController {
  constructor(
    private readonly addPantryItemUseCase: AddPantryItemUseCase,
    private readonly getPantryItemsUseCase: GetPantryItemsUseCase,
    private readonly removePantryItemUseCase: RemovePantryItemUseCase,
    private readonly updatePantryItemUseCase: UpdatePantryItemUseCase,
    private readonly getSuggestionsUC: GetPantrySuggestionsUseCase,
  ) { }

  @ApiOperation({ summary: 'Get suggestions for common pantry items' })
  @Get('suggestions')
  async getSuggestions() {
    return this.getSuggestionsUC.execute();
  }

  @ApiOperation({ summary: 'Add a new ingredient to the user pantry' })
  @Post()
  async addItem(@Body() dto: AddPantryItemDto) {
    const userId = 'dev-user-001';
    return this.addPantryItemUseCase.execute({
      userId,
      ...dto,
    });
  }

  @ApiOperation({ summary: 'List all ingredients currently in the user pantry' })
  @Get()
  async getItems() {
    const userId = 'dev-user-001';
    return this.getPantryItemsUseCase.execute(userId);
  }

  @ApiOperation({ summary: 'Update amount or unit of a specific pantry item' })
  @ApiParam({ name: 'id', description: 'Internal Pantry Item ID' })
  @Patch(':id')
  async updateItem(@Param('id') id: string, @Body() dto: UpdatePantryItemDto) {
    const userId = 'dev-user-001';
    return this.updatePantryItemUseCase.execute(userId, id, dto);
  }

  @ApiOperation({ summary: 'Remove an item from the pantry' })
  @ApiParam({ name: 'id', description: 'Internal Pantry Item ID' })
  @Delete(':id')
  async removeItem(@Param('id') id: string) {
    const userId = 'dev-user-001';
    return this.removePantryItemUseCase.execute(userId, id);
  }
}
