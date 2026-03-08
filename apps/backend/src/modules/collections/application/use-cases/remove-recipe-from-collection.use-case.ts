import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type {
  ICollectionRepository,
  Collection,
} from '../../domain/collection.repository.interface';

@Injectable()
export class RemoveRecipeFromCollectionUseCase {
  constructor(
    @Inject('ICollectionRepository')
    private readonly repo: ICollectionRepository,
  ) {}

  async execute(
    userId: string,
    collectionId: string,
    recipeId: number,
  ): Promise<Collection> {
    const col = await this.repo.findById(collectionId);
    if (!col || col.userId !== userId) {
      throw new NotFoundException('Collection not found');
    }

    if (!col.recipeIds.includes(recipeId)) {
      return col; // Not in collection
    }

    const updated = await this.repo.update(collectionId, {
      recipeIds: col.recipeIds.filter((id) => id !== recipeId),
    });

    return updated;
  }
}
