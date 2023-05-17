import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
} from 'class-validator';
import { BetResult, BetStatus } from '../../common/enum';

export class CreateBetDto {
    @IsNumber()
    @IsNotEmpty()
    readonly amount: number;

    @IsNumber()
    @IsNotEmpty()
    readonly bet_option: number;

    @IsString()
    @IsNotEmpty()
    readonly sport: string;

    @IsEnum(BetStatus)
    @IsString()
    @IsNotEmpty()
    readonly status: string;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly event_id: number;

    @IsNumber()
    @IsNotEmpty()
    readonly odd: number;

    @IsEnum(BetResult)
    @IsString()
    @IsNotEmpty()
    readonly result: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly transactionId: number;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly userId: number;
}

export class UpdateBetDto extends PartialType(CreateBetDto) {}
