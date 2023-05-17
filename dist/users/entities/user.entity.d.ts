import { Transaction } from '../../bets/entities/transaction.entity';
import { UserBet } from '../../bets/entities/userBet.entity';
import { Category, Gender } from '../../common/enum';
export declare class User {
    id: number;
    role: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    address: string;
    gender: Gender;
    birth_date: Date;
    country_id: number;
    city: string;
    category: Category;
    document_id: string;
    user_state: string;
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
    deleted_at: Date;
    transactions: Transaction[];
    user_bets: UserBet[];
}
