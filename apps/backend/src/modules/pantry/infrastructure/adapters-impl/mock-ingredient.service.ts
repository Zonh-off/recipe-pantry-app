import {
  IIngredientService,
  NormalizedIngredient,
} from '../../domain/services/ingredient-service.interface';

export class MockIngredientService implements IIngredientService {
  async normalize(name: string): Promise<NormalizedIngredient> {
    // Basic mock: lowercase name and stable random ID
    return {
      id: Math.abs(this.hashCode(name.trim().toLowerCase())),
      name: name.trim().toLowerCase(),
    };
  }

  private hashCode(s: string): number {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
      h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    }
    return h;
  }
}
