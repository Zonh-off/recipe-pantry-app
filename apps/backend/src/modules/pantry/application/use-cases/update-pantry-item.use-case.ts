import { Inject, UnauthorizedException } from '@nestjs/common';
import {
  type IPantryRepository,
  PANTRY_REPOSITORY,
} from '../../domain/repositories/pantry-repository.interface';
import { PantryItem } from '../../domain/entities/pantry-item.entity';

export interface UpdatePantryItemData {
  amount?: number;
  unit?: string;
}

export class UpdatePantryItemUseCase {
  constructor(
    @Inject(PANTRY_REPOSITORY)
    private readonly pantryRepo: IPantryRepository,
  ) {}

  async execute(
    userId: string,
    id: string,
    data: UpdatePantryItemData,
  ): Promise<PantryItem> {
    const items = await this.pantryRepo.findByUserId(userId);
    const item = items.find((i) => i.id === id);

    if (!item) {
      throw new UnauthorizedException('Item not found or access denied');
    }

    return this.pantryRepo.updateItem(id, {
      amount: data.amount ?? item.amount,
      unit: data.unit ?? item.unit,
    });
  }
}
