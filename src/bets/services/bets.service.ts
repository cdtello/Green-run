import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionsService } from 'src/transactions/services/transactions.service';
import { UsersService } from 'src/users/services/users.service';
import { Repository } from 'typeorm';

import { CreateBetDto } from '../dtos/bet.dto';
import { Bet } from '../entities/bet.entity';

@Injectable()
export class BetsService {
    constructor(
        @InjectRepository(Bet) private readonly betRepository: Repository<Bet>,
        private readonly userService: UsersService,
        private readonly transactionService: TransactionsService,
    ) {}

    async createBet(userId: number, createBetDto: CreateBetDto): Promise<Bet> {
        const { amount, transactionId } = createBetDto;

        const user = await this.userService.findOne(userId);
        const transaction = await this.transactionService.findOne(
            transactionId,
        );

        const bet = new Bet();
        bet.amount = amount;
        bet.user = user;
        bet.transaction = transaction;

        return this.betRepository.save(bet);
    }

    async getAllBets(): Promise<Bet[]> {
        return this.betRepository.find();
    }
}
