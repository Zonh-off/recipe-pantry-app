import { Inject, Injectable } from '@nestjs/common';
import {
  type IProfileRepository,
  PROFILE_REPOSITORY,
} from '../../domain/interfaces/profile.repository.interface';
import { ProfileEntity } from '../../domain/entities/profile.entity';

export type UpdateProfileData = {
  diet?: string[];
  intolerances?: string[];
  cuisines?: string[];
  goals?: string[];
};

@Injectable()
export class UpdateProfileUseCase {
  constructor(
    @Inject(PROFILE_REPOSITORY)
    private readonly repo: IProfileRepository,
  ) {}

  async execute(
    userId: string,
    data: UpdateProfileData,
  ): Promise<ProfileEntity> {
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
