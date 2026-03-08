import { Injectable } from '@nestjs/common';
import { IPantryRepository } from '../../domain/repositories/pantry-repository.interface';
import { PrismaService } from '../../../../shared/database/prisma.service';
import { PantryItem } from '../../domain/entities/pantry-item.entity';

@Injectable()
export class PrismaPantryRepository implements IPantryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addItem(item: Partial<PantryItem>): Promise<PantryItem> {
    const created = await this.prisma.pantryItem.create({
      data: {
        userId: item.userId!,
        name: item.name!,
        ingredientId: item.ingredientId!,
        amount: item.amount,
        unit: item.unit,
      },
    });
    return this.mapToDomain(created);
  }

  async updateItem(id: string, item: Partial<PantryItem>): Promise<PantryItem> {
    const updated = await this.prisma.pantryItem.update({
      where: { id },
      data: {
        amount: item.amount,
        unit: item.unit,
      },
    });
    return this.mapToDomain(updated);
  }

  async removeItem(id: string): Promise<void> {
    await this.prisma.pantryItem.delete({ where: { id } });
  }

  async findByUserId(userId: string): Promise<PantryItem[]> {
    const items = await this.prisma.pantryItem.findMany({ where: { userId } });
    return items.map((item) => this.mapToDomain(item));
  }

  async findByIngredientId(
    userId: string,
    ingredientId: number,
  ): Promise<PantryItem | null> {
    const item = await this.prisma.pantryItem.findUnique({
      where: {
        userId_ingredientId: { userId, ingredientId },
      },
    });
    if (!item) return null;
    return this.mapToDomain(item);
  }

  private mapToDomain(dbItem: any): PantryItem {
    return new PantryItem(
      dbItem.id,
      dbItem.userId,
      dbItem.name,
      dbItem.ingredientId,
      dbItem.amount,
      dbItem.unit,
      dbItem.createdAt,
      dbItem.updatedAt,
    );
  }

  async list(userId: string): Promise<PantryItem[]> {
    const rows = await this.prisma.pantryItem.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    return rows.map(
      (r) =>
        new PantryItem(
          r.id,
          r.userId,
          r.name,
          r.ingredientId,
          r.amount,
          r.unit,
          r.createdAt,
          r.updatedAt,
        ),
    );
  }
}
