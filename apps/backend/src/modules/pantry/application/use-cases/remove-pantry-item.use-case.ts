import { Inject, UnauthorizedException } from '@nestjs/common';
import {
  type IPantryRepository,
  PANTRY_REPOSITORY,
} from '../../domain/repositories/pantry-repository.interface';

export class RemovePantryItemUseCase {
  constructor(
    @Inject(PANTRY_REPOSITORY)
    private readonly pantryRepo: IPantryRepository,
  ) {}

  async execute(userId: string, id: string): Promise<void> {
    const items = await this.pantryRepo.findByUserId(userId);
    const item = items.find((i) => i.id === id);

    if (!item) {
      throw new UnauthorizedException('Item not found or access denied');
    }

    return this.pantryRepo.removeItem(id);
  }
}
