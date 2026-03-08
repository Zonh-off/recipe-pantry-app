export interface NormalizedIngredient {
  id: number;
  name: string;
}

export interface IIngredientService {
  normalize(name: string): Promise<NormalizedIngredient>;
}
