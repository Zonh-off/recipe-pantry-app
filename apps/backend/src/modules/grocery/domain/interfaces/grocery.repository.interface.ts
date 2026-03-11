import { GroceryItemEntity } from '../entities/grocery-item.entity';

export const GROCERY_REPOSITORY = Symbol('GROCERY_REPOSITORY');

export interface IGroceryRepository {
  findByUserId(userId: string): Promise<GroceryItemEntity[]>;
  findById(id: string): Promise<GroceryItemEntity | null>;
  findByName(userId: string, name: string): Promise<GroceryItemEntity | null>;
  create(data: {
    userId: string;
    name: string;
    amount?: number | null;
    unit?: string | null;
    recipeName?: string | null;
  }): Promise<GroceryItemEntity>;
  update(
    id: string,
    data: Partial<Omit<GroceryItemEntity, 'id' | 'userId'>>,
  ): Promise<GroceryItemEntity>;
  delete(id: string): Promise<void>;
  clearChecked(userId: string): Promise<number>;
}
