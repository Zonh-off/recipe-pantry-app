import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import type { ICollectionRepository, Collection } from '../../domain/collection.repository.interface';

@Injectable()
export class CreateCollectionUseCase {
    constructor(
        @Inject('ICollectionRepository')
        private readonly repo: ICollectionRepository,
    ) { }

    async execute(userId: string, name: string): Promise<Collection> {
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
