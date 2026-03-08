import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchRecipesQueryDto {
  @ApiProperty({
    example: 'pasta',
    description: 'General search keyword',
    required: false,
  })
  @IsOptional()
  @IsString()
  query?: string;

  @ApiProperty({
    example: 'vegan',
    description: 'Diet type (e.g., vegan, paleo, keto)',
    required: false,
  })
  @IsOptional()
  @IsString()
  diet?: string;

  @ApiProperty({
    example: 'gluten',
    description: 'Comma-separated intolerances (e.g., gluten, dairy)',
    required: false,
  })
  @IsOptional()
  @IsString()
  intolerances?: string;

  @ApiProperty({
    example: 'italian',
    description: 'Cuisine type (e.g., italian, mexican)',
    required: false,
  })
  @IsOptional()
  @IsString()
  cuisine?: string;

  @ApiProperty({
    example: 30,
    description: 'Maximum preparation time in minutes',
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? undefined : Number(value)))
  @IsInt()
  @Min(1)
  @Max(240)
  maxReadyTime?: number;

  @ApiProperty({
    example: 200,
    description: 'Minimum calories per serving',
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? undefined : Number(value)))
  @IsInt()
  @Min(0)
  minCalories?: number;

  @ApiProperty({
    example: 800,
    description: 'Maximum calories per serving',
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? undefined : Number(value)))
  @IsInt()
  @Min(0)
  maxCalories?: number;

  @ApiProperty({
    example: 1,
    description: 'Page number for pagination',
    default: 1,
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? 1 : Number(value)))
  @IsInt()
  @Min(1)
  page: number = 1;

  @ApiProperty({
    example: 12,
    description: 'Number of results per page',
    default: 12,
    required: false,
  })
  @IsOptional()
  @Transform(({ value }) => (value === undefined ? 12 : Number(value)))
  @IsInt()
  @Min(1)
  @Max(20)
  pageSize: number = 12;
}
