import { Test, TestingModule } from '@nestjs/testing';
import { GetCategoriesUseCase } from '../../../../../../src/modules/recipes/application/use-cases/get-categories.use-case';

describe('GetCategoriesUseCase', () => {
  let useCase: GetCategoriesUseCase;
  let provider: any;

  beforeEach(async () => {
    provider = { getCategories: jest.fn() };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetCategoriesUseCase,
        { provide: 'IRecipesProviderPort', useValue: provider },
      ],
    }).compile();

    useCase = module.get<GetCategoriesUseCase>(GetCategoriesUseCase);
  });

  it('should list all categories', async () => {
    const cats = [{ id: 'breakfast', name: 'Breakfast' }];
    provider.getCategories.mockResolvedValue(cats);

    const result = await useCase.execute();

    expect(provider.getCategories).toHaveBeenCalled();
    expect(result).toEqual(cats);
  });
});
