"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBetState = exports.BetResult = exports.BetStatus = exports.TransactionCategory = exports.Role = exports.Gender = exports.Category = void 0;
var Category;
(function (Category) {
    Category["SPORTS"] = "sports";
    Category["CASINO"] = "casino";
    Category["POKER"] = "poker";
})(Category = exports.Category || (exports.Category = {}));
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
    Gender["OTHER"] = "other";
})(Gender = exports.Gender || (exports.Gender = {}));
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["STANDART"] = "standart";
})(Role = exports.Role || (exports.Role = {}));
var TransactionCategory;
(function (TransactionCategory) {
    TransactionCategory["DEPOSIT"] = "deposit";
    TransactionCategory["WITHDRAW"] = "withdraw";
    TransactionCategory["BET"] = "bet";
    TransactionCategory["WINNING"] = "winning";
})(TransactionCategory = exports.TransactionCategory || (exports.TransactionCategory = {}));
var BetStatus;
(function (BetStatus) {
    BetStatus["ACTIVE"] = "active";
    BetStatus["CANCELLED"] = "canceled";
    BetStatus["SETTLET"] = "settled";
})(BetStatus = exports.BetStatus || (exports.BetStatus = {}));
var BetResult;
(function (BetResult) {
    BetResult["WON"] = "won";
    BetResult["LOST"] = "lost";
})(BetResult = exports.BetResult || (exports.BetResult = {}));
var UserBetState;
(function (UserBetState) {
    UserBetState["OPEN"] = "open";
    UserBetState["WON"] = "won";
    UserBetState["LOST"] = "lost";
})(UserBetState = exports.UserBetState || (exports.UserBetState = {}));
//# sourceMappingURL=enum.js.map