import { Test, TestingModule } from '@nestjs/testing';
import { GetRecipeDetailsUseCase } from '../../../../../../src/modules/recipes/application/use-cases/get-recipe-details.use-case';

describe('GetRecipeDetailsUseCase', () => {
    let useCase: GetRecipeDetailsUseCase;
    let provider: any;
    let cache: any;

    beforeEach(async () => {
        provider = { getDetails: jest.fn() };
        cache = { getDetails: jest.fn(), setDetails: jest.fn() };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GetRecipeDetailsUseCase,
                { provide: 'IRecipesProviderPort', useValue: provider },
                { provide: 'IRecipesCachePort', useValue: cache },
            ],
        }).compile();

        useCase = module.get<GetRecipeDetailsUseCase>(GetRecipeDetailsUseCase);
    });

    it('should return cached details if exists', async () => {
        const id = 123;
        const cached = { id, title: 'Cached Recipe', ingredients: [] };
        cache.getDetails.mockResolvedValue(cached);

        const result = await useCase.execute(id);

        expect(cache.getDetails).toHaveBeenCalledWith(id);
        expect(provider.getDetails).not.toHaveBeenCalled();
        expect(result).toEqual(cached);
    });

    it('should fetch from provider and cache if not in cache', async () => {
        const id = 123;
        const fresh = { id, title: 'Fresh Recipe', ingredients: [] };
        cache.getDetails.mockResolvedValue(null);
        provider.getDetails.mockResolvedValue(fresh);

        const result = await useCase.execute(id);

        expect(provider.getDetails).toHaveBeenCalledWith(id);
        expect(cache.setDetails).toHaveBeenCalledWith(id, fresh);
        expect(result).toEqual(fresh);
    });
});
