import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  GROCERY_REPOSITORY,
  type IGroceryRepository,
} from '../../domain/interfaces/grocery.repository.interface';

@Injectable()
export class RemoveGroceryItemUseCase {
  constructor(
    @Inject(GROCERY_REPOSITORY)
    private readonly repo: IGroceryRepository,
  ) {}

  async execute(userId: string, id: string): Promise<void> {
    const item = await this.repo.findById(id);
    if (!item || item.userId !== userId) {
      throw new NotFoundException('Grocery item not found');
    }

    await this.repo.delete(id);
  }
}
