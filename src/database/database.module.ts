import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'mysql2';
import * as mysql from 'mysql2/promise';

import config from '../config';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [config.KEY],
            useFactory: (configService: ConfigType<typeof config>) => {
                const {
                    dbHost: host,
                    dbUser: user,
                    dbPassword: password,
                    dbName: database,
                    dbPort: port,
                } = configService.mysql;
                return {
                    type: 'mysql',
                    host,
                    port,
                    username: user,
                    password,
                    database,
                    synchronize: false,
                    autoLoadEntities: true,
                };
            },
        }),
    ],
    providers: [
        {
            provide: 'MY_SQL',
            useFactory: (configService: ConfigType<typeof config>) => {
                const {
                    dbHost: host,
                    dbUser: user,
                    dbPassword: password,
                    dbName: database,
                    dbPort: port,
                } = configService.mysql;
                const client: ConnectionOptions = {
                    host,
                    user,
                    password,
                    database,
                    port,
                };
                return mysql.createConnection(client);
            },
            inject: [config.KEY],
        },
    ],
    exports: ['MY_SQL'],
})
export class DatabaseModule {}
