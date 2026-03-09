export interface NormalizedIngredient {
  id: number;
  name: string;
}

export const INGREDIENT_SERVICE = Symbol('INGREDIENT_SERVICE');

export interface IIngredientService {
  normalize(name: string): NormalizedIngredient;
}
