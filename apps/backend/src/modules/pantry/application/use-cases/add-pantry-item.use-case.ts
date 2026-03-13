import { Inject } from '@nestjs/common';
import { PantryItem } from '../../domain/entities/pantry-item.entity';
import {
  type IPantryRepository,
  PANTRY_REPOSITORY,
} from '../../domain/repositories/pantry-repository.interface';
import {
  type IIngredientService,
  INGREDIENT_SERVICE,
} from '../../domain/services/ingredient-service.interface';

export interface PantryItemData {
  userId: string;
  ingredientName: string;
  amount?: number;
  unit?: string;
}

export class AddPantryItemUseCase {
  constructor(
    @Inject(PANTRY_REPOSITORY)
    private readonly pantryRepo: IPantryRepository,
    @Inject(INGREDIENT_SERVICE)
    private readonly ingredientService: IIngredientService,
  ) { }

  async execute(data: PantryItemData): Promise<PantryItem> {
    const normalized = await this.ingredientService.normalize(
      data.ingredientName,
    );

    const existing = await this.pantryRepo.findByIngredientId(
      data.userId,
      normalized.id,
    );

    if (existing) {
      const updated = await this.pantryRepo.updateItem(existing.id, {
        amount: (existing.amount || 0) + (data.amount || 0),
        unit: data.unit || existing.unit,
      });
      return updated;
    }

    return this.pantryRepo.addItem({
      userId: data.userId,
      name: normalized.name,
      ingredientId: normalized.id,
      amount: data.amount,
      unit: data.unit,
    });
  }
}
