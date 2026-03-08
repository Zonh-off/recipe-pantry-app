import { Inject, Injectable } from '@nestjs/common';
import type {
  ICollectionRepository,
  Collection,
} from '../../domain/collection.repository.interface';

@Injectable()
export class GetCollectionsUseCase {
  constructor(
    @Inject('ICollectionRepository')
    private readonly repo: ICollectionRepository,
  ) {}

  async execute(userId: string): Promise<Collection[]> {
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

    return collections;
  }
}
