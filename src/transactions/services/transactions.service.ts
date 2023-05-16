import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

import { TransactionDto } from '../dtos/transactions.dto';
import { Transaction } from '../entities/transaction.entity';

@Injectable()
export class TransactionsService {
    constructor(
        @InjectRepository(Transaction)
        private readonly transactionRepository: Repository<Transaction>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(userId: number) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        return user.transactions;
    }

    async findOne(transactionId: number) {
        const transaction = await this.transactionRepository.findOne({
            where: { id: transactionId },
        });
        return transaction;
    }

    async create(userId: number, transactionDto: TransactionDto) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        const transaction = new Transaction();
        transaction.amount = transactionDto.amount;
        transaction.description = transactionDto.description;
        transaction.user = user;
        return this.transactionRepository.save(transaction);
    }
}
