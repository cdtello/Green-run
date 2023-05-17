import { Repository } from 'typeorm';
import { CreateBetDto, UpdateBetDto } from '../dtos/bet.dto';
import { Bet } from '../entities/bet.entity';
export declare class BetsService {
    private betsRepo;
    constructor(betsRepo: Repository<Bet>);
    findAll(): Promise<Bet[]>;
    findOne(id: number): Promise<Bet>;
    create(data: CreateBetDto): Promise<Bet>;
    update(id: number, changes: UpdateBetDto): Promise<Bet>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
