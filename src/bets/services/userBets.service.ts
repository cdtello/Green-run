import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserBet } from "../entities/userBet.entity";
import { CreateUserBetDto, UpdateUserBetDto } from "../dtos/userBet.dto";

@Injectable()
export class UserBetsService {
    constructor(@InjectRepository(UserBet) private userBetsRepo: Repository<UserBet>) { }

    findAll() {
        return this.userBetsRepo.find();
    }

    findOne(id: number) {
        const userBet = this.userBetsRepo.findOne({
            where: {id},
        });
        if (!userBet) {
            throw new NotFoundException(`Bet #${id} not found`);
        }
        return userBet;
    }

    create(data: CreateUserBetDto) {
        const newBrand = this.userBetsRepo.create(data);
        return this.userBetsRepo.save(newBrand);
    }

    async update(id: number, changes: UpdateUserBetDto) {
        const bet = await this.findOne(id);
        this.userBetsRepo.merge(bet, changes);
        return this.userBetsRepo.save(bet);
    }

    remove(id: number) {
        return this.userBetsRepo.delete(id);
    }
}

