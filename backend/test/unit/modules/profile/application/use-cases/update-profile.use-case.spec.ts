import { Test, TestingModule } from '@nestjs/testing';
import { UpdateProfileUseCase } from '../../../../../../src/modules/profile/application/use-cases/update-profile.use-case';

describe('UpdateProfileUseCase', () => {
    let useCase: UpdateProfileUseCase;
    let repo: any;

    beforeEach(async () => {
        repo = {
            findByUserId: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpdateProfileUseCase,
                { provide: 'IProfileRepository', useValue: repo },
            ],
        }).compile();

        useCase = module.get<UpdateProfileUseCase>(UpdateProfileUseCase);
    });

    it('should save new profile if none exists', async () => {
        const userId = 'u1';
        const data = { diet: ['paleo'] };
        repo.findByUserId.mockResolvedValue(null);
        repo.save.mockResolvedValue({ userId, ...data });

        const result = await useCase.execute(userId, data);

        expect(repo.save).toHaveBeenCalledWith({ userId, ...data });
        expect(result.diet).toContain('paleo');
    });

    it('should update existing profile if it exists', async () => {
        const userId = 'u1';
        const data = { cuisines: ['italian'] };
        repo.findByUserId.mockResolvedValue({ userId, diet: [] });
        repo.update.mockResolvedValue({ userId, cuisines: ['italian'], diet: [] });

        const result = await useCase.execute(userId, data);

        expect(repo.update).toHaveBeenCalledWith(userId, data);
        expect(result.cuisines).toContain('italian');
    });
});
