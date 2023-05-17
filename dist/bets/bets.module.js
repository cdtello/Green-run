"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bet_entity_1 = require("./entities/bet.entity");
const transaction_entity_1 = require("./entities/transaction.entity");
const bets_service_1 = require("./services/bets.service");
const bets_controller_1 = require("./controllers/bets.controller");
const userBet_entity_1 = require("./entities/userBet.entity");
const userBets_controller_1 = require("./controllers/userBets.controller");
const transactions_controller_1 = require("./controllers/transactions.controller");
const userBets_service_1 = require("./services/userBets.service");
const transactions_service_1 = require("./services/transactions.service");
let BetsModule = class BetsModule {
};
BetsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bet_entity_1.Bet, userBet_entity_1.UserBet, transaction_entity_1.Transaction])],
        controllers: [bets_controller_1.BetsController, userBets_controller_1.UserBetsController, transactions_controller_1.TransactionsController],
        providers: [bets_service_1.BetsService, userBets_service_1.UserBetsService, transactions_service_1.TransactionsService],
        exports: [bets_service_1.BetsService, userBets_service_1.UserBetsService, transactions_service_1.TransactionsService],
    })
], BetsModule);
exports.BetsModule = BetsModule;
//# sourceMappingURL=bets.module.js.map