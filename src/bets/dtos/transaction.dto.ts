import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { TransactionCategory } from "src/common/enum";

export class CreateTransactionDto {

    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly amount: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsEnum(TransactionCategory)
    readonly category: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly status: string;

    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly userId: number;

    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly userBetId: number;
}

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
