import { Test, TestingModule } from '@nestjs/testing';
import { DeleteCollectionUseCase } from '../../../../../../src/modules/collections/application/use-cases/delete-collection.use-case';
import { Collection } from '../../../../../../src/modules/collections/domain/collection.repository.interface';
import { NotFoundException, BadRequestException } from '@nestjs/common';

describe('DeleteCollectionUseCase', () => {
  let useCase: DeleteCollectionUseCase;
  let repo: any;

  beforeEach(async () => {
    repo = {
      findById: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteCollectionUseCase,
        { provide: 'ICollectionRepository', useValue: repo },
      ],
    }).compile();

    useCase = module.get<DeleteCollectionUseCase>(DeleteCollectionUseCase);
  });

  it('should delete a collection if user owns it and it is not "Saved"', async () => {
    const userId = 'u1';
    const colId = 'c1';
    const col = new Collection(colId, userId, 'My Customs', []);

    repo.findById.mockResolvedValue(col);
    repo.delete.mockResolvedValue(undefined);

    await useCase.execute(userId, colId);

    expect(repo.findById).toHaveBeenCalledWith(colId);
    expect(repo.delete).toHaveBeenCalledWith(colId);
  });

  it('should throw BadRequestException if trying to delete "Saved" collection', async () => {
    const userId = 'u1';
    const colId = 'c1';
    const col = new Collection(colId, userId, 'Saved', []);

    repo.findById.mockResolvedValue(col);

    await expect(useCase.execute(userId, colId)).rejects.toThrow(
      BadRequestException,
    );
    expect(repo.delete).not.toHaveBeenCalled();
  });

  it('should throw NotFoundException if collection does not exist', async () => {
    repo.findById.mockResolvedValue(null);
    await expect(useCase.execute('u1', 'c1')).rejects.toThrow(
      NotFoundException,
    );
  });

  it('should throw NotFoundException if user does not own collection', async () => {
    repo.findById.mockResolvedValue(new Collection('c1', 'u2', 'Other', []));
    await expect(useCase.execute('u1', 'c1')).rejects.toThrow(
      NotFoundException,
    );
  });
});
