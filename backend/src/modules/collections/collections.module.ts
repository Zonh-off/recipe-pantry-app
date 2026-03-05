import { Module } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma.service';
import { CollectionsController } from './transport/collections.controller';
import { PrismaCollectionRepository } from './infrastructure/repositories-impl/prisma-collection.repository';
import { GetCollectionsUseCase } from './application/use-cases/get-collections.use-case';
import { CreateCollectionUseCase } from './application/use-cases/create-collection.use-case';
import { AddRecipeToCollectionUseCase } from './application/use-cases/add-recipe-to-collection.use-case';
import { RemoveRecipeFromCollectionUseCase } from './application/use-cases/remove-recipe-from-collection.use-case';
import { DeleteCollectionUseCase } from './application/use-cases/delete-collection.use-case';

@Module({
    controllers: [CollectionsController],
    providers: [
        PrismaService,
        {
            provide: 'ICollectionRepository',
            useClass: PrismaCollectionRepository,
        },
        GetCollectionsUseCase,
        CreateCollectionUseCase,
        AddRecipeToCollectionUseCase,
        RemoveRecipeFromCollectionUseCase,
        DeleteCollectionUseCase,
    ],
    exports: [GetCollectionsUseCase],
})
export class CollectionsModule { }
