import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from '@core/database/database.module';
import { PASSWORD_SERVICE } from './domain/services/password-service.interface';
import { PasswordService } from './infrastructure/services/password.service';
import { TOKEN_SERVICE } from './domain/services/token-service.interface';
import { TokenService } from './infrastructure/services/token.service';
import { AuthController } from './transport/controllers/auth.controller';
import {
  GetMeUseCase,
  LoginUseCase,
  LogoutUseCase,
  RefreshTokenUseCase,
  RegisterUseCase,
} from './application/use-cases';
import { JwtStrategy } from '@common/strategies';
import { USER_REPOSITORY } from './domain/repositories/user.repository.interface';
import { PrismaUserRepository } from './infrastructure/repositories/prisma-user.repository';
import { REFRESH_TOKEN_REPOSITORY } from './domain/repositories/refresh-token.repository.interface';
import { PrismaRefreshTokenRepository } from './infrastructure/repositories/prisma-refresh-token.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '15m' }, // Token expiration
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: PASSWORD_SERVICE,
      useClass: PasswordService,
    },
    {
      provide: TOKEN_SERVICE,
      useClass: TokenService,
    },
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
    {
      provide: REFRESH_TOKEN_REPOSITORY,
      useClass: PrismaRefreshTokenRepository,
    },
    RegisterUseCase,
    LoginUseCase,
    RefreshTokenUseCase,
    LogoutUseCase,
    GetMeUseCase,
    JwtStrategy,
  ],
})
export class AuthModule {}
