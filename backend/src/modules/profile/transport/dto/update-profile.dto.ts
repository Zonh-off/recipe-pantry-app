import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsArray, IsString } from 'class-validator';

export class UpdateProfileDto {
    @ApiProperty({
        description: 'List of dietary preferences (e.g., vegan, gluten-free)',
        example: ['vegan'],
        required: false,
        isArray: true,
        type: String,
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    diet?: string[];

    @ApiProperty({
        description: 'List of food intolerances',
        example: ['peanut', 'dairy'],
        required: false,
        isArray: true,
        type: String,
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    intolerances?: string[];

    @ApiProperty({
        description: 'List of favorite cuisines',
        example: ['italian', 'mexican'],
        required: false,
        isArray: true,
        type: String,
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    cuisines?: string[];

    @ApiProperty({
        description: 'Health or cooking goals',
        example: ['weight loss', 'save time'],
        required: false,
        isArray: true,
        type: String,
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    goals?: string[];
}
