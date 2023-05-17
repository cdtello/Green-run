"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bet_entity_1 = require("../entities/bet.entity");
let BetsService = class BetsService {
    constructor(betsRepo) {
        this.betsRepo = betsRepo;
    }
    findAll() {
        return this.betsRepo.find();
    }
    findOne(id) {
        const bet = this.betsRepo.findOne({
            relations: ['user_bets'],
        });
        if (!bet) {
            throw new common_1.NotFoundException(`Bet #${id} not found`);
        }
        return bet;
    }
    create(data) {
        const newBrand = this.betsRepo.create(data);
        return this.betsRepo.save(newBrand);
    }
    async update(id, changes) {
        const bet = await this.findOne(id);
        this.betsRepo.merge(bet, changes);
        return this.betsRepo.save(bet);
    }
    remove(id) {
        return this.betsRepo.delete(id);
    }
};
BetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bet_entity_1.Bet)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BetsService);
exports.BetsService = BetsService;
//# sourceMappingURL=bets.service.js.map