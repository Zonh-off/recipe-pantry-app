import { Inject, Injectable } from '@nestjs/common';
import type { IGroceryRepository } from '../../domain/grocery.repository.interface';
import { GroceryItem } from '../../domain/grocery.repository.interface';

@Injectable()
export class GetGroceryListUseCase {
  constructor(
    @Inject('IGroceryRepository')
    private readonly repo: IGroceryRepository,
  ) {}

  async execute(userId: string): Promise<GroceryItem[]> {
    return this.repo.findByUserId(userId);
  }
}
