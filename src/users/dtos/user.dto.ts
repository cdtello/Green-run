import { PartialType, ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    IsNumber,
    IsNotEmpty,
    IsEmail,
    IsEnum,
    IsBoolean,
} from 'class-validator';

import { Category, Gender } from '../../common/enum';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    role: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    last_name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    phone: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    address: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    gender: Gender;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    birth_date: Date;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    country_id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    city: string;

    @IsEnum(Category)
    @IsNotEmpty()
    @ApiProperty()
    category: Category;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    isActive: boolean;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    document_id: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    user_state: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
