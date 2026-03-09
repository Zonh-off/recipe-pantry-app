import { Test, TestingModule } from '@nestjs/testing';
import { LoginUseCase } from '../../../../../../src/modules/auth/application/use-cases/login.use-case';
import {
  USER_REPOSITORY,
  IUserRepository,
} from '../../../../../../src/modules/auth/domain/repositories/user.repository.interface';
import {
  REFRESH_TOKEN_REPOSITORY,
  IRefreshTokenRepository,
} from '../../../../../../src/modules/auth/domain/repositories/refresh-token.repository.interface';
import { PasswordService } from '../../../../../../src/modules/auth/infrastructure/services/password.service';
import { TokenService } from '../../../../../../src/modules/auth/infrastructure/services/token.service';
import { UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '../../../../../../src/modules/auth/transport/dto/login.dto';
import { User } from '../../../../../../src/modules/auth/domain/entities/user.entity';

describe('LoginUseCase', () => {
  let useCase: LoginUseCase;
  let userRepository: jest.Mocked<IUserRepository>;
  let refreshTokenRepository: jest.Mocked<IRefreshTokenRepository>;
  let passwordService: jest.Mocked<PasswordService>;
  let tokenService: jest.Mocked<TokenService>;

  beforeEach(async () => {
    userRepository = {
      findByEmail: jest.fn(),
    } as unknown as jest.Mocked<IUserRepository>;

    refreshTokenRepository = {
      create: jest.fn(),
    } as unknown as jest.Mocked<IRefreshTokenRepository>;

    passwordService = {
      compare: jest.fn(),
    } as unknown as jest.Mocked<PasswordService>;

    tokenService = {
      generateAccessToken: jest.fn(),
      generateRefreshToken: jest.fn(),
      hashRefreshToken: jest.fn(),
    } as unknown as jest.Mocked<TokenService>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoginUseCase,
        { provide: USER_REPOSITORY, useValue: userRepository },
        { provide: REFRESH_TOKEN_REPOSITORY, useValue: refreshTokenRepository },
        { provide: PasswordService, useValue: passwordService },
        { provide: TokenService, useValue: tokenService },
      ],
    }).compile();

    useCase = module.get<LoginUseCase>(LoginUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('execute', () => {
    const dto: LoginDto = {
      email: 'test@example.com',
      password: 'password123',
    };

    it('should return access and refresh tokens on successful login', async () => {
      const user = new User('1', dto.email, 'hashed_password', 'Test User');
      userRepository.findByEmail.mockResolvedValue(user);
      passwordService.compare.mockResolvedValue(true);
      tokenService.generateAccessToken.mockReturnValue('access_token');
      tokenService.generateRefreshToken.mockReturnValue('refresh_token');
      tokenService.hashRefreshToken.mockReturnValue('hashed_refresh_token');

      const result = await useCase.execute(dto);

      expect(userRepository.findByEmail).toHaveBeenCalledWith(dto.email);
      expect(passwordService.compare).toHaveBeenCalledWith(
        dto.password,
        user.passwordHash,
      );
      expect(tokenService.generateAccessToken).toHaveBeenCalledWith(user.id);
      expect(tokenService.generateRefreshToken).toHaveBeenCalled();
      expect(tokenService.hashRefreshToken).toHaveBeenCalledWith(
        'refresh_token',
      );
      expect(refreshTokenRepository.create).toHaveBeenCalledWith(
        user.id,
        'hashed_refresh_token',
        expect.any(Date),
      );
      expect(result).toEqual({
        accessToken: 'access_token',
        refreshToken: 'refresh_token',
      });
    });

    it('should throw UnauthorizedException if user is not found', async () => {
      userRepository.findByEmail.mockResolvedValue(null);

      await expect(useCase.execute(dto)).rejects.toThrow(UnauthorizedException);

      expect(userRepository.findByEmail).toHaveBeenCalledWith(dto.email);
      expect(passwordService.compare).not.toHaveBeenCalled();
    });

    it('should throw UnauthorizedException if password is not valid', async () => {
      const user = new User('1', dto.email, 'wrong_hash', 'Test User');
      userRepository.findByEmail.mockResolvedValue(user);
      passwordService.compare.mockResolvedValue(false);

      await expect(useCase.execute(dto)).rejects.toThrow(UnauthorizedException);

      expect(passwordService.compare).toHaveBeenCalledWith(
        dto.password,
        'wrong_hash',
      );
      expect(tokenService.generateAccessToken).not.toHaveBeenCalled();
    });
  });
});
