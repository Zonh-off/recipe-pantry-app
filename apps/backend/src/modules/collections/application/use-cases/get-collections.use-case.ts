import { Inject, Injectable } from '@nestjs/common';
import {
  COLLECTION_REPOSITORY,
  type ICollectionRepository,
} from '../../domain/repositories/collection.repository.interface';
import { CollectionEntity } from '@modules/collections/domain/entities/collection.entity';

@Injectable()
export class GetCollectionsUseCase {
  constructor(
    @Inject(COLLECTION_REPOSITORY)
    private readonly repo: ICollectionRepository,
  ) { }

  async execute(userId: string): Promise<CollectionEntity[]> {
    const collections = await this.repo.findByUserId(userId);

    // Rule 2.6: Include default "Saved" collection
    const hasSaved = collections.some((c) => c.name.toLowerCase() === 'saved');
    if (!hasSaved) {
      const saved = await this.repo.create({
        userId,
        name: 'Saved',
        recipeIds: [],
      });
      collections.push(saved);
    }

    // Ensure "Saved" collection is always first
    return collections.sort((a, b) => {
      if (a.name.toLowerCase() === 'saved') return -1;
      if (b.name.toLowerCase() === 'saved') return 1;
      return 0; // Maintain original order for others or sort by date/name if needed
    });
  }
}
