import { CollectionEntity } from '@modules/collections/domain/entities/collection.entity';

export const COLLECTION_REPOSITORY = Symbol('COLLECTION_REPOSITORY');

export interface ICollectionRepository {
  create(data: Partial<CollectionEntity>): Promise<CollectionEntity>;
  update(
    id: string,
    data: Partial<CollectionEntity>,
  ): Promise<CollectionEntity>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<CollectionEntity | null>;
  findByUserId(userId: string): Promise<CollectionEntity[]>;
  findByName(userId: string, name: string): Promise<CollectionEntity | null>;
}
