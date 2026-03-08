import {
  Inject,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import type { ICollectionRepository } from '../../domain/collection.repository.interface';

@Injectable()
export class DeleteCollectionUseCase {
  constructor(
    @Inject('ICollectionRepository')
    private readonly repo: ICollectionRepository,
  ) {}

  async execute(userId: string, id: string): Promise<void> {
    const col = await this.repo.findById(id);
    if (!col || col.userId !== userId) {
      throw new NotFoundException('Collection not found');
    }

    if (col.name.toLowerCase() === 'saved') {
      throw new BadRequestException('Cannot delete default "Saved" collection');
    }

    return this.repo.delete(id);
  }
}
