import { Inject, Injectable } from '@nestjs/common';
import type { IProfileRepository, Profile } from '../../domain/profile.repository.interface';

@Injectable()
export class GetProfileUseCase {
    constructor(
        @Inject('IProfileRepository')
        private readonly repo: IProfileRepository,
    ) { }

    async execute(userId: string): Promise<Profile> {
        const profile = await this.repo.findByUserId(userId);
        if (profile) return profile;

        // RULE 2.7: Initialize profile if not found
        return this.repo.save({
            userId,
            diet: [],
            intolerances: [],
            cuisines: [],
            goals: [],
        });
    }
}
