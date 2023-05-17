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
exports.Bet = void 0;
const enum_1 = require("../../common/enum");
const typeorm_1 = require("typeorm");
const userBet_entity_1 = require("./userBet.entity");
let Bet = class Bet {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Bet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bet.prototype, "bet_option", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bet.prototype, "sport", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enum_1.BetStatus }),
    __metadata("design:type", String)
], Bet.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bet.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bet.prototype, "event_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bet.prototype, "odd", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enum_1.BetResult }),
    __metadata("design:type", String)
], Bet.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Bet.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Bet.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Bet.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Date)
], Bet.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => userBet_entity_1.UserBet, (userBet) => userBet.bet),
    __metadata("design:type", Array)
], Bet.prototype, "user_bets", void 0);
Bet = __decorate([
    (0, typeorm_1.Entity)()
], Bet);
exports.Bet = Bet;
//# sourceMappingURL=bet.entity.js.map