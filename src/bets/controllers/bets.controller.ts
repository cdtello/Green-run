import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateBetDto, UpdateBetDto } from '../dtos/bet.dto';
import { BetsService } from '../services/bets.service';

@ApiTags('Bets')
@Controller('bets')
export class BetsController {
    constructor(private betsService: BetsService) {}

    @Get()
    findAll() {
        return this.betsService.findAll();
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.betsService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateBetDto) {
        return this.betsService.create(payload);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateBetDto,
    ) {
        return this.betsService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.betsService.remove(id);
    }
}
