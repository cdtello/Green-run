import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Category, Gender } from '../../common/enum';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    address: string;

    @Column({ type: 'enum', enum: Gender })
    gender: Gender;

    @Column()
    birthDate: Date;

    @Column()
    countryId: number;

    @Column()
    city: string;

    @Column({ type: 'enum', enum: Category })
    category: Category;

    @Column({ default: true })
    isActive: boolean;
}
