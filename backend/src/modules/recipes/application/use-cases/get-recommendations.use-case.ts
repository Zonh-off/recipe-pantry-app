import { Inject, Injectable } from '@nestjs/common';
import type {
    IRecipesCachePort,
    IRecipesProviderPort,
    RecommendParams,
    SearchRecipesResult,
} from '../../domain/ports/i-recipes-provider.port';
import type { IProfileRepository } from '../../../profile/domain/profile.repository.interface';

@Injectable()
export class GetRecommendationsUseCase {
    constructor(
        @Inject('IRecipesProviderPort')
        private readonly provider: IRecipesProviderPort,

        @Inject('IRecipesCachePort')
        private readonly cache: IRecipesCachePort,

        @Inject('IProfileRepository')
        private readonly profileRepo: IProfileRepository,
    ) { }

    async execute(params: RecommendParams): Promise<SearchRecipesResult> {
        const cached = await this.cache.getRecommendations(params.userId);
        if (cached) return cached;

        // RULE 2.7: Personalized recommendations based on profile
        const profile = await this.profileRepo.findByUserId(params.userId);

        const mergedParams: RecommendParams = {
            ...params,
            diet: params.diet || profile?.diet?.join(','),
            intolerances: params.intolerances || profile?.intolerances?.join(','),
            cuisine: params.cuisine || profile?.cuisines?.join(','),
        };

        const result = await this.provider.getRecommendations(mergedParams);

        // RULE 2.7: Explainable recommendations
        if (profile) {
            result.items = result.items.map(item => ({
                ...item,
                explanation: this.generateExplanation(profile),
            }));
        }

        await this.cache.setRecommendations(params.userId, result);
        return result;
    }

    private generateExplanation(profile: any): string {
        const reasons = [];
        if (profile.diet?.length) reasons.push(`matches your ${profile.diet[0]} diet`);
        if (profile.cuisines?.length) reasons.push(`fits your interest in ${profile.cuisines[0]} cuisine`);
        if (profile.goals?.length) reasons.push(`helps with your goal: ${profile.goals[0]}`);

        if (reasons.length === 0) return 'Recommended based on overall popularity and user patterns.';
        return `Recommended because it ${reasons.join(' and ')}.`;
    }
}
