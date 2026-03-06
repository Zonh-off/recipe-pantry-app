import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @ApiProperty({ example: 'user@example.com', description: 'User email address' })
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @ApiProperty({ example: 'password123', description: 'Strong user password (min length: 8)' })
    @IsString()
    @MinLength(8)
    @MaxLength(64)
    @IsNotEmpty()
    password!: string;

    @ApiProperty({ example: 'John Doe', description: 'User full name' })
    @IsString()
    @IsNotEmpty()
    name!: string;
}
