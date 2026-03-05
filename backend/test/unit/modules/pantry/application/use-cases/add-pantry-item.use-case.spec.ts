import { Test, TestingModule } from '@nestjs/testing';
import { AddPantryItemUseCase } from '../../../../../../src/modules/pantry/application/use-cases/add-pantry-item.use-case';
import { PantryItem } from '../../../../../../src/modules/pantry/domain/entities/pantry-item.entity';

describe('AddPantryItemUseCase', () => {
    let useCase: AddPantryItemUseCase;
    let pantryRepo: any;
    let ingredientService: any;

    beforeEach(async () => {
        pantryRepo = {
            findByIngredientId: jest.fn(),
            updateItem: jest.fn(),
            addItem: jest.fn(),
        };
        ingredientService = {
            normalize: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AddPantryItemUseCase,
                { provide: 'IPantryRepository', useValue: pantryRepo },
                { provide: 'IIngredientService', useValue: ingredientService },
            ],
        }).compile();

        useCase = module.get<AddPantryItemUseCase>(AddPantryItemUseCase);
    });

    it('should add a new pantry item if it does not exist', async () => {
        const data = {
            userId: 'user-1',
            ingredientName: 'Tomato',
            amount: 2,
            unit: 'pcs',
        };
        const normalized = { id: 101, name: 'tomato' };
        const savedItem = new PantryItem(
            'uuid-1',
            data.userId,
            normalized.name,
            normalized.id,
            data.amount,
            data.unit,
        );

        ingredientService.normalize.mockResolvedValue(normalized);
        pantryRepo.findByIngredientId.mockResolvedValue(null);
        pantryRepo.addItem.mockResolvedValue(savedItem);

        const result = await useCase.execute(data);

        expect(ingredientService.normalize).toHaveBeenCalledWith(data.ingredientName);
        expect(pantryRepo.findByIngredientId).toHaveBeenCalledWith(data.userId, normalized.id);
        expect(pantryRepo.addItem).toHaveBeenCalledWith({
            userId: data.userId,
            name: normalized.name,
            ingredientId: normalized.id,
            amount: data.amount,
            unit: data.unit,
        });
        expect(result).toEqual(savedItem);
    });

    it('should update existing item amount if it already exists (merge duplicates)', async () => {
        const data = {
            userId: 'user-1',
            ingredientName: 'Tomato',
            amount: 2,
            unit: 'pcs',
        };
        const normalized = { id: 101, name: 'tomato' };
        const existingItem = new PantryItem(
            'uuid-existing',
            data.userId,
            normalized.name,
            normalized.id,
            5,
            'pcs',
        );
        const updatedItem = new PantryItem(
            'uuid-existing',
            data.userId,
            normalized.name,
            normalized.id,
            7,
            'pcs',
        );

        ingredientService.normalize.mockResolvedValue(normalized);
        pantryRepo.findByIngredientId.mockResolvedValue(existingItem);
        pantryRepo.updateItem.mockResolvedValue(updatedItem);

        const result = await useCase.execute(data);

        expect(pantryRepo.updateItem).toHaveBeenCalledWith('uuid-existing', {
            amount: 7,
            unit: 'pcs',
        });
        expect(result).toEqual(updatedItem);
    });
});
