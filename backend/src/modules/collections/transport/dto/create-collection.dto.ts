import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCollectionDto {
    @ApiProperty({
        description: 'Name of the new recipe collection',
        example: 'Keto Favorites',
        minLength: 1,
        maxLength: 50,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    name: string;
}
