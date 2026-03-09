import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  GROCERY_REPOSITORY,
  type IGroceryRepository,
} from '../../domain/interfaces/grocery.repository.interface';
import { GroceryItemEntity } from '../../domain/entities/grocery-item.entity';

@Injectable()
export class UpdateGroceryItemUseCase {
  constructor(
    @Inject(GROCERY_REPOSITORY)
    private readonly repo: IGroceryRepository,
  ) {}

  async execute(
    userId: string,
    id: string,
    data: { name?: string; amount?: number; unit?: string; checked?: boolean },
  ): Promise<GroceryItemEntity> {
    const item = await this.repo.findById(id);
    if (!item || item.userId !== userId) {
      throw new NotFoundException('Grocery item not found');
    }

    return this.repo.update(id, data);
  }
}
