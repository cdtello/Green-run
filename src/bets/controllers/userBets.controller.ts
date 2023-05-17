import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserBetsService } from "../services/userBets.service";
import { CreateUserBetDto, UpdateUserBetDto } from "../dtos/userBet.dto";

@ApiTags('UserBets')
@Controller('user-bets')
export class UserBetsController {
    constructor(private userBetsService: UserBetsService) { }

    @Get()
    findAll() {
        return this.userBetsService.findAll();
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.userBetsService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateUserBetDto) {
        return this.userBetsService.create(payload);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateUserBetDto,
    ) {
        return this.userBetsService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.userBetsService.remove(id);
    }
}
