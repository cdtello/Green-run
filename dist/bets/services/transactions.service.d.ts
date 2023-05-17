import { Repository } from "typeorm";
import { Transaction } from "../entities/transaction.entity";
export declare class TransactionsService {
    private betsRepo;
    constructor(betsRepo: Repository<Transaction>);
}
