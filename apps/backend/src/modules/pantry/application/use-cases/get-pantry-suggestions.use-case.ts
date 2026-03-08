import { Injectable } from '@nestjs/common';

@Injectable()
export class GetPantrySuggestionsUseCase {
  private readonly commonIngredients = [
    'Salt',
    'Pepper',
    'Olive Oil',
    'Garlic',
    'Onion',
    'Butter',
    'Eggs',
    'Milk',
    'Flour',
    'Sugar',
    'Rice',
    'Pasta',
    'Chicken Breast',
    'Potatoes',
    'Carrots',
  ];

  async execute(): Promise<string[]> {
    // In a real app, this could be based on popular ingredients from recipes
    return this.commonIngredients;
  }
}
