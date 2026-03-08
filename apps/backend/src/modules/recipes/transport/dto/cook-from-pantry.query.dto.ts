import { Transform } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CookFromPantryQueryDto {
  @ApiPropertyOptional({
    example: 0,
    description: 'Maximum allowed missing ingredients',
  })
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? undefined : Number(value)))
  @IsInt()
  @Min(0)
  @Max(50)
  maxMissing?: number;

  @ApiPropertyOptional({
    example: 12,
    description: 'Number of recipes to return',
  })
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? 12 : Number(value)))
  @IsInt()
  @Min(1)
  @Max(20)
  limit: number = 12;
}
