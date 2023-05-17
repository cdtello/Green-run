import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { UserBetState } from "src/common/enum";

export class CreateUserBetDto {

    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly odd: number;

    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly amount: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsEnum(UserBetState)
    readonly state: string;
}
