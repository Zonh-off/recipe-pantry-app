import { Test, TestingModule } from '@nestjs/testing';
import { RefreshTokenUseCase } from '../../../../../../src/modules/auth/application/use-cases/refresh-token.use-case';
import {
  REFRESH_TOKEN_REPOSITORY,
  IRefreshTokenRepository,
} from '../../../../../../src/modules/auth/domain/repositories/refresh-token.repository.interface';
import { TokenService } from '../../../../../../src/modules/auth/domain/services/token.service';
import { UnauthorizedException } from '@nestjs/common';
import { RefreshToken } from '../../../../../../src/modules/auth/domain/entities/refresh-token.entity';

describe('RefreshTokenUseCase', () => {
  let useCase: RefreshTokenUseCase;
  let refreshTokenRepository: jest.Mocked<IRefreshTokenRepository>;
  let tokenService: jest.Mocked<TokenService>;

  beforeEach(async () => {
    refreshTokenRepository = {
      create: jest.fn(),
      findByTokenHash: jest.fn(),
      deleteByTokenHash: jest.fn(),
    } as unknown as jest.Mocked<IRefreshTokenRepository>;

    tokenService = {
      generateAccessToken: jest.fn(),
      generateRefreshToken: jest.fn(),
      hashRefreshToken: jest.fn(),
    } as unknown as jest.Mocked<TokenService>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RefreshTokenUseCase,
        { provide: REFRESH_TOKEN_REPOSITORY, useValue: refreshTokenRepository },
        { provide: TokenService, useValue: tokenService },
      ],
    }).compile();

    useCase = module.get<RefreshTokenUseCase>(RefreshTokenUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('execute', () => {
    const currentRefreshToken = 'valid_refresh_token';
    const tokenHash = 'hashed_valid_refresh_token';
    const userId = '1';

    it('should throw UnauthorizedException if refresh token is missing', async () => {
      await expect(useCase.execute('')).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if refresh token is valid but not found in DB', async () => {
      tokenService.hashRefreshToken.mockReturnValue(tokenHash);
      refreshTokenRepository.findByTokenHash.mockResolvedValue(null);

      await expect(useCase.execute(currentRefreshToken)).rejects.toThrow(
        UnauthorizedException,
      );
      expect(tokenService.hashRefreshToken).toHaveBeenCalledWith(
        currentRefreshToken,
      );
      expect(refreshTokenRepository.findByTokenHash).toHaveBeenCalledWith(
        tokenHash,
      );
    });

    it('should throw UnauthorizedException if refresh token is expired', async () => {
      const expiredDate = new Date();
      expiredDate.setDate(expiredDate.getDate() - 1); // 1 day ago

      const refreshTokenObj = new RefreshToken(
        'id-doc',
        userId,
        tokenHash,
        expiredDate,
      );

      tokenService.hashRefreshToken.mockReturnValue(tokenHash);
      refreshTokenRepository.findByTokenHash.mockResolvedValue(refreshTokenObj);

      await expect(useCase.execute(currentRefreshToken)).rejects.toThrow(
        UnauthorizedException,
      );
      expect(refreshTokenRepository.deleteByTokenHash).toHaveBeenCalledWith(
        tokenHash,
      );
    });

    it('should rotate token and return new tokens on valid current refresh token', async () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1); // 1 day in the future

      const refreshTokenObj = new RefreshToken(
        'id-doc',
        userId,
        tokenHash,
        futureDate,
      );

      tokenService.hashRefreshToken.mockImplementation(
        (token: string) => `hashed_${token}`,
      );
      refreshTokenRepository.findByTokenHash.mockResolvedValue(refreshTokenObj);
      tokenService.generateAccessToken.mockReturnValue('new_access_token');
      tokenService.generateRefreshToken.mockReturnValue('new_refresh_token');

      const result = await useCase.execute(currentRefreshToken);

      expect(refreshTokenRepository.deleteByTokenHash).toHaveBeenCalledWith(
        `hashed_${currentRefreshToken}`,
      );
      expect(tokenService.generateAccessToken).toHaveBeenCalledWith(userId);
      expect(tokenService.generateRefreshToken).toHaveBeenCalled();
      expect(tokenService.hashRefreshToken).toHaveBeenCalledWith(
        'new_refresh_token',
      );
      expect(refreshTokenRepository.create).toHaveBeenCalledWith(
        userId,
        'hashed_new_refresh_token',
        expect.any(Date),
      );

      expect(result).toEqual({
        accessToken: 'new_access_token',
        newRefreshToken: 'new_refresh_token',
      });
    });
  });
});
