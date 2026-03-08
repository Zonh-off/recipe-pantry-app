import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsBoolean,
  Min,
} from 'class-validator';

export class CreateGroceryItemDto {
  @ApiProperty({
    example: 'Almond Milk',
    description: 'Name of the item to buy',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 1, description: 'Quantity' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @ApiPropertyOptional({ example: 'liter', description: 'Unit of measurement' })
  @IsOptional()
  @IsString()
  unit?: string;
}

export class UpdateGroceryItemDto {
  @ApiPropertyOptional({ example: 'Almond Milk' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 2 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @ApiPropertyOptional({ example: 'liters' })
  @IsOptional()
  @IsString()
  unit?: string;

  @ApiPropertyOptional({ example: true, description: 'Mark item as bought' })
  @IsOptional()
  @IsBoolean()
  checked?: boolean;
}

export class BulkAddItemDto {
  @ApiProperty({
    type: [CreateGroceryItemDto],
    description: 'List of ingredients to add',
  })
  @IsNotEmpty()
  items: CreateGroceryItemDto[];
}
