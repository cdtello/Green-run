import { BetResult, BetStatus } from '../../common/enum';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { UserBet } from './userBet.entity';

@Entity()
export class Bet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bet_option: number;

    @Column()
    sport: string;

    @Column({ type: 'enum', enum: BetStatus })
    status: string;

    @Column()
    name: string;

    @Column()
    event_id: number;

    @Column()
    odd: number;

    @Column({ type: 'enum', enum: BetResult })
    result: string;

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

    @OneToMany(() => UserBet, (userBet) => userBet.bet)
    user_bets: UserBet[];
}
