import { Inject, Injectable } from '@nestjs/common';
import { ProfileEntity } from '@modules/profile/domain/entities/profile.entity';
import {
  type IProfileRepository,
  PROFILE_REPOSITORY,
} from '../../domain/interfaces/profile.repository.interface';

@Injectable()
export class GetProfileUseCase {
  constructor(
    @Inject(PROFILE_REPOSITORY)
    private readonly repo: IProfileRepository,
  ) {}

  async execute(userId: string): Promise<ProfileEntity> {
    const profile = await this.repo.findByUserId(userId);
    if (profile) return profile;

    // Initialize profile if not found
    return this.repo.save({
      userId,
      diet: [],
      intolerances: [],
      cuisines: [],
      goals: [],
    });
  }
}
