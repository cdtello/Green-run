import { CreateBetDto, UpdateBetDto } from '../dtos/bet.dto';
import { BetsService } from '../services/bets.service';
export declare class BetsController {
    private betsService;
    constructor(betsService: BetsService);
    findAll(): Promise<import("../entities/bet.entity").Bet[]>;
    get(id: number): Promise<import("../entities/bet.entity").Bet>;
    create(payload: CreateBetDto): Promise<import("../entities/bet.entity").Bet>;
    update(id: number, payload: UpdateBetDto): Promise<import("../entities/bet.entity").Bet>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
