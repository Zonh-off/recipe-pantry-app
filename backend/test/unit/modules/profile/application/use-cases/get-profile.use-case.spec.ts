import { Test, TestingModule } from '@nestjs/testing';
import { GetProfileUseCase } from '../../../../../../src/modules/profile/application/use-cases/get-profile.use-case';

describe('GetProfileUseCase', () => {
    let useCase: GetProfileUseCase;
    let repo: any;

    beforeEach(async () => {
        repo = {
            findByUserId: jest.fn(),
            save: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GetProfileUseCase,
                { provide: 'IProfileRepository', useValue: repo },
            ],
        }).compile();

        useCase = module.get<GetProfileUseCase>(GetProfileUseCase);
    });

    it('should return existing profile', async () => {
        const userId = 'u1';
        const existing = { userId, diet: ['vegan'] };
        repo.findByUserId.mockResolvedValue(existing);

        const result = await useCase.execute(userId);

        expect(repo.findByUserId).toHaveBeenCalledWith(userId);
        expect(result).toEqual(existing);
        expect(repo.save).not.toHaveBeenCalled();
    });

    it('should initialize and return new profile if not found', async () => {
        const userId = 'u1';
        repo.findByUserId.mockResolvedValue(null);
        repo.save.mockResolvedValue({ userId, diet: [], intolerances: [], cuisines: [], goals: [] });

        const result = await useCase.execute(userId);

        expect(repo.save).toHaveBeenCalledWith(expect.objectContaining({ userId }));
        expect(result.userId).toBe(userId);
    });
});
