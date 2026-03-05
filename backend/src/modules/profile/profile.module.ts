import { Module } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma.service';
import { PrismaProfileRepository } from './infrastructure/repositories-impl/prisma-profile.repository';
import { ProfileController } from './transport/profile.controller';
import { GetProfileUseCase } from './application/use-cases/get-profile.use-case';
import { UpdateProfileUseCase } from './application/use-cases/update-profile.use-case';

@Module({
    controllers: [ProfileController],
    providers: [
        PrismaService,
        {
            provide: 'IProfileRepository',
            useClass: PrismaProfileRepository,
        },
        GetProfileUseCase,
        UpdateProfileUseCase,
    ],
    exports: ['IProfileRepository', GetProfileUseCase],
})
export class ProfileModule { }
