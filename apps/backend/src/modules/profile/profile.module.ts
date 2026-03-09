import { Module } from '@nestjs/common';
import { DatabaseModule } from '@core/database/database.module';
import { ProfileController } from './transport/profile.controller';
import { PrismaProfileRepository } from './infrastructure/repositories/prisma-profile.repository';
import {
  GetProfileUseCase,
  UpdateProfileUseCase,
} from './application/use-cases';
import { PROFILE_REPOSITORY } from './domain/interfaces/profile.repository.interface';

@Module({
  imports: [DatabaseModule],
  controllers: [ProfileController],
  providers: [
    {
      provide: PROFILE_REPOSITORY,
      useClass: PrismaProfileRepository,
    },
    GetProfileUseCase,
    UpdateProfileUseCase,
  ],
  exports: [PROFILE_REPOSITORY],
})
export class ProfileModule {}
