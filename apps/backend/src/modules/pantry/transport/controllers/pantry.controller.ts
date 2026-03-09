import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  AddPantryItemUseCase,
  GetPantryItemsUseCase,
  GetPantrySuggestionsUseCase,
  RemovePantryItemUseCase,
  UpdatePantryItemUseCase,
} from '../../application/use-cases';
import { CurrentUser } from '@common/decorators';
import { AddPantryItemDto } from '../dto/add-pantry-item.dto';
import { UpdatePantryItemDto } from '../dto/update-pantry-item.dto';

@ApiBearerAuth('bearer')
@ApiTags('Pantry')
@Controller('pantry')
export class PantryController {
  constructor(
    private readonly addPantryItemUseCase: AddPantryItemUseCase,
    private readonly getPantryItemsUseCase: GetPantryItemsUseCase,
    private readonly removePantryItemUseCase: RemovePantryItemUseCase,
    private readonly updatePantryItemUseCase: UpdatePantryItemUseCase,
    private readonly getSuggestionsUC: GetPantrySuggestionsUseCase,
  ) {}

  @ApiOperation({ summary: 'Get suggestions for common pantry items' })
  @Get('suggestions')
  async getSuggestions() {
    return this.getSuggestionsUC.execute();
  }

  @ApiOperation({ summary: 'Add a new ingredient to the user pantry' })
  @Post()
  async addItem(@CurrentUser() userId: string, @Body() dto: AddPantryItemDto) {
    return this.addPantryItemUseCase.execute({
      userId,
      ...dto,
    });
  }

  @ApiOperation({
    summary: 'List all ingredients currently in the user pantry',
  })
  @Get()
  async getItems(@CurrentUser() userId: string) {
    return this.getPantryItemsUseCase.execute(userId);
  }

  @ApiOperation({ summary: 'Update amount or unit of a specific pantry item' })
  @ApiParam({ name: 'id', description: 'Internal Pantry Item ID' })
  @Patch(':id')
  async updateItem(
    @CurrentUser() userId: string,
    @Param('id') id: string,
    @Body() dto: UpdatePantryItemDto,
  ) {
    return this.updatePantryItemUseCase.execute(userId, id, dto);
  }

  @ApiOperation({ summary: 'Remove an item from the pantry' })
  @ApiParam({ name: 'id', description: 'Internal Pantry Item ID' })
  @Delete(':id')
  async removeItem(@CurrentUser() userId: string, @Param('id') id: string) {
    return this.removePantryItemUseCase.execute(userId, id);
  }
}
