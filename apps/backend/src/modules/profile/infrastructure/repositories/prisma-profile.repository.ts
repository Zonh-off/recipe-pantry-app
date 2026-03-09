import { Injectable } from '@nestjs/common';
import { IProfileRepository } from '../../domain/interfaces/profile.repository.interface';
import { PrismaService } from '@core/database/prisma.service';
import { ProfileEntity } from '../../domain/entities/profile.entity';

@Injectable()
export class PrismaProfileRepository implements IProfileRepository {
  constructor(private readonly prisma: PrismaService) { }

  async findByUserId(userId: string): Promise<ProfileEntity | null> {
    if (!userId) return null;
    const row = await this.prisma.profile.findUnique({
      where: { userId },
    });
    if (!row) return null;
    return this.mapToDomain(row);
  }

  async save(profile: Partial<ProfileEntity>): Promise<ProfileEntity> {
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

  async update(
    userId: string,
    profile: Partial<ProfileEntity>,
  ): Promise<ProfileEntity> {
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

  private mapToDomain(row: any): ProfileEntity {
    return new ProfileEntity(
      row.id,
      row.userId,
      row.diet,
      row.intolerances,
      row.cuisines,
      row.goals,
    );
  }
}
