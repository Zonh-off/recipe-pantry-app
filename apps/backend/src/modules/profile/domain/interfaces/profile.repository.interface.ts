import { ProfileEntity } from '../entities/profile.entity';

export const PROFILE_REPOSITORY = Symbol.for('PROFILE_REPOSITORY');

export interface IProfileRepository {
  findByUserId(userId: string): Promise<ProfileEntity | null>;
  save(profile: Partial<ProfileEntity>): Promise<ProfileEntity>;
  update(
    userId: string,
    profile: Partial<ProfileEntity>,
  ): Promise<ProfileEntity>;
}
