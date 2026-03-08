export class Profile {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly diet: string[],
    public readonly intolerances: string[],
    public readonly cuisines: string[],
    public readonly goals: string[],
  ) {}
}

export interface IProfileRepository {
  findByUserId(userId: string): Promise<Profile | null>;
  save(profile: Partial<Profile>): Promise<Profile>;
  update(userId: string, profile: Partial<Profile>): Promise<Profile>;
}
