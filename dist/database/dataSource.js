"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const typeorm_1 = require("typeorm");
exports.connectionSource = new typeorm_1.DataSource({
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
//# sourceMappingURL=dataSource.js.map