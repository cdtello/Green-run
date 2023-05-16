import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from '../services/auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    async signup(
        @Body('email') email: string,
        @Body('password') password: string,
    ): Promise<{ token: string }> {
        const token = await this.authService.signup(email, password);
        return { token };
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
    ): Promise<{ token: string }> {
        const token = await this.authService.login(email, password);
        return { token };
    }
}
