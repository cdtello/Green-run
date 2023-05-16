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
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lastName: string;

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
    birthDate: Date;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    countryId: number;

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
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
