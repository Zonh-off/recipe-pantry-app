import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { REFRESH_TOKEN_REPOSITORY } from '../../domain/repositories/refresh-token.repository.interface';
import type { IRefreshTokenRepository } from '../../domain/repositories/refresh-token.repository.interface';
import {
  type ITokenService,
  TOKEN_SERVICE,
} from '../../domain/services/token-service.interface';

@Injectable()
export class RefreshTokenUseCase {
  constructor(
    @Inject(REFRESH_TOKEN_REPOSITORY)
    private readonly refreshTokenRepository: IRefreshTokenRepository,
    @Inject(TOKEN_SERVICE)
    private readonly tokenService: ITokenService,
  ) {}

  async execute(
    currentRefreshToken: string,
  ): Promise<{ accessToken: string; newRefreshToken: string }> {
    if (!currentRefreshToken) {
      throw new UnauthorizedException('Refresh token missing');
    }

    const tokenHash = this.tokenService.hashRefreshToken(currentRefreshToken);
    const savedToken =
      await this.refreshTokenRepository.findByTokenHash(tokenHash);

    if (!savedToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    if (savedToken.expiresAt < new Date()) {
      await this.refreshTokenRepository.deleteByTokenHash(tokenHash);
      throw new UnauthorizedException('Refresh token expired');
    }

    // Refresh token is valid, rotate it
    await this.refreshTokenRepository.deleteByTokenHash(tokenHash);

    const accessToken = this.tokenService.generateAccessToken(
      savedToken.userId,
    );
    const newRefreshToken = this.tokenService.generateRefreshToken();
    const newTokenHash = this.tokenService.hashRefreshToken(newRefreshToken);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    await this.refreshTokenRepository.create(
      savedToken.userId,
      newTokenHash,
      expiresAt,
    );

    return { accessToken, newRefreshToken };
  }
}
