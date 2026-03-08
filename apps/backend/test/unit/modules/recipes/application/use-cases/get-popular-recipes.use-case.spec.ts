import { Test, TestingModule } from '@nestjs/testing';
import { GetPopularRecipesUseCase } from '../../../../../../src/modules/recipes/application/use-cases/get-popular-recipes.use-case';

describe('GetPopularRecipesUseCase', () => {
  let useCase: GetPopularRecipesUseCase;
  let provider: any;
  let cache: any;

  beforeEach(async () => {
    provider = {
      getPopular: jest.fn(),
    };
    cache = {
      getPopular: jest.fn(),
      setPopular: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetPopularRecipesUseCase,
        { provide: 'IRecipesProviderPort', useValue: provider },
        { provide: 'IRecipesCachePort', useValue: cache },
      ],
    }).compile();

    useCase = module.get<GetPopularRecipesUseCase>(GetPopularRecipesUseCase);
  });

  it('should return cached results if available', async () => {
    const params = { limit: 10 };
    const cachedResult = {
      items: [{ id: 1, title: 'Cached' }],
      total: 1,
      page: 1,
      pageSize: 10,
    };
    cache.getPopular.mockResolvedValue(cachedResult);

    const result = await useCase.execute(params);

    expect(cache.getPopular).toHaveBeenCalledWith(params);
    expect(provider.getPopular).not.toHaveBeenCalled();
    expect(result).toEqual(cachedResult);
  });

  it('should fetch from provider and cache if not in cache', async () => {
    const params = { limit: 10 };
    const providerResult = {
      items: [{ id: 1, title: 'Fresh' }],
      total: 1,
      page: 1,
      pageSize: 10,
    };
    cache.getPopular.mockResolvedValue(null);
    provider.getPopular.mockResolvedValue(providerResult);

    const result = await useCase.execute(params);

    expect(provider.getPopular).toHaveBeenCalledWith(params);
    expect(cache.setPopular).toHaveBeenCalledWith(params, providerResult);
    expect(result).toEqual(providerResult);
  });
});
