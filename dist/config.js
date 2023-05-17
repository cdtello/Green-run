"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
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
//# sourceMappingURL=config.js.map