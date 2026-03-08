import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { IGroceryRepository } from '../../domain/grocery.repository.interface';

@Injectable()
export class RemoveGroceryItemUseCase {
  constructor(
    @Inject('IGroceryRepository')
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
