import { Test, TestingModule } from '@nestjs/testing';
import { AddRecipeToCollectionUseCase } from '../../../../../../src/modules/collections/application/use-cases/add-recipe-to-collection.use-case';
import { NotFoundException } from '@nestjs/common';
import {CollectionEntity} from "@modules/collections/domain/entities/collection.entity";

describe('AddRecipeToCollectionUseCase', () => {
  let useCase: AddRecipeToCollectionUseCase;
  let repo: any;

  beforeEach(async () => {
    repo = {
      findById: jest.fn(),
      update: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddRecipeToCollectionUseCase,
        { provide: 'ICollectionRepository', useValue: repo },
      ],
    }).compile();

    useCase = module.get<AddRecipeToCollectionUseCase>(
      AddRecipeToCollectionUseCase,
    );
  });

  it('should add a recipe id to the collection', async () => {
    const userId = 'user-1';
    const colId = 'c1';
    const recipeId = 716429;
    const col = new CollectionEntity(colId, userId, 'Saved', []);

    repo.findById.mockResolvedValue(col);
    repo.update.mockResolvedValue(
      new CollectionEntity(colId, userId, 'Saved', [recipeId]),
    );

    const result = await useCase.execute(userId, colId, recipeId);

    expect(repo.findById).toHaveBeenCalledWith(colId);
    expect(repo.update).toHaveBeenCalledWith(colId, {
      recipeIds: [recipeId],
    });
    expect(result.recipeIds).toContain(recipeId);
  });

  it('should throw NotFoundException if collection does not exist', async () => {
    repo.findById.mockResolvedValue(null);
    await expect(useCase.execute('u1', 'c1', 123)).rejects.toThrow(
      NotFoundException,
    );
  });

  it('should throw NotFoundException if user does not own collection', async () => {
    repo.findById.mockResolvedValue(new CollectionEntity('c1', 'u2', 'Other', []));
    await expect(useCase.execute('u1', 'c1', 123)).rejects.toThrow(
      NotFoundException,
    );
  });

  it('should NOT update if recipe id already in collection', async () => {
    const userId = 'user-1';
    const colId = 'c1';
    const recipeId = 716429;
    const col = new CollectionEntity(colId, userId, 'Saved', [recipeId]);

    repo.findById.mockResolvedValue(col);

    const result = await useCase.execute(userId, colId, recipeId);

    expect(repo.update).not.toHaveBeenCalled();
    expect(result).toEqual(col);
  });
});
