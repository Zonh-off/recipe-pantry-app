import { Test, TestingModule } from '@nestjs/testing';
import { GetRecommendationsUseCase } from '../../../../../../src/modules/recipes/application/use-cases/get-recommendations.use-case';

describe('GetRecommendationsUseCase', () => {
    let useCase: GetRecommendationsUseCase;
    let provider: any;
    let cache: any;
    let profileRepo: any;

    beforeEach(async () => {
        provider = {
            getRecommendations: jest.fn(),
        };
        cache = {
            getRecommendations: jest.fn(),
            setRecommendations: jest.fn(),
        };
        profileRepo = {
            findByUserId: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GetRecommendationsUseCase,
                { provide: 'IRecipesProviderPort', useValue: provider },
                { provide: 'IRecipesCachePort', useValue: cache },
                { provide: 'IProfileRepository', useValue: profileRepo },
            ],
        }).compile();

        useCase = module.get<GetRecommendationsUseCase>(GetRecommendationsUseCase);
    });

    it('should return cached recommendations', async () => {
        const params = { userId: 'user-1', limit: 12 };
        const cached = { items: [{ id: 1, title: 'Reco' }], total: 1, page: 1, pageSize: 12 };
        cache.getRecommendations.mockResolvedValue(cached);

        const result = await useCase.execute(params);

        expect(cache.getRecommendations).toHaveBeenCalledWith('user-1');
        expect(result).toEqual(cached);
    });

    it('should fetch from provider with profile preferences and cache if not in cache', async () => {
        const params = { userId: 'user-1', limit: 12 };
        const profile = { diet: ['vegan'], intolerances: ['glute'], cuisines: ['italian'] };
        const fresh = { items: [{ id: 1, title: 'Fresh Reco' }], total: 1, page: 1, pageSize: 12 };

        cache.getRecommendations.mockResolvedValue(null);
        profileRepo.findByUserId.mockResolvedValue(profile);
        provider.getRecommendations.mockResolvedValue(fresh);

        const result = await useCase.execute(params);

        expect(profileRepo.findByUserId).toHaveBeenCalledWith('user-1');
        expect(provider.getRecommendations).toHaveBeenCalledWith(expect.objectContaining({
            diet: 'vegan',
            intolerances: 'glute',
            cuisine: 'italian',
        }));
        expect(cache.setRecommendations).toHaveBeenCalledWith('user-1', fresh);
        expect(result).toEqual(fresh);
    });
});
