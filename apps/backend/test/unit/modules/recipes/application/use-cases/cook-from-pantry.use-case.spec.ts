import { Test, TestingModule } from '@nestjs/testing';
import { CookFromPantryUseCase } from '../../../../../../src/modules/recipes/application/use-cases/cook-from-pantry.use-case';
import { PantryItem } from '../../../../../../src/modules/pantry/domain/entities/pantry-item.entity';

describe('CookFromPantryUseCase', () => {
  let useCase: CookFromPantryUseCase;
  let provider: any;
  let pantryRepo: any;
  let cache: any;

  beforeEach(async () => {
    provider = { cookFromPantry: jest.fn() };
    pantryRepo = { list: jest.fn() };
    cache = { getCookFromPantry: jest.fn(), setCookFromPantry: jest.fn() };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CookFromPantryUseCase,
        { provide: 'IRecipesProviderPort', useValue: provider },
        { provide: 'IPantryRepository', useValue: pantryRepo },
        { provide: 'IRecipesCachePort', useValue: cache },
      ],
    }).compile();

    useCase = module.get<CookFromPantryUseCase>(CookFromPantryUseCase);
  });

  it('should fetch ingredients from pantry and query provider', async () => {
    const userId = 'user-1';
    const items = [
      new PantryItem('1', userId, 'tomato', 101, 2, 'pcs'),
      new PantryItem('2', userId, 'onion', 102, 1, 'pcs'),
    ];
    const providerResult = { items: [{ id: 1, title: 'Salad' }] };

    pantryRepo.list.mockResolvedValue(items);
    cache.getCookFromPantry.mockResolvedValue(null);
    provider.cookFromPantry.mockResolvedValue(providerResult);

    const result = await useCase.execute(userId);

    expect(pantryRepo.list).toHaveBeenCalledWith(userId);
    expect(provider.cookFromPantry).toHaveBeenCalledWith({
      ingredients: ['tomato', 'onion'],
      maxMissing: undefined,
      limit: undefined,
    });
    expect(result).toEqual(providerResult);
  });

  it('should return empty list if pantry is empty', async () => {
    const userId = 'user-1';
    pantryRepo.list.mockResolvedValue([]);

    const result = await useCase.execute(userId);

    expect(pantryRepo.list).toHaveBeenCalledWith(userId);
    expect(provider.cookFromPantry).not.toHaveBeenCalled();
    expect(result.items).toHaveLength(0);
  });
});
