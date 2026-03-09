export class GroceryItemEntity {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly name: string,
    public readonly amount: number | null,
    public readonly unit: string | null,
    public readonly checked: boolean,
  ) {}
}
