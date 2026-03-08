import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { IGroceryRepository } from '../../domain/grocery.repository.interface';
import { GroceryItem } from '../../domain/grocery.repository.interface';

@Injectable()
export class UpdateGroceryItemUseCase {
  constructor(
    @Inject('IGroceryRepository')
    private readonly repo: IGroceryRepository,
  ) {}

  async execute(
    userId: string,
    id: string,
    data: { name?: string; amount?: number; unit?: string; checked?: boolean },
  ): Promise<GroceryItem> {
    const item = await this.repo.findById(id);
    if (!item || item.userId !== userId) {
      throw new NotFoundException('Grocery item not found');
    }

    return this.repo.update(id, data);
  }
}
