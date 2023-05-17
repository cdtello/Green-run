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
exports.Transaction = void 0;
const enum_1 = require("../../common/enum");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const userBet_entity_1 = require("./userBet.entity");
let Transaction = class Transaction {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enum_1.TransactionCategory }),
    __metadata("design:type", String)
], Transaction.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Transaction.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Transaction.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        precision: 0,
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Transaction.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Transaction.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Date)
], Transaction.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.transactions),
    __metadata("design:type", user_entity_1.User)
], Transaction.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => userBet_entity_1.UserBet, (userBet) => userBet.transactions),
    __metadata("design:type", userBet_entity_1.UserBet)
], Transaction.prototype, "user_bet", void 0);
Transaction = __decorate([
    (0, typeorm_1.Entity)()
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.entity.js.map