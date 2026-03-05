import { Module } from '@nestjs/common';
import { GroceryController } from './transport/grocery.controller';
import { PrismaGroceryRepository } from './infrastructure/repositories-impl/prisma-grocery.repository';
import { GetGroceryListUseCase } from './application/use-cases/get-grocery-list.use-case';
import { AddGroceryItemUseCase } from './application/use-cases/add-grocery-item.use-case';
import { UpdateGroceryItemUseCase } from './application/use-cases/update-grocery-item.use-case';
import { RemoveGroceryItemUseCase } from './application/use-cases/remove-grocery-item.use-case';
import { ClearCheckedItemsUseCase } from './application/use-cases/clear-checked-items.use-case';
import { GenerateGroceryFromRecipeUseCase } from './application/use-cases/generate-grocery-from-recipe.use-case';
import { PrismaService } from '../../shared/database/prisma.service';

@Module({
    controllers: [GroceryController],
    providers: [
        PrismaService,
        GetGroceryListUseCase,
        AddGroceryItemUseCase,
        UpdateGroceryItemUseCase,
        RemoveGroceryItemUseCase,
        ClearCheckedItemsUseCase,
        GenerateGroceryFromRecipeUseCase,
        {
            provide: 'IGroceryRepository',
            useClass: PrismaGroceryRepository,
        },
    ],
    exports: [AddGroceryItemUseCase, GenerateGroceryFromRecipeUseCase],
})
export class GroceryModule { }
