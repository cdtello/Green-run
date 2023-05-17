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
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly amount: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly bet_option: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly sport: string;

    @ApiProperty()
    @IsEnum(BetStatus)
    @IsString()
    @IsNotEmpty()
    readonly status: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly event_id: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly odd: number;

    @ApiProperty()
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
