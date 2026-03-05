import { Inject, Injectable } from '@nestjs/common';
import { AddGroceryItemUseCase } from './add-grocery-item.use-case';

export type IngredientToBuy = {
    name: string;
    amount?: number;
    unit?: string;
};

@Injectable()
export class GenerateGroceryFromRecipeUseCase {
    constructor(
        private readonly addItemUC: AddGroceryItemUseCase,
    ) { }

    async execute(userId: string, ingredients: IngredientToBuy[]): Promise<{ addedCount: number }> {
        let addedCount = 0;

        for (const ingredient of ingredients) {
            await this.addItemUC.execute(userId, {
                name: ingredient.name,
                amount: ingredient.amount,
                unit: ingredient.unit,
            });
            addedCount++;
        }

        return { addedCount };
    }
}
