import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
    type: 'mysql',
    host: 'green-run.cgpienjxlx1s.us-east-1.rds.amazonaws.com',
    port: 3306,
    username: 'admin',
    password: 'greenrun*',
    database: 'green-run',
    logging: true,
    synchronize: false,
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts'],
});
