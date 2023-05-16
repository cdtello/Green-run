import { Module } from '@nestjs/common';

import { AuthController } from './controllers/auth.controller';
import { AuthService, AuthStrategy } from './services/auth.service';
@Module({
    controllers: [AuthController],
    providers: [AuthService, AuthStrategy],
    exports: [AuthService, AuthStrategy],
})
export class AuthModule {}
