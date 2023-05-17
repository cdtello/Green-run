import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthService, AuthStrategy } from './auth/services/auth.service';
import { BetsModule } from './bets/bets.module';
import config from './config';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: enviroments[process.env.NODE_ENV] || '.env',
            load: [config],
            isGlobal: true,
            validationSchema: Joi.object({
                API_KEY: Joi.number().required(),
                DATABASE_NAME: Joi.string().required(),
                DATABASE_PORT: Joi.number().required(),
            }),
        }),
        UsersModule,
        BetsModule,
        DatabaseModule,
        AuthModule,
    ],
    controllers: [AppController, AuthController],
    providers: [AppService, AuthService, AuthStrategy],
})
export class AppModule {}
