import { Test, TestingModule } from '@nestjs/testing';
import { CreateCollectionUseCase } from '../../../../../../src/modules/collections/application/use-cases/create-collection.use-case';
import { Collection } from '../../../../../../src/modules/collections/domain/collection.repository.interface';
import { BadRequestException } from '@nestjs/common';

describe('CreateCollectionUseCase', () => {
    let useCase: CreateCollectionUseCase;
    let repo: any;

    beforeEach(async () => {
        repo = {
            findByName: jest.fn(),
            create: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateCollectionUseCase,
                { provide: 'ICollectionRepository', useValue: repo },
            ],
        }).compile();

        useCase = module.get<CreateCollectionUseCase>(CreateCollectionUseCase);
    });

    it('should create a new collection if name is unique for user', async () => {
        const userId = 'user-1';
        const name = 'My Recipes';
        repo.findByName.mockResolvedValue(null);
        repo.create.mockResolvedValue(new Collection('id-1', userId, name, []));

        const result = await useCase.execute(userId, name);

        expect(repo.findByName).toHaveBeenCalledWith(userId, name);
        expect(repo.create).toHaveBeenCalledWith({
            userId,
            name,
            recipeIds: [],
        });
        expect(result.name).toBe(name);
    });

    it('should throw BadRequestException if collection name already exists for user', async () => {
        const userId = 'user-1';
        const name = 'Already Exists';
        repo.findByName.mockResolvedValue(new Collection('id-1', userId, name, []));

        await expect(useCase.execute(userId, name)).rejects.toThrow(BadRequestException);
        expect(repo.create).not.toHaveBeenCalled();
    });
});
