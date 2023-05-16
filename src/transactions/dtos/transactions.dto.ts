import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Bet } from 'src/bets/entities/bet.entity';

export class TransactionDto {
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsString()
    description: string;

    @IsNumber()
    userBetId?: number;

    @IsNotEmpty()
    bets: Bet[];
}
