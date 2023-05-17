import { UserBet } from './userBet.entity';
export declare class Bet {
    id: number;
    bet_option: number;
    sport: string;
    status: string;
    name: string;
    event_id: number;
    odd: number;
    result: string;
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
    deleted_at: Date;
    user_bets: UserBet[];
}
