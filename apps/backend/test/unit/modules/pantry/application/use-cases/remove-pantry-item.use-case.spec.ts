import { Test, TestingModule } from '@nestjs/testing';
import { RemovePantryItemUseCase } from '../../../../../../src/modules/pantry/application/use-cases/remove-pantry-item.use-case';
import { PantryItem } from '../../../../../../src/modules/pantry/domain/entities/pantry-item.entity';
import { UnauthorizedException } from '@nestjs/common';

describe('RemovePantryItemUseCase', () => {
  let useCase: RemovePantryItemUseCase;
  let pantryRepo: any;

  beforeEach(async () => {
    pantryRepo = {
      findByUserId: jest.fn(),
      removeItem: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemovePantryItemUseCase,
        { provide: 'IPantryRepository', useValue: pantryRepo },
      ],
    }).compile();

    useCase = module.get<RemovePantryItemUseCase>(RemovePantryItemUseCase);
  });

  it('should remove an item if found and owned by user', async () => {
    const userId = 'user-1';
    const itemId = 'uuid-1';
    const items = [new PantryItem(itemId, userId, 'tomato', 101, 2, 'pcs')];

    pantryRepo.findByUserId.mockResolvedValue(items);
    pantryRepo.removeItem.mockResolvedValue(undefined);

    await useCase.execute(userId, itemId);

    expect(pantryRepo.findByUserId).toHaveBeenCalledWith(userId);
    expect(pantryRepo.removeItem).toHaveBeenCalledWith(itemId);
  });

  it('should throw UnauthorizedException if item not found for user', async () => {
    const userId = 'user-1';
    const itemId = 'uuid-not-found';
    const items = [new PantryItem('uuid-1', userId, 'tomato', 101, 2, 'pcs')];

    pantryRepo.findByUserId.mockResolvedValue(items);

    await expect(useCase.execute(userId, itemId)).rejects.toThrow(
      UnauthorizedException,
    );
    expect(pantryRepo.removeItem).not.toHaveBeenCalled();
  });
});
