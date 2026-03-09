import { Inject } from '@nestjs/common';
import {
  type IPantryRepository,
  PANTRY_REPOSITORY,
} from '../../domain/repositories/pantry-repository.interface';
import { PantryItem } from '../../domain/entities/pantry-item.entity';

export class GetPantryItemsUseCase {
  constructor(
    @Inject(PANTRY_REPOSITORY)
    private readonly pantryRepo: IPantryRepository,
  ) {}

  async execute(userId: string): Promise<PantryItem[]> {
    return this.pantryRepo.findByUserId(userId);
  }
}
