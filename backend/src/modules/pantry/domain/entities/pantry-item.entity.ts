export class PantryItem {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly name: string,
    public readonly ingredientId: number,
    public readonly amount?: number | null,
    public readonly unit?: string | null,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
  ) {}
}
