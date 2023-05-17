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
exports.UpdateBetDto = exports.CreateBetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enum_1 = require("../../common/enum");
class CreateBetDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBetDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBetDto.prototype, "bet_option", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBetDto.prototype, "sport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(enum_1.BetStatus),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBetDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBetDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBetDto.prototype, "event_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBetDto.prototype, "odd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(enum_1.BetResult),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBetDto.prototype, "result", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateBetDto.prototype, "transactionId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateBetDto.prototype, "userId", void 0);
exports.CreateBetDto = CreateBetDto;
class UpdateBetDto extends (0, swagger_1.PartialType)(CreateBetDto) {
}
exports.UpdateBetDto = UpdateBetDto;
//# sourceMappingURL=bet.dto.js.map