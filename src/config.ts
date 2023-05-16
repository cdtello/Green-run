import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT,
        },
        mysql: {
            dbName: process.env.MY_SQL_DB,
            dbHost: process.env.MY_SQL_HOST,
            dbUser: process.env.MY_SQL_USER,
            dbPassword: process.env.MY_SQL_PASSWORD,
            dbPort: parseInt(process.env.MY_SQL_PORT),
        },
        apiKey: process.env.API_KEY,
    };
});
