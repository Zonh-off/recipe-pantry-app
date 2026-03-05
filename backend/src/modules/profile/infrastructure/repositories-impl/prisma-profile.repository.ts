import { Injectable } from '@nestjs/common';
import { IProfileRepository, Profile } from '../../domain/profile.repository.interface';
import { PrismaService } from '../../../../shared/database/prisma.service';

@Injectable()
export class PrismaProfileRepository implements IProfileRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findByUserId(userId: string): Promise<Profile | null> {
        const row = await this.prisma.profile.findUnique({
            where: { userId },
        });
        if (!row) return null;
        return this.mapToDomain(row);
    }

    async save(profile: Partial<Profile>): Promise<Profile> {
        const created = await this.prisma.profile.create({
            data: {
                userId: profile.userId!,
                diet: profile.diet || [],
                intolerances: profile.intolerances || [],
                cuisines: profile.cuisines || [],
                goals: profile.goals || [],
            },
        });
        return this.mapToDomain(created);
    }

    async update(userId: string, profile: Partial<Profile>): Promise<Profile> {
        const updated = await this.prisma.profile.update({
            where: { userId },
            data: {
                diet: profile.diet,
                intolerances: profile.intolerances,
                cuisines: profile.cuisines,
                goals: profile.goals,
            },
        });
        return this.mapToDomain(updated);
    }

    private mapToDomain(row: any): Profile {
        return new Profile(
            row.id,
            row.userId,
            row.diet,
            row.intolerances,
            row.cuisines,
            row.goals,
        );
    }
}
