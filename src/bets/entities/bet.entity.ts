import { Transaction } from 'src/transactions/entities/transaction.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @ManyToOne(() => Transaction, (transaction) => transaction.bets)
    transaction: Transaction;

    @ManyToOne(() => User, (user) => user.bets) // <-- Relación con la entidad User
    user: User;
}
