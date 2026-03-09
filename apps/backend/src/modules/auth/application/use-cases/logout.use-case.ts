import { Injectable, Inject } from '@nestjs/common';
import { REFRESH_TOKEN_REPOSITORY } from '../../domain/repositories/refresh-token.repository.interface';
import type { IRefreshTokenRepository } from '../../domain/repositories/refresh-token.repository.interface';
import {
  type ITokenService,
  TOKEN_SERVICE,
} from '../../domain/services/token-service.interface';

@Injectable()
export class LogoutUseCase {
  constructor(
    @Inject(REFRESH_TOKEN_REPOSITORY)
    private readonly refreshTokenRepository: IRefreshTokenRepository,
    @Inject(TOKEN_SERVICE)
    private readonly tokenService: ITokenService,
  ) {}

  async execute(refreshToken: string): Promise<void> {
    if (!refreshToken) return;

    const tokenHash = this.tokenService.hashRefreshToken(refreshToken);
    await this.refreshTokenRepository.deleteByTokenHash(tokenHash);
  }
}
