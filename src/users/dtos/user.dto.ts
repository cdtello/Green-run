import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Category, Gender } from '../../common/enum';

@Entity()
export class CreateUserDto {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    firstName: string;

    @ApiProperty()
    @Column()
    lastName: string;

    @ApiProperty()
    @Column()
    phone: string;

    @ApiProperty()
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    username: string;

    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty()
    @Column()
    address: string;

    @ApiProperty()
    @Column({ type: 'enum', enum: Gender })
    gender: Gender;

    @ApiProperty()
    @Column()
    birthDate: Date;

    @ApiProperty()
    @Column()
    countryId: number;

    @ApiProperty()
    @Column()
    city: string;

    @ApiProperty()
    @Column({ type: 'enum', enum: Category })
    category: Category;

    @ApiProperty()
    @Column({ default: true })
    isActive: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
