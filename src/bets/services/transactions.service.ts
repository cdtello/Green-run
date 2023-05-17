import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Transaction } from "../entities/transaction.entity";
import { CreateTransactionDto, UpdateTransactionDto } from "../dtos/transaction.dto";

@Injectable()
export class TransactionsService {
    constructor(@InjectRepository(Transaction) private transactionsRepo: Repository<Transaction>) { }

    findAll() {
        return this.transactionsRepo.find();
    }

    findOne(id: number) {
        const userBet = this.transactionsRepo.findOne({
            where: {id},
        });
        if (!userBet) {
            throw new NotFoundException(`Transaction #${id} not found`);
        }
        return userBet;
    }

    create(data: CreateTransactionDto) {
        const newBrand = this.transactionsRepo.create(data);
        return this.transactionsRepo.save(newBrand);
    }

    async update(id: number, changes: UpdateTransactionDto) {
        const bet = await this.findOne(id);
        this.transactionsRepo.merge(bet, changes);
        return this.transactionsRepo.save(bet);
    }

    remove(id: number) {
        return this.transactionsRepo.delete(id);
    }
}
