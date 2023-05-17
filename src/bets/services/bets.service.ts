import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBetDto, UpdateBetDto } from '../dtos/bet.dto';
import { Bet } from '../entities/bet.entity';

@Injectable()
export class BetsService {
    constructor(@InjectRepository(Bet) private betsRepo: Repository<Bet>) {}

    findAll() {
        return this.betsRepo.find();
    }

    findOne(id: number) {
        const bet = this.betsRepo.findOne({
            relations: ['user_bets'],
        });
        if (!bet) {
            throw new NotFoundException(`Bet #${id} not found`);
        }
        return bet;
    }

    create(data: CreateBetDto) {
        const newBrand = this.betsRepo.create(data);
        return this.betsRepo.save(newBrand);
    }

    async update(id: number, changes: UpdateBetDto) {
        const bet = await this.findOne(id);
        this.betsRepo.merge(bet, changes);
        return this.betsRepo.save(bet);
    }

    remove(id: number) {
        return this.betsRepo.delete(id);
    }
}
