import { Transaction } from '../../bets/entities/transaction.entity';
import { UserBet } from '../../bets/entities/userBet.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

import { Category, Gender, Role } from '../../common/enum';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: Role })
    @Column()
    role: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

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
    birth_date: Date;

    @Column()
    country_id: number;

    @Column()
    city: string;

    @Column({ type: 'enum', enum: Category })
    category: Category;

    @Column()
    document_id: string;

    @Column()
    user_state: string;

    @CreateDateColumn({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    @Column()
    updated_at: Date;

    @Column({ default: false })
    deleted: boolean;

    @Column({ default: null })
    deleted_at: Date;

    @OneToMany(() => Transaction, (transaction) => transaction.user)
    transactions: Transaction[];

    @OneToMany(() => UserBet, (userBet) => userBet.user)
    user_bets: UserBet[];
}
