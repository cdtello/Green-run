import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from '../services/auth.service';
import { AuthDto } from '../dtos/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    async signup(@Body() authDto: AuthDto): Promise<{ token: string }> {
        const token = await this.authService.signup(authDto);
        return { token };
    }

    @Post('login')
    async login(@Body() authDto: AuthDto): Promise<{ token: string }> {
        const token = await this.authService.login(authDto);
        return { token };
    }
}
