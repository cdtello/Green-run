import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

import { Bet } from './entities/bet.entity';
import { Transaction } from './entities/transaction.entity';
import { BetsService } from './services/bets.service';
import { BetsController } from './controllers/bets.controller';
import { UserBet } from './entities/userBet.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Bet, UserBet, Transaction])],
    controllers: [BetsController],
    providers: [BetsService],
    exports: [BetsService],
})
export class BetsModule {}
