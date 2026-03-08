import { Inject, Injectable } from '@nestjs/common';
import type {
  IRecipesProviderPort,
  PopularCategory,
} from '../../domain/ports/i-recipes-provider.port';

@Injectable()
export class GetCategoriesUseCase {
  constructor(
    @Inject('IRecipesProviderPort')
    private readonly provider: IRecipesProviderPort,
  ) {}

  async execute(): Promise<PopularCategory[]> {
    return this.provider.getCategories();
  }
}
