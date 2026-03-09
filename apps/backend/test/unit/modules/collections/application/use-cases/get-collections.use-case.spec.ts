import { Test, TestingModule } from '@nestjs/testing';
import { GetCollectionsUseCase } from '../../../../../../src/modules/collections/application/use-cases/get-collections.use-case';

import {CollectionEntity} from "@modules/collections/domain/entities/collection.entity";

describe('GetCollectionsUseCase', () => {
  let useCase: GetCollectionsUseCase;
  let repo: any;

  beforeEach(async () => {
    repo = {
      findByUserId: jest.fn(),
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetCollectionsUseCase,
        { provide: 'ICollectionRepository', useValue: repo },
      ],
    }).compile();

    useCase = module.get<GetCollectionsUseCase>(GetCollectionsUseCase);
  });

  it('should return existing collections and NOT create a new "Saved" if it already exists', async () => {
    const userId = 'user-1';
    const existing = [new CollectionEntity('1', userId, 'Saved', [])];
    repo.findByUserId.mockResolvedValue(existing);

    const result = await useCase.execute(userId);

    expect(repo.create).not.toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Saved');
  });

  it('should create and return "Saved" collection if it does not exist', async () => {
    const userId = 'user-1';
    repo.findByUserId.mockResolvedValue([]);
    repo.create.mockResolvedValue(
      new CollectionEntity('new-id', userId, 'Saved', []),
    );

    const result = await useCase.execute(userId);

    expect(repo.create).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'Saved' }),
    );
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Saved');
  });
});
