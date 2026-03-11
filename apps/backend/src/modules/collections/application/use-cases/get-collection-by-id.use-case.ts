import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
    COLLECTION_REPOSITORY,
    type ICollectionRepository,
} from '../../domain/repositories/collection.repository.interface';
import { CollectionEntity } from '@modules/collections/domain/entities/collection.entity';

@Injectable()
export class GetCollectionByIdUseCase {
    constructor(
        @Inject(COLLECTION_REPOSITORY)
        private readonly repo: ICollectionRepository,
    ) { }

    async execute(userId: string, collectionId: string): Promise<CollectionEntity> {
        const collection = await this.repo.findById(collectionId);
        if (!collection) {
            throw new NotFoundException(`Collection cache with ID ${collectionId} not found.`);
        }

        if (collection.userId !== userId) {
            throw new NotFoundException(`Collection cache with ID ${collectionId} not found.`);
        }

        return collection;
    }
}
