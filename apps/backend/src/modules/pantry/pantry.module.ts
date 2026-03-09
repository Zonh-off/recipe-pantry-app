import { Module } from '@nestjs/common';
import { DatabaseModule } from '@core/database/database.module';
import { PantryController } from './transport/controllers/pantry.controller';
import { PANTRY_REPOSITORY } from '@modules/pantry/domain/repositories/pantry-repository.interface';
import { INGREDIENT_SERVICE } from '@modules/pantry/domain/services/ingredient-service.interface';
import { PrismaPantryRepository } from './infrastructure/repositories/prisma-pantry.repository';
import { MockIngredientService } from './infrastructure/services/mock-ingredient.service';
import {
  AddPantryItemUseCase,
  GetPantryItemsUseCase,
  GetPantrySuggestionsUseCase,
  RemovePantryItemUseCase,
  UpdatePantryItemUseCase,
} from './application/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [PantryController],
  providers: [
    {
      provide: PANTRY_REPOSITORY,
      useClass: PrismaPantryRepository,
    },
    {
      provide: INGREDIENT_SERVICE,
      useClass: MockIngredientService,
    },
    AddPantryItemUseCase,
    GetPantryItemsUseCase,
    RemovePantryItemUseCase,
    UpdatePantryItemUseCase,
    GetPantrySuggestionsUseCase,
  ],
  exports: [PANTRY_REPOSITORY],
})
export class PantryModule {}
