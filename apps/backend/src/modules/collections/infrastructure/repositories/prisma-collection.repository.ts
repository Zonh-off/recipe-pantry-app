import { Injectable } from '@nestjs/common';
import { ICollectionRepository } from '../../domain/repositories/collection.repository.interface';
import { PrismaService } from '@core/database/prisma.service';
import { CollectionEntity } from '../../domain/entities/collection.entity';

@Injectable()
export class PrismaCollectionRepository implements ICollectionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<CollectionEntity>): Promise<CollectionEntity> {
    const row = await this.prisma.collection.create({
      data: {
        userId: data.userId!,
        name: data.name!,
        recipeIds: data.recipeIds || [],
      },
    });
    return this.mapToDomain(row);
  }

  async update(
    id: string,
    data: Partial<CollectionEntity>,
  ): Promise<CollectionEntity> {
    const updated = await this.prisma.collection.update({
      where: { id },
      data: {
        name: data.name,
        recipeIds: data.recipeIds,
      },
    });
    return this.mapToDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.collection.delete({ where: { id } });
  }

  async findById(id: string): Promise<CollectionEntity | null> {
    const row = await this.prisma.collection.findUnique({ where: { id } });
    if (!row) return null;
    return this.mapToDomain(row);
  }

  async findByUserId(userId: string): Promise<CollectionEntity[]> {
    const rows = await this.prisma.collection.findMany({ where: { userId } });
    return rows.map((r) => this.mapToDomain(r));
  }

  async findByName(
    userId: string,
    name: string,
  ): Promise<CollectionEntity | null> {
    const row = await this.prisma.collection.findFirst({
      where: { userId, name },
    });
    if (!row) return null;
    return this.mapToDomain(row);
  }

  private mapToDomain(row: any): CollectionEntity {
    return new CollectionEntity(
      row.id,
      row.userId,
      row.name,
      row.recipeIds,
      row.createdAt,
      row.updatedAt,
    );
  }
}
