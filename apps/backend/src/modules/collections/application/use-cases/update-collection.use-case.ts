import {
    Inject,
    Injectable,
    NotFoundException,
    BadRequestException,
} from '@nestjs/common';
import {
    COLLECTION_REPOSITORY,
    type ICollectionRepository,
} from '../../domain/repositories/collection.repository.interface';
import { CollectionEntity } from '@modules/collections/domain/entities/collection.entity';

@Injectable()
export class UpdateCollectionUseCase {
    constructor(
        @Inject(COLLECTION_REPOSITORY)
        private readonly repo: ICollectionRepository,
    ) { }

    async execute(userId: string, collectionId: string, name: string): Promise<CollectionEntity> {
        const collection = await this.repo.findById(collectionId);
        if (!collection) {
            throw new NotFoundException(`Collection with ID ${collectionId} not found.`);
        }

        if (collection.userId !== userId) {
            throw new NotFoundException(`Collection with ID ${collectionId} not found.`);
        }

        if (collection.name.toLowerCase() === 'saved') {
            throw new BadRequestException('Cannot rename the default "Saved" collection.');
        }

        // Optional Check: verify if the new name already exists
        const existing = await this.repo.findByName(userId, name);
        if (existing && existing.id !== collectionId) {
            throw new BadRequestException(`Collection "${name}" already exists.`);
        }

        return this.repo.update(collectionId, { name });
    }
}
