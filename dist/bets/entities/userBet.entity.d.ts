import { User } from '../../users/entities/user.entity';
import { Bet } from './bet.entity';
import { Transaction } from './transaction.entity';
export declare class UserBet {
    id: number;
    odd: number;
    amount: number;
    state: string;
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
    deleted_at: Date;
    user: User;
    bet: Bet;
    transactions: Transaction[];
}
