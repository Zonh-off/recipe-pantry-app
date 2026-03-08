import { Injectable, Inject } from '@nestjs/common';
import { TokenService } from '../../domain/services/token.service';
import { REFRESH_TOKEN_REPOSITORY } from '../../domain/repositories/refresh-token.repository.interface';
import type { IRefreshTokenRepository } from '../../domain/repositories/refresh-token.repository.interface';

@Injectable()
export class LogoutUseCase {
  constructor(
    @Inject(REFRESH_TOKEN_REPOSITORY)
    private readonly refreshTokenRepository: IRefreshTokenRepository,
    private readonly tokenService: TokenService,
  ) {}

  async execute(refreshToken: string): Promise<void> {
    if (!refreshToken) return;

    const tokenHash = this.tokenService.hashRefreshToken(refreshToken);
    await this.refreshTokenRepository.deleteByTokenHash(tokenHash);
  }
}
