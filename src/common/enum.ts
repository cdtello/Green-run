export enum Category {
    SPORTS = 'sports',
    CASINO = 'casino',
    POKER = 'poker',
}

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
}

export enum TransactionCategory {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw',
    BET = 'bet',
    WINNING = 'winning',
}

export enum BetStatus {
    ACTIVE = 'active',
    CANCELLED = 'canceled',
    SETTLET = 'settled',
}

export enum BetResult {
    WON = 'won',
    LOST = 'lost',
}

export enum UserBetState {
    OPEN = 'open',
    WON = 'won',
    LOST = 'lost',
}
