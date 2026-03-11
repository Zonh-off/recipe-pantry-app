import { Injectable } from '@nestjs/common';
import { IGroceryRepository } from '../../domain/interfaces/grocery.repository.interface';
import { PrismaService } from '@core/database/prisma.service';
import { GroceryItemEntity } from '../../domain/entities/grocery-item.entity';

@Injectable()
export class PrismaGroceryRepository implements IGroceryRepository {
  constructor(private readonly prisma: PrismaService) { }

  async findByUserId(userId: string): Promise<GroceryItemEntity[]> {
    const items = await this.prisma.groceryItem.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    return items.map((item: any) => this.mapToDomain(item));
  }

  async findById(id: string): Promise<GroceryItemEntity | null> {
    const item = await this.prisma.groceryItem.findUnique({
      where: { id },
    });

    return item ? this.mapToDomain(item) : null;
  }

  async findByName(
    userId: string,
    name: string,
  ): Promise<GroceryItemEntity | null> {
    const item = await this.prisma.groceryItem.findFirst({
      where: { userId, name },
    });

    return item ? this.mapToDomain(item) : null;
  }

  async create(data: {
    userId: string;
    name: string;
    amount?: number | null;
    unit?: string | null;
    recipeName?: string | null;
  }): Promise<GroceryItemEntity> {
    const item = await this.prisma.groceryItem.create({
      data: {
        userId: data.userId,
        name: data.name,
        amount: data.amount,
        unit: data.unit,
        recipeName: data.recipeName,
      },
    });

    return this.mapToDomain(item);
  }

  async update(
    id: string,
    data: Partial<Omit<GroceryItemEntity, 'id' | 'userId'>>,
  ): Promise<GroceryItemEntity> {
    const item = await this.prisma.groceryItem.update({
      where: { id },
      data: {
        name: data.name,
        amount: data.amount,
        unit: data.unit,
        checked: data.checked,
        recipeName: data.recipeName,
      },
    });

    return this.mapToDomain(item);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.groceryItem.delete({
      where: { id },
    });
  }

  async clearChecked(userId: string): Promise<number> {
    const result = await this.prisma.groceryItem.deleteMany({
      where: {
        userId,
        checked: true,
      },
    });

    return result.count;
  }

  private mapToDomain(raw: any): GroceryItemEntity {
    return new GroceryItemEntity(
      raw.id,
      raw.userId,
      raw.name,
      raw.amount,
      raw.unit,
      raw.checked,
      raw.recipeName,
    );
  }
}
