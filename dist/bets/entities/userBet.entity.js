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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBet = void 0;
const enum_1 = require("../../common/enum");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const bet_entity_1 = require("./bet.entity");
const transaction_entity_1 = require("./transaction.entity");
let UserBet = class UserBet {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserBet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserBet.prototype, "odd", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserBet.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enum_1.UserBetState }),
    __metadata("design:type", String)
], UserBet.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], UserBet.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], UserBet.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserBet.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Date)
], UserBet.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.user_bets),
    __metadata("design:type", user_entity_1.User)
], UserBet.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bet_entity_1.Bet, (bet) => bet.user_bets),
    __metadata("design:type", bet_entity_1.Bet)
], UserBet.prototype, "bet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_entity_1.Transaction, (transaction) => transaction.user_bet),
    __metadata("design:type", Array)
], UserBet.prototype, "transactions", void 0);
UserBet = __decorate([
    (0, typeorm_1.Entity)()
], UserBet);
exports.UserBet = UserBet;
//# sourceMappingURL=userBet.entity.js.map