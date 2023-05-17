import { User } from '../../users/entities/user.entity';
import { UserBet } from './userBet.entity';
export declare class Transaction {
    id: number;
    amount: number;
    category: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
    deleted_at: Date;
    user: User;
    user_bet: UserBet;
}
