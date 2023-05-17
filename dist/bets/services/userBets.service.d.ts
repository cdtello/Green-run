import { Repository } from "typeorm";
import { UserBet } from "../entities/userBet.entity";
export declare class UserBetsService {
    private betsRepo;
    constructor(betsRepo: Repository<UserBet>);
}
