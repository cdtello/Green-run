import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserBet } from "../entities/userBet.entity";

@Injectable()
export class UserBetsService {
    constructor(@InjectRepository(UserBet) private betsRepo: Repository<UserBet>) { }
}
