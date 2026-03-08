import { Test, TestingModule } from '@nestjs/testing';
import { GetPantryItemsUseCase } from '../../../../../../src/modules/pantry/application/use-cases/get-pantry-items.use-case';
import { PantryItem } from '../../../../../../src/modules/pantry/domain/entities/pantry-item.entity';

describe('GetPantryItemsUseCase', () => {
  let useCase: GetPantryItemsUseCase;
  let pantryRepo: any;

  beforeEach(async () => {
    pantryRepo = {
      findByUserId: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetPantryItemsUseCase,
        { provide: 'IPantryRepository', useValue: pantryRepo },
      ],
    }).compile();

    useCase = module.get<GetPantryItemsUseCase>(GetPantryItemsUseCase);
  });

  it('should list all items for a user', async () => {
    const userId = 'user-1';
    const items = [
      new PantryItem('1', userId, 'tomato', 101, 2, 'pcs'),
      new PantryItem('2', userId, 'cucumber', 102, 1, 'kg'),
    ];

    pantryRepo.findByUserId.mockResolvedValue(items);

    const result = await useCase.execute(userId);

    expect(pantryRepo.findByUserId).toHaveBeenCalledWith(userId);
    expect(result).toHaveLength(2);
    expect(result).toEqual(items);
  });
});
