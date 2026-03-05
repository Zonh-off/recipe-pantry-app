import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../shared/database/prisma.service';
import { GroceryItem, IGroceryRepository } from '../../domain/grocery.repository.interface';

import { GroceryItem as PrismaGroceryItem } from '@prisma/client';

@Injectable()
export class PrismaGroceryRepository implements IGroceryRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findByUserId(userId: string): Promise<GroceryItem[]> {
        const items = await this.prisma.groceryItem.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });

        return items.map((item: PrismaGroceryItem) => this.mapToDomain(item));
    }

    async findById(id: string): Promise<GroceryItem | null> {
        const item = await this.prisma.groceryItem.findUnique({
            where: { id },
        });

        return item ? this.mapToDomain(item) : null;
    }

    async findByName(userId: string, name: string): Promise<GroceryItem | null> {
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
    }): Promise<GroceryItem> {
        const item = await this.prisma.groceryItem.create({
            data: {
                userId: data.userId,
                name: data.name,
                amount: data.amount,
                unit: data.unit,
            },
        });

        return this.mapToDomain(item);
    }

    async update(id: string, data: Partial<Omit<GroceryItem, 'id' | 'userId'>>): Promise<GroceryItem> {
        const item = await this.prisma.groceryItem.update({
            where: { id },
            data: {
                name: data.name,
                amount: data.amount,
                unit: data.unit,
                checked: data.checked,
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

    private mapToDomain(raw: PrismaGroceryItem): GroceryItem {
        return new GroceryItem(
            raw.id,
            raw.userId,
            raw.name,
            raw.amount,
            raw.unit,
            raw.checked,
        );
    }
}
