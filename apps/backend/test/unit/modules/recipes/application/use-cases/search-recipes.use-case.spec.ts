import { Test, TestingModule } from '@nestjs/testing';
import { SearchRecipesUseCase } from '../../../../../../src/modules/recipes/application/use-cases/search-recipes.use-case';

describe('SearchRecipesUseCase', () => {
  let useCase: SearchRecipesUseCase;
  let provider: any;
  let cache: any;

  beforeEach(async () => {
    provider = { search: jest.fn() };
    cache = { getSearch: jest.fn(), setSearch: jest.fn() };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchRecipesUseCase,
        { provide: 'IRecipesProviderPort', useValue: provider },
        { provide: 'IRecipesCachePort', useValue: cache },
      ],
    }).compile();

    useCase = module.get<SearchRecipesUseCase>(SearchRecipesUseCase);
  });

  it('should return cached result if exists', async () => {
    const params = { query: 'pasta', page: 1, pageSize: 12 };
    cache.getSearch.mockResolvedValue({
      items: [],
      total: 0,
      page: 1,
      pageSize: 12,
    });

    const result = await useCase.execute(params);

    expect(cache.getSearch).toHaveBeenCalled();
    expect(provider.search).not.toHaveBeenCalled();
    expect(result.items).toHaveLength(0);
  });

  it('should fetch from provider and cache if not in cache', async () => {
    const params = { query: 'pasta', page: 1, pageSize: 12 };
    const providerResult = {
      items: [{ id: 1, title: 'Pasta' }],
      total: 1,
      page: 1,
      pageSize: 12,
    };
    cache.getSearch.mockResolvedValue(null);
    provider.search.mockResolvedValue(providerResult);

    const result = await useCase.execute(params);

    expect(provider.search).toHaveBeenCalledWith(
      expect.objectContaining({ query: 'pasta' }),
    );
    expect(cache.setSearch).toHaveBeenCalledWith(
      expect.anything(),
      providerResult,
    );
    expect(result).toEqual(providerResult);
  });

  it('should clamp pagination parameters', async () => {
    const params = { query: 'pasta', page: -1, pageSize: 100 };
    cache.getSearch.mockResolvedValue(null);
    provider.search.mockResolvedValue({
      items: [],
      total: 0,
      page: 1,
      pageSize: 20,
    });

    await useCase.execute(params as any);

    expect(provider.search).toHaveBeenCalledWith(
      expect.objectContaining({
        page: 1,
        pageSize: 20,
      }),
    );
  });
});
