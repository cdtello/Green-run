import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TransactionsService } from "../services/transactions.service";
import { CreateTransactionDto, UpdateTransactionDto } from "../dtos/transaction.dto";

@ApiTags('Transactions')
@Controller('transactions')
export class TransactionsController {
    constructor(private transactionsService: TransactionsService) { }

    @Get()
    findAll() {
        return this.transactionsService.findAll();
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.transactionsService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateTransactionDto) {
        return this.transactionsService.create(payload);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateTransactionDto,
    ) {
        return this.transactionsService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.transactionsService.remove(id);
    }
}
