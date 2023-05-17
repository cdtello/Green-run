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
