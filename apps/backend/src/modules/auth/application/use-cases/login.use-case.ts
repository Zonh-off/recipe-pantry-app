import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import type { IUserRepository } from '../../domain/repositories/user.repository.interface';
import type { IRefreshTokenRepository } from '../../domain/repositories/refresh-token.repository.interface';
import { USER_REPOSITORY } from '../../domain/repositories/user.repository.interface';
import { REFRESH_TOKEN_REPOSITORY } from '../../domain/repositories/refresh-token.repository.interface';
import { LoginDto } from '../../transport/dto/login.dto';
import {
  type IPasswordService,
  PASSWORD_SERVICE,
} from '../../domain/services/password-service.interface';
import {
  type ITokenService,
  TOKEN_SERVICE,
} from '../../domain/services/token-service.interface';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
    @Inject(REFRESH_TOKEN_REPOSITORY)
    private readonly refreshTokenRepository: IRefreshTokenRepository,
    @Inject(PASSWORD_SERVICE)
    private readonly passwordService: IPasswordService,
    @Inject(TOKEN_SERVICE)
    private readonly tokenService: ITokenService,
  ) {}

  async execute(
    dto: LoginDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const user = await this.userRepository.findByEmail(dto.email);

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.passwordService.compare(
      dto.password,
      user.passwordHash,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = this.tokenService.generateAccessToken(user.id);
    const refreshToken = this.tokenService.generateRefreshToken();
    const tokenHash = this.tokenService.hashRefreshToken(refreshToken);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

    await this.refreshTokenRepository.create(user.id, tokenHash, expiresAt);

    return { accessToken, refreshToken };
  }
}
