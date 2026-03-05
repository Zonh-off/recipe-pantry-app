import { Module } from '@nestjs/common';
import { PantryController } from './transport/controllers/pantry.controller';
import { PrismaService } from '../../shared/database/prisma.service';
import { PrismaPantryRepository } from './infrastructure/repositories-impl/prisma-pantry.repository';
import { MockIngredientService } from './infrastructure/adapters-impl/mock-ingredient.service';
import { AddPantryItemUseCase } from './application/use-cases/add-pantry-item.use-case';
import { GetPantryItemsUseCase } from './application/use-cases/get-pantry-items.use-case';
import { RemovePantryItemUseCase } from './application/use-cases/remove-pantry-item.use-case';
import { UpdatePantryItemUseCase } from './application/use-cases/update-pantry-item.use-case';
import { GetPantrySuggestionsUseCase } from './application/use-cases/get-pantry-suggestions.use-case';

@Module({
  controllers: [PantryController],
  providers: [
    PrismaService,
    {
      provide: 'IPantryRepository',
      useClass: PrismaPantryRepository,
    },
    {
      provide: 'IIngredientService',
      useClass: MockIngredientService,
    },
    AddPantryItemUseCase,
    GetPantryItemsUseCase,
    RemovePantryItemUseCase,
    UpdatePantryItemUseCase,
    GetPantrySuggestionsUseCase,
  ],
  exports: [
    'IPantryRepository',
    AddPantryItemUseCase,
    GetPantryItemsUseCase,
    RemovePantryItemUseCase,
    UpdatePantryItemUseCase,
    GetPantrySuggestionsUseCase,
  ],
})
export class PantryModule { }
