import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  COLLECTION_REPOSITORY,
  type ICollectionRepository,
} from '../../domain/repositories/collection.repository.interface';
import { CollectionEntity } from '../../domain/entities/collection.entity';

@Injectable()
export class AddRecipeToCollectionUseCase {
  constructor(
    @Inject(COLLECTION_REPOSITORY)
    private readonly repo: ICollectionRepository,
  ) {}

  async execute(
    userId: string,
    collectionId: string,
    recipeId: number,
  ): Promise<CollectionEntity> {
    const col = await this.repo.findById(collectionId);
    if (!col || col.userId !== userId) {
      throw new NotFoundException('CollectionEntity not found');
    }

    if (col.recipeIds.includes(recipeId)) {
      return col; // Already exists
    }

    const updated = await this.repo.update(collectionId, {
      recipeIds: [...col.recipeIds, recipeId],
    });

    return updated;
  }
}
