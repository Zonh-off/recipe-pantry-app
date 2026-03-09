import { Inject, Injectable } from '@nestjs/common';
import {
  GROCERY_REPOSITORY,
  type IGroceryRepository,
} from '../../domain/interfaces/grocery.repository.interface';
import { GroceryItemEntity } from '../../domain/entities/grocery-item.entity';

@Injectable()
export class AddGroceryItemUseCase {
  constructor(
    @Inject(GROCERY_REPOSITORY)
    private readonly repo: IGroceryRepository,
  ) {}

  async execute(
    userId: string,
    data: { name: string; amount?: number; unit?: string },
  ): Promise<GroceryItemEntity> {
    const existing = await this.repo.findByName(userId, data.name.trim());

    if (existing) {
      const newAmount = (existing.amount || 0) + (data.amount || 0);
      return this.repo.update(existing.id, {
        amount: newAmount,
        unit: data.unit || existing.unit,
      });
    }

    return this.repo.create({
      userId,
      name: data.name.trim(),
      amount: data.amount,
      unit: data.unit,
    });
  }
}
