import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { IRecipesRepository } from '../../../domain/interfaces/recipes-repository.interface';

@Injectable()
export class MockRecipesRepository implements IRecipesRepository {
  private fixturesDir = join(__dirname, 'fixtures');

  async search(params: any) {
    // You can branch by params.query if you want later
    const raw = await readFile(
      join(this.fixturesDir, 'search_pasta.json'),
      'utf-8',
    );
    return JSON.parse(raw);
  }

  async getDetails(id: number) {
    // Basic example: one fixture by id
    if (id !== 716429) {
      throw new NotFoundException('Mock recipe not found');
    }
    const raw = await readFile(
      join(this.fixturesDir, 'details_716429.json'),
      'utf-8',
    );
    return JSON.parse(raw);
  }

  async cookFromPantry(params: any) {
    const raw = await readFile(
      join(this.fixturesDir, 'cook_from_pantry.json'),
      'utf-8',
    );
    const parsed = JSON.parse(raw);

    if (typeof params?.maxMissing === 'number') {
      return {
        items: (parsed.items ?? []).filter(
          (x: any) => (x.missedCount ?? 0) <= params.maxMissing,
        ),
      };
    }

    return parsed;
  }

  async getPopular(params: any) {
    const raw = await readFile(
      join(this.fixturesDir, 'search_pasta.json'),
      'utf-8',
    );
    return JSON.parse(raw);
  }

  async getCategories() {
    return [
      {
        id: 'breakfast',
        name: 'Breakfast',
        image: 'https://spoonacular.com/recipeImages/636041-312x231.jpg',
      },
      {
        id: 'main course',
        name: 'Main Course',
        image: 'https://spoonacular.com/recipeImages/642583-312x231.jpg',
      },
      {
        id: 'dessert',
        name: 'Dessert',
        image: 'https://spoonacular.com/recipeImages/648439-312x231.jpg',
      },
    ];
  }

  async getRecommendations(params: any) {
    const raw = await readFile(
      join(this.fixturesDir, 'search_pasta.json'),
      'utf-8',
    );
    return JSON.parse(raw);
  }
}
