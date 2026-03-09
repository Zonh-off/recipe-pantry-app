import { Module } from '@nestjs/common';
import { CollectionsController } from './transport/collections.controller';
import { DatabaseModule } from '@/core/database/database.module';
import { COLLECTION_REPOSITORY } from '@modules/collections/domain/repositories/collection.repository.interface';
import { PrismaCollectionRepository } from './infrastructure/repositories/prisma-collection.repository';
import {
  AddRecipeToCollectionUseCase,
  CreateCollectionUseCase,
  DeleteCollectionUseCase,
  GetCollectionsUseCase,
  RemoveRecipeFromCollectionUseCase,
} from './application/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [CollectionsController],
  providers: [
    {
      provide: COLLECTION_REPOSITORY,
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
export class CollectionsModule {}
