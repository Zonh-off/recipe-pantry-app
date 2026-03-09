import { Inject, Injectable } from '@nestjs/common';
import {
  GROCERY_REPOSITORY,
  type IGroceryRepository,
} from '../../domain/interfaces/grocery.repository.interface';
import { GroceryItemEntity } from '../../domain/entities/grocery-item.entity';

@Injectable()
export class GetGroceryListUseCase {
  constructor(
    @Inject(GROCERY_REPOSITORY)
    private readonly repo: IGroceryRepository,
  ) {}

  async execute(userId: string): Promise<GroceryItemEntity[]> {
    return this.repo.findByUserId(userId);
  }
}
