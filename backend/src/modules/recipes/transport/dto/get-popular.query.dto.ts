import { IsOptional, IsString, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class GetPopularQueryDto {
    @ApiProperty({
        example: 'main course',
        description: 'Meal type category (e.g., breakfast, dessert, main course)',
        required: false,
    })
    @IsOptional()
    @IsString()
    category?: string;

    @ApiProperty({
        example: 20,
        description: 'Number of recipes to return',
        default: 20,
        required: false,
    })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    @Max(80)
    limit: number = 20;
}
