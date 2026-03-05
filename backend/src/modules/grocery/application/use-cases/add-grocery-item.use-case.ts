import { Inject, Injectable } from '@nestjs/common';
import type { IGroceryRepository } from '../../domain/grocery.repository.interface';
import { GroceryItem } from '../../domain/grocery.repository.interface';

@Injectable()
export class AddGroceryItemUseCase {
    constructor(
        @Inject('IGroceryRepository')
        private readonly repo: IGroceryRepository,
    ) { }

    async execute(
        userId: string,
        data: { name: string; amount?: number; unit?: string },
    ): Promise<GroceryItem> {
        const existing = await this.repo.findByName(userId, data.name.trim());

        if (existing) {
            const newAmount = (existing.amount || 0) + (data.amount || 0);
            return this.repo.update(existing.id, {
                amount: newAmount,
                unit: data.unit || existing.unit,
            });
        }

        return this.repo.create({
            userId,
            name: data.name.trim(),
            amount: data.amount,
            unit: data.unit,
        });
    }
}
