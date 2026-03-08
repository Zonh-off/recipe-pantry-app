import { Inject, Injectable } from '@nestjs/common';
import type { IGroceryRepository } from '../../domain/grocery.repository.interface';

@Injectable()
export class ClearCheckedItemsUseCase {
  constructor(
    @Inject('IGroceryRepository')
    private readonly repo: IGroceryRepository,
  ) {}

  async execute(userId: string): Promise<{ count: number }> {
    const count = await this.repo.clearChecked(userId);
    return { count };
  }
}
