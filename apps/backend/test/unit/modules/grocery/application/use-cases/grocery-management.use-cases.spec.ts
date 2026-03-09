import { Test, TestingModule } from '@nestjs/testing';
import { GetGroceryListUseCase } from '../../../../../../src/modules/grocery/application/use-cases/get-grocery-list.use-case';
import { AddGroceryItemUseCase } from '../../../../../../src/modules/grocery/application/use-cases/add-grocery-item.use-case';
import { UpdateGroceryItemUseCase } from '../../../../../../src/modules/grocery/application/use-cases/update-grocery-item.use-case';
import { RemoveGroceryItemUseCase } from '../../../../../../src/modules/grocery/application/use-cases/remove-grocery-item.use-case';
import { NotFoundException } from '@nestjs/common';

import {GroceryItemEntity} from "@modules/grocery/domain/entities/grocery-item.entity";

describe('GroceryManagementUseCases', () => {
  let repo: any;
  let getListUC: GetGroceryListUseCase;
  let addItemUC: AddGroceryItemUseCase;
  let updateItemUC: UpdateGroceryItemUseCase;
  let removeItemUC: RemoveGroceryItemUseCase;

  beforeEach(async () => {
    repo = {
      findByUserId: jest.fn(),
      findById: jest.fn(),
      findByName: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetGroceryListUseCase,
        AddGroceryItemUseCase,
        UpdateGroceryItemUseCase,
        RemoveGroceryItemUseCase,
        { provide: 'IGroceryRepository', useValue: repo },
      ],
    }).compile();

    getListUC = module.get<GetGroceryListUseCase>(GetGroceryListUseCase);
    addItemUC = module.get<AddGroceryItemUseCase>(AddGroceryItemUseCase);
    updateItemUC = module.get<UpdateGroceryItemUseCase>(
      UpdateGroceryItemUseCase,
    );
    removeItemUC = module.get<RemoveGroceryItemUseCase>(
      RemoveGroceryItemUseCase,
    );
  });

  it('should get grocery list', async () => {
    repo.findByUserId.mockResolvedValue([]);
    const result = await getListUC.execute('u1');
    expect(result).toEqual([]);
    expect(repo.findByUserId).toHaveBeenCalledWith('u1');
  });

  it('should add grocery item', async () => {
    const data = { name: 'Milk', amount: 1, unit: 'L' };
    repo.findByName.mockResolvedValue(null);
    repo.create.mockResolvedValue({
      id: '1',
      userId: 'u1',
      ...data,
      checked: false,
    });

    const result = await addItemUC.execute('u1', data);

    expect(repo.create).toHaveBeenCalledWith({
      userId: 'u1',
      name: 'Milk',
      amount: 1,
      unit: 'L',
    });
    expect(result.name).toBe('Milk');
  });

  it('should merge duplicate items', async () => {
    const existing = {
      id: '1',
      userId: 'u1',
      name: 'Milk',
      amount: 2,
      unit: 'L',
      checked: false,
    };
    const newData = { name: 'Milk', amount: 1, unit: 'L' };

    repo.findByName.mockResolvedValue(existing);
    repo.update.mockResolvedValue({ ...existing, amount: 3 });

    const result = await addItemUC.execute('u1', newData);

    expect(repo.update).toHaveBeenCalledWith('1', { amount: 3, unit: 'L' });
    expect(result.amount).toBe(3);
  });

  it('should update grocery item', async () => {
    const item = { id: '1', userId: 'u1', name: 'Milk', checked: false };
    repo.findById.mockResolvedValue(item);
    repo.update.mockResolvedValue({ ...item, checked: true });

    const result = await updateItemUC.execute('u1', '1', { checked: true });

    expect(repo.update).toHaveBeenCalledWith('1', { checked: true });
    expect(result.checked).toBe(true);
  });

  it('should throw NotFound on update if not item owner', async () => {
    repo.findById.mockResolvedValue({ id: '1', userId: 'u2' });
    await expect(
      updateItemUC.execute('u1', '1', { checked: true }),
    ).rejects.toThrow(NotFoundException);
  });
});
