import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

import { Bet } from './entities/bet.entity';
import { Transaction } from './entities/transaction.entity';
import { BetsService } from './services/bets.service';
import { BetsController } from './controllers/bets.controller';
import { UserBet } from './entities/userBet.entity';
import { UserBetsController } from './controllers/userBets.controller';
import { TransactionsController } from './controllers/transactions.controller';
import { UserBetsService } from './services/userBets.service';
import { TransactionsService } from './services/transactions.service';

@Module({
    imports: [TypeOrmModule.forFeature([Bet, UserBet, Transaction])],
    controllers: [BetsController, UserBetsController, TransactionsController],
    providers: [BetsService, UserBetsService, TransactionsService],
    exports: [BetsService, UserBetsService, TransactionsService],
})
export class BetsModule {}
