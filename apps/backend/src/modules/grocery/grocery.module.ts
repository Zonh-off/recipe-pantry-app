import { Module } from '@nestjs/common';
import { DatabaseModule } from '@core/database/database.module';
import { GroceryController } from './transport/grocery.controller';
import {
  AddGroceryItemUseCase,
  ClearCheckedItemsUseCase,
  GenerateGroceryFromRecipeUseCase,
  GetGroceryListUseCase,
  RemoveGroceryItemUseCase,
  UpdateGroceryItemUseCase,
} from './application/use-cases';
import { GROCERY_REPOSITORY } from './domain/interfaces/grocery.repository.interface';
import { PrismaGroceryRepository } from './infrastructure/repositories/prisma-grocery.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [GroceryController],
  providers: [
    GetGroceryListUseCase,
    AddGroceryItemUseCase,
    UpdateGroceryItemUseCase,
    RemoveGroceryItemUseCase,
    ClearCheckedItemsUseCase,
    GenerateGroceryFromRecipeUseCase,
    {
      provide: GROCERY_REPOSITORY,
      useClass: PrismaGroceryRepository,
    },
  ],
})
export class GroceryModule {}
