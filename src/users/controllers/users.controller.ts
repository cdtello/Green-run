import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
    ParseIntPipe,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';

import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { UsersService } from '../services/users.service';
// @ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        console.log('test:', createUserDto);
        return await this.userService.create(createUserDto);
    }

    @ApiSecurity('bearerToken')
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll() {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return await this.userService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto,
    ) {
        return await this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        return await this.userService.remove(id);
    }
}
