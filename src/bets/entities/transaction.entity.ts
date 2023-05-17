import { TransactionCategory } from '../../common/enum';
import { User } from '../../users/entities/user.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

import { UserBet } from './userBet.entity';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    amount: number;

    @Column({ type: 'enum', enum: TransactionCategory })
    category: string;

    @Column()
    status: string;

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

    @ManyToOne(() => User, (user) => user.transactions)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => UserBet, (userBet) => userBet.transactions)
    @JoinColumn({ name: 'user_bet_id' })
    user_bet: UserBet;
}
