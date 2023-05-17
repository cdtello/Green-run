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


// @Injectable()
// export class BetsService {
//     constructor(
//         @InjectRepository(Bet)
//         private betRepository: Repository<Bet>,
//         @InjectRepository(Transaction)
//         private transactionRepository: Repository<Transaction>,
//         @InjectRepository(User) private userRepository: Repository<User>,
//     ) {}

//     findAll() {
//         return this.betRepository.find({
//             relations: ['transaction', 'user'],
//         });
//     }

//     async findOne(id: number) {
//         const product = await this.betRepository
//             .createQueryBuilder('bet')
//             .where('bet.id = :id', { id })
//             .leftJoinAndSelect('bet.transaction', 'transaction')
//             .leftJoinAndSelect('bet.user', 'user')
//             .getOne();
//         if (!product) {
//             throw new NotFoundException(`Bet #${id} not found`);
//         }
//         return product;
//     }

//     async create(data: CreateBetDto) {
//         const newBet = this.betRepository.create(data);
//         if (data.userId) {
//             const user = await this.userRepository.findOne({
//                 where: { id: data.userId },
//             });
//             newBet.user = user;
//         }
//         if (data.transactionId) {
//             const transaction = await this.transactionRepository.findOne({
//                 where: { id: data.transactionId },
//             });
//             newBet.transaction = transaction;
//         }
//         return this.betRepository.save(newBet);
//     }

//     async update(id: number, changes: UpdateBetDto) {
//         const bet = await this.betRepository.findOne({ where: { id } });
//         if (changes.userId) {
//             const user = await this.userRepository.findOne({
//                 where: { id: changes.userId },
//             });
//             bet.user = user;
//         }
//         if (changes.transactionId) {
//             const transaction = await this.transactionRepository.findOne({
//                 where: { id: changes.transactionId },
//             });
//             bet.transaction = transaction;
//         }
//         this.betRepository.merge(bet, changes);
//         return this.betRepository.save(bet);
//     }

//     remove(id: number) {
//         return this.betRepository.delete(id);
//     }
// }
