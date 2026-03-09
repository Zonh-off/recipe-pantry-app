import { Inject, Injectable } from '@nestjs/common';
import {
  GROCERY_REPOSITORY,
  type IGroceryRepository,
} from '../../domain/interfaces/grocery.repository.interface';

@Injectable()
export class ClearCheckedItemsUseCase {
  constructor(
    @Inject(GROCERY_REPOSITORY)
    private readonly repo: IGroceryRepository,
  ) {}

  async execute(userId: string): Promise<{ count: number }> {
    const count = await this.repo.clearChecked(userId);
    return { count };
  }
}
