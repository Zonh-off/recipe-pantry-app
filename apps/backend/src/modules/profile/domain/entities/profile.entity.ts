export class ProfileEntity {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly diet: string[],
    public readonly intolerances: string[],
    public readonly cuisines: string[],
    public readonly goals: string[],
  ) {}
}
