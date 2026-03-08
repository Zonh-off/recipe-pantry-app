import { Test, TestingModule } from '@nestjs/testing';
import { RemoveRecipeFromCollectionUseCase } from '../../../../../../src/modules/collections/application/use-cases/remove-recipe-from-collection.use-case';
import { Collection } from '../../../../../../src/modules/collections/domain/collection.repository.interface';
import { NotFoundException } from '@nestjs/common';

describe('RemoveRecipeFromCollectionUseCase', () => {
  let useCase: RemoveRecipeFromCollectionUseCase;
  let repo: any;

  beforeEach(async () => {
    repo = {
      findById: jest.fn(),
      update: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveRecipeFromCollectionUseCase,
        { provide: 'ICollectionRepository', useValue: repo },
      ],
    }).compile();

    useCase = module.get<RemoveRecipeFromCollectionUseCase>(
      RemoveRecipeFromCollectionUseCase,
    );
  });

  it('should remove a recipe id from the collection', async () => {
    const userId = 'u1';
    const colId = 'c1';
    const recipeId = 123;
    const col = new Collection(colId, userId, 'Saved', [recipeId]);

    repo.findById.mockResolvedValue(col);
    repo.update.mockResolvedValue(new Collection(colId, userId, 'Saved', []));

    const result = await useCase.execute(userId, colId, recipeId);

    expect(repo.findById).toHaveBeenCalledWith(colId);
    expect(repo.update).toHaveBeenCalledWith(colId, {
      recipeIds: [],
    });
    expect(result.recipeIds).not.toContain(recipeId);
  });

  it('should throw NotFoundException if collection does not exist', async () => {
    repo.findById.mockResolvedValue(null);
    await expect(useCase.execute('u1', 'c1', 123)).rejects.toThrow(
      NotFoundException,
    );
  });

  it('should throw NotFoundException if user does not own collection', async () => {
    repo.findById.mockResolvedValue(new Collection('c1', 'u2', 'Other', [123]));
    await expect(useCase.execute('u1', 'c1', 123)).rejects.toThrow(
      NotFoundException,
    );
  });

  it('should NOT update if recipe id not in collection', async () => {
    const userId = 'u1';
    const colId = 'c1';
    const recipeId = 716429;
    const col = new Collection(colId, userId, 'Saved', [456]);

    repo.findById.mockResolvedValue(col);

    const result = await useCase.execute(userId, colId, recipeId);

    expect(repo.update).not.toHaveBeenCalled();
    expect(result).toEqual(col);
  });
});
