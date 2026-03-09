import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  AddGroceryItemUseCase,
  ClearCheckedItemsUseCase,
  GenerateGroceryFromRecipeUseCase,
  GetGroceryListUseCase,
  RemoveGroceryItemUseCase,
  UpdateGroceryItemUseCase,
} from '../application/use-cases';
import {
  BulkAddItemDto,
  CreateGroceryItemDto,
  UpdateGroceryItemDto,
} from './dto/grocery.dto';
import { CurrentUser } from '@common/decorators';

@ApiBearerAuth('bearer')
@ApiTags('Grocery')
@Controller('grocery')
export class GroceryController {
  constructor(
    private readonly getListUC: GetGroceryListUseCase,
    private readonly addItemUC: AddGroceryItemUseCase,
    private readonly updateItemUC: UpdateGroceryItemUseCase,
    private readonly removeItemUC: RemoveGroceryItemUseCase,
    private readonly clearCheckedUC: ClearCheckedItemsUseCase,
    private readonly bulkAddUC: GenerateGroceryFromRecipeUseCase,
  ) {}

  @ApiOperation({
    summary:
      'Add multiple items to the grocery list (useful for importing recipe missed ingredients)',
  })
  @Post('bulk')
  async bulkAdd(@CurrentUser() userId: string, @Body() dto: BulkAddItemDto) {
    return this.bulkAddUC.execute(userId, dto.items);
  }

  @ApiOperation({ summary: 'Get current user grocery list' })
  @Get()
  async getList(@CurrentUser() userId: string) {
    return this.getListUC.execute(userId);
  }

  @ApiOperation({ summary: 'Add an item to the grocery list' })
  @Post()
  async addItem(
    @CurrentUser() userId: string,
    @Body() dto: CreateGroceryItemDto,
  ) {
    return this.addItemUC.execute(userId, dto);
  }

  @ApiOperation({
    summary: 'Update a grocery item (checked status, amount, name)',
  })
  @ApiParam({ name: 'id', description: 'Grocery Item ID' })
  @Patch(':id')
  async updateItem(
    @CurrentUser() userId: string,
    @Param('id') id: string,
    @Body() dto: UpdateGroceryItemDto,
  ) {
    return this.updateItemUC.execute(userId, id, dto);
  }

  @ApiOperation({ summary: 'Remove an item from the grocery list' })
  @ApiParam({ name: 'id', description: 'Grocery Item ID' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeItem(@CurrentUser() userId: string, @Param('id') id: string) {
    await this.removeItemUC.execute(userId, id);
  }

  @ApiOperation({ summary: 'Bulk remove all checked items' })
  @Delete('clear/checked')
  async clearChecked(@CurrentUser() userId: string) {
    return this.clearCheckedUC.execute(userId);
  }
}
