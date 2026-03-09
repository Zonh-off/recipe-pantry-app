import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import { ITokenService } from '../../domain/services/token-service.interface';

@Injectable()
export class TokenService implements ITokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateAccessToken(userId: string): string {
    return this.jwtService.sign({ sub: userId }, { expiresIn: '15m' });
  }

  generateRefreshToken(): string {
    return crypto.randomBytes(40).toString('hex');
  }

  hashRefreshToken(token: string): string {
    return crypto.createHash('sha256').update(token).digest('hex');
  }
}
