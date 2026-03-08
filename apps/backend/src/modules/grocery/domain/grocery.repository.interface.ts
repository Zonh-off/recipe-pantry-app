export class GroceryItem {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly name: string,
    public readonly amount: number | null,
    public readonly unit: string | null,
    public readonly checked: boolean,
  ) {}
}

export interface IGroceryRepository {
  findByUserId(userId: string): Promise<GroceryItem[]>;
  findById(id: string): Promise<GroceryItem | null>;
  findByName(userId: string, name: string): Promise<GroceryItem | null>;
  create(data: {
    userId: string;
    name: string;
    amount?: number | null;
    unit?: string | null;
  }): Promise<GroceryItem>;
  update(
    id: string,
    data: Partial<Omit<GroceryItem, 'id' | 'userId'>>,
  ): Promise<GroceryItem>;
  delete(id: string): Promise<void>;
  clearChecked(userId: string): Promise<number>;
}
