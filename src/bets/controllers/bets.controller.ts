// bet.controller.ts

import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import RequestWithUser from 'src/common/user.interface';

import { CreateBetDto } from '../dtos/bet.dto';
import { Bet } from '../entities/bet.entity';
import { BetsService } from '../services/bets.service';

@Controller('bets')
export class BetsController {
    constructor(private readonly betService: BetsService) {}

    @Post()
    async createBet(
        @Req() req: RequestWithUser,
        @Body() createBetDto: CreateBetDto,
    ): Promise<Bet> {
        return this.betService.createBet(req.user.id, createBetDto);
    }

    @Get()
    async getAllBets(): Promise<Bet[]> {
        return this.betService.getAllBets();
    }
}
