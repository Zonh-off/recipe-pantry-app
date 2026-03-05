import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePantryItemUseCase } from '../../../../../../src/modules/pantry/application/use-cases/update-pantry-item.use-case';
import { PantryItem } from '../../../../../../src/modules/pantry/domain/entities/pantry-item.entity';
import { UnauthorizedException } from '@nestjs/common';

describe('UpdatePantryItemUseCase', () => {
    let useCase: UpdatePantryItemUseCase;
    let pantryRepo: any;

    beforeEach(async () => {
        pantryRepo = {
            findByUserId: jest.fn(),
            updateItem: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpdatePantryItemUseCase,
                { provide: 'IPantryRepository', useValue: pantryRepo },
            ],
        }).compile();

        useCase = module.get<UpdatePantryItemUseCase>(UpdatePantryItemUseCase);
    });

    it('should update unit and amount if item exists', async () => {
        const userId = 'user-1';
        const itemId = 'uuid-1';
        const existing = new PantryItem(itemId, userId, 'tomato', 101, 2, 'pcs');
        const updateData = { amount: 5, unit: 'kg' };
        const updated = new PantryItem(itemId, userId, 'tomato', 101, 5, 'kg');

        pantryRepo.findByUserId.mockResolvedValue([existing]);
        pantryRepo.updateItem.mockResolvedValue(updated);

        const result = await useCase.execute(userId, itemId, updateData);

        expect(pantryRepo.updateItem).toHaveBeenCalledWith(itemId, updateData);
        expect(result).toEqual(updated);
    });

    it('should keep existing values if fields not provided in update', async () => {
        const userId = 'user-1';
        const itemId = 'uuid-1';
        const existing = new PantryItem(itemId, userId, 'tomato', 101, 2, 'pcs');
        const updateData = { amount: 5 }; // unit missing
        const updated = new PantryItem(itemId, userId, 'tomato', 101, 5, 'pcs');

        pantryRepo.findByUserId.mockResolvedValue([existing]);
        pantryRepo.updateItem.mockResolvedValue(updated);

        const result = await useCase.execute(userId, itemId, updateData);

        expect(pantryRepo.updateItem).toHaveBeenCalledWith(itemId, {
            amount: 5,
            unit: 'pcs',
        });
        expect(result).toEqual(updated);
    });

    it('should throw if item not found/owned by user', async () => {
        const userId = 'user-1';
        const itemId = 'uuid-not-found';

        pantryRepo.findByUserId.mockResolvedValue([]);

        await expect(
            useCase.execute(userId, itemId, { amount: 1 }),
        ).rejects.toThrow(UnauthorizedException);
        expect(pantryRepo.updateItem).not.toHaveBeenCalled();
    });
});
