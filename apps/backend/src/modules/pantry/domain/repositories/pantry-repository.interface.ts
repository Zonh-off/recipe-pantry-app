import { PantryItem } from '../entities/pantry-item.entity';

export interface IPantryRepository {
  addItem(item: Partial<PantryItem>): Promise<PantryItem>;
  updateItem(id: string, item: Partial<PantryItem>): Promise<PantryItem>;
  removeItem(id: string): Promise<void>;
  findByUserId(userId: string): Promise<PantryItem[]>;
  findByIngredientId(
    userId: string,
    ingredientId: number,
  ): Promise<PantryItem | null>;
  list(userId: string): Promise<PantryItem[]>;
}
