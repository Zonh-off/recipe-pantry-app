import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePantryItemDto {
  @ApiPropertyOptional({
    description: 'Updated quantity',
    example: 1000,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @ApiPropertyOptional({
    description: 'Updated unit of measurement',
    example: 'ml',
  })
  @IsOptional()
  @IsString()
  unit?: string;
}
