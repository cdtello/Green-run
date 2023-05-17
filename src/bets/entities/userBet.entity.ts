import { UserBetState } from '../../common/enum';
import { User } from '../../users/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { Bet } from './bet.entity';
import { Transaction } from './transaction.entity';

@Entity()
export class UserBet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    odd: number;

    @Column()
    amount: number;

    @Column({ type: 'enum', enum: UserBetState })
    state: string;

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

    @ManyToOne(() => User, (user) => user.user_bets)
    user: User;

    @ManyToOne(() => Bet, (bet) => bet.user_bets)
    bet: Bet;

    @OneToMany(() => Transaction, (transaction) => transaction.user_bet)
    transactions: Transaction[];
}
