import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateCollectionDto {
    @ApiProperty({
        description: 'Updated name of the recipe collection',
        example: 'Healthier Meals',
        minLength: 1,
        maxLength: 50,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    name: string;
}
