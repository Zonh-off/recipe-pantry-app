import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AddPantryItemDto {
  @ApiProperty({
    description: 'Name of the ingredient to add (e.g., pasta, eggs, milk)',
    example: 'spaghetti',
  })
  @IsString()
  @IsNotEmpty()
  ingredientName: string;

  @ApiPropertyOptional({
    description: 'Amount/quantity available',
    example: 500,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  amount?: number;

  @ApiPropertyOptional({
    description: 'Unit of measurement (e.g., oz, grams, pieces)',
    example: 'grams',
  })
  @IsString()
  @IsOptional()
  unit?: string;
}
