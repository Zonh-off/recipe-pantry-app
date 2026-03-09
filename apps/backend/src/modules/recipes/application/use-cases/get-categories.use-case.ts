import { Inject, Injectable } from '@nestjs/common';
import {
  type IRecipesRepository,
  RECIPES_REPOSITORY,
} from '../../domain/interfaces/recipes-repository.interface';
import { PopularCategory } from '../../domain/entities/types';

@Injectable()
export class GetCategoriesUseCase {
  constructor(
    @Inject(RECIPES_REPOSITORY)
    private readonly provider: IRecipesRepository,
  ) {}

  async execute(): Promise<PopularCategory[]> {
    return this.provider.getCategories();
  }
}
