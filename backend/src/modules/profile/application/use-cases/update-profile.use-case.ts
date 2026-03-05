import { Inject, Injectable } from '@nestjs/common';
import type { IProfileRepository, Profile } from '../../domain/profile.repository.interface';

export type UpdateProfileData = {
    diet?: string[];
    intolerances?: string[];
    cuisines?: string[];
    goals?: string[];
};

@Injectable()
export class UpdateProfileUseCase {
    constructor(
        @Inject('IProfileRepository')
        private readonly repo: IProfileRepository,
    ) { }

    async execute(userId: string, data: UpdateProfileData): Promise<Profile> {
        const existing = await this.repo.findByUserId(userId);

        if (!existing) {
            return this.repo.save({
                userId,
                ...data,
            });
        }

        return this.repo.update(userId, data);
    }
}
