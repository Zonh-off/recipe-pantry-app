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

@Injectable()
export class DeleteCollectionUseCase {
  constructor(
    @Inject(COLLECTION_REPOSITORY)
    private readonly repo: ICollectionRepository,
  ) {}

  async execute(userId: string, id: string): Promise<void> {
    const col = await this.repo.findById(id);
    if (!col || col.userId !== userId) {
      throw new NotFoundException('CollectionEntity not found');
    }

    if (col.name.toLowerCase() === 'saved') {
      throw new BadRequestException('Cannot delete default "Saved" collection');
    }

    return this.repo.delete(id);
  }
}
