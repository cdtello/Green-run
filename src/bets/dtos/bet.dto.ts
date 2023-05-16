export class CreateBetDto {
    amount: number;
    transactionId: number;
}

export class UpdateBetDto {
    amount?: number;
}

export class GetBetDto {
    id: number;
    amount: number;
    transaction: {
        id: number;
        description: string;
        user: {
            id: number;
            name: string;
            email: string;
        };
    };
}
