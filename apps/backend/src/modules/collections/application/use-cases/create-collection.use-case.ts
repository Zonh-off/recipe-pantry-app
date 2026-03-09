import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import {
  COLLECTION_REPOSITORY,
  type ICollectionRepository,
} from '../../domain/repositories/collection.repository.interface';
import { CollectionEntity } from '@modules/collections/domain/entities/collection.entity';

@Injectable()
export class CreateCollectionUseCase {
  constructor(
    @Inject(COLLECTION_REPOSITORY)
    private readonly repo: ICollectionRepository,
  ) {}

  async execute(userId: string, name: string): Promise<CollectionEntity> {
    const existing = await this.repo.findByName(userId, name);
    if (existing) {
      throw new BadRequestException(`Collection "${name}" already exists`);
    }

    return this.repo.create({
      userId,
      name,
      recipeIds: [],
    });
  }
}
