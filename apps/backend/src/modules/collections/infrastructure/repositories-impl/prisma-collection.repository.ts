import { Injectable } from '@nestjs/common';
import {
  ICollectionRepository,
  Collection,
} from '../../domain/collection.repository.interface';
import { PrismaService } from '../../../../shared/database/prisma.service';

@Injectable()
export class PrismaCollectionRepository implements ICollectionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Partial<Collection>): Promise<Collection> {
    const row = await this.prisma.collection.create({
      data: {
        userId: data.userId!,
        name: data.name!,
        recipeIds: data.recipeIds || [],
      },
    });
    return this.mapToDomain(row);
  }

  async update(id: string, data: Partial<Collection>): Promise<Collection> {
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

  async findById(id: string): Promise<Collection | null> {
    const row = await this.prisma.collection.findUnique({ where: { id } });
    if (!row) return null;
    return this.mapToDomain(row);
  }

  async findByUserId(userId: string): Promise<Collection[]> {
    const rows = await this.prisma.collection.findMany({ where: { userId } });
    return rows.map((r) => this.mapToDomain(r));
  }

  async findByName(userId: string, name: string): Promise<Collection | null> {
    const row = await this.prisma.collection.findFirst({
      where: { userId, name },
    });
    if (!row) return null;
    return this.mapToDomain(row);
  }

  private mapToDomain(row: any): Collection {
    return new Collection(
      row.id,
      row.userId,
      row.name,
      row.recipeIds,
      row.createdAt,
      row.updatedAt,
    );
  }
}
