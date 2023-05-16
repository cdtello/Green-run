import { Bet } from 'src/bets/entities/bet.entity';
import { User } from 'src/users/entities/user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    ManyToMany,
    JoinTable,
} from 'typeorm';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    status: string;

    @Column({ nullable: true })
    userBetId: number;

    @ManyToOne(() => User, (user) => user.transactions)
    user: User;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @Column({ default: false })
    deleted: boolean;

    @Column({ nullable: true })
    deleted_at: Date;

    @ManyToMany(() => Bet)
    @JoinTable()
    bets: Bet[];
}
