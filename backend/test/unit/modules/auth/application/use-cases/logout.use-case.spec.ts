import { Test, TestingModule } from '@nestjs/testing';
import { LogoutUseCase } from '../../../../../../src/modules/auth/application/use-cases/logout.use-case';
import { REFRESH_TOKEN_REPOSITORY, IRefreshTokenRepository } from '../../../../../../src/modules/auth/domain/repositories/refresh-token.repository.interface';
import { TokenService } from '../../../../../../src/modules/auth/domain/services/token.service';

describe('LogoutUseCase', () => {
    let useCase: LogoutUseCase;
    let refreshTokenRepository: jest.Mocked<IRefreshTokenRepository>;
    let tokenService: jest.Mocked<TokenService>;

    beforeEach(async () => {
        refreshTokenRepository = {
            deleteByTokenHash: jest.fn(),
        } as unknown as jest.Mocked<IRefreshTokenRepository>;

        tokenService = {
            hashRefreshToken: jest.fn(),
        } as unknown as jest.Mocked<TokenService>;

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LogoutUseCase,
                { provide: REFRESH_TOKEN_REPOSITORY, useValue: refreshTokenRepository },
                { provide: TokenService, useValue: tokenService },
            ],
        }).compile();

        useCase = module.get<LogoutUseCase>(LogoutUseCase);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('execute', () => {
        it('should do nothing if refresh token is not provided', async () => {
            await useCase.execute('');
            expect(tokenService.hashRefreshToken).not.toHaveBeenCalled();
            expect(refreshTokenRepository.deleteByTokenHash).not.toHaveBeenCalled();
        });

        it('should hash token and delete it via repository', async () => {
            const refreshToken = 'some_refresh_token';
            const tokenHash = 'hashed_token';
            tokenService.hashRefreshToken.mockReturnValue(tokenHash);

            await useCase.execute(refreshToken);

            expect(tokenService.hashRefreshToken).toHaveBeenCalledWith(refreshToken);
            expect(refreshTokenRepository.deleteByTokenHash).toHaveBeenCalledWith(tokenHash);
        });
    });
});
