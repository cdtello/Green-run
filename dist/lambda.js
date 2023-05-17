"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const serverless_express_1 = require("@vendia/serverless-express");
const app_module_1 = require("./app.module");
let cachedServer;
const handler = async (event, context) => {
    if (!cachedServer) {
        const nestApp = await core_1.NestFactory.create(app_module_1.AppModule);
        nestApp.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }));
        const config = new swagger_1.DocumentBuilder()
            .setTitle('API')
            .setDescription('PLATZI STORE')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(nestApp, config);
        swagger_1.SwaggerModule.setup('docs', nestApp, document);
        await nestApp.init();
        cachedServer = (0, serverless_express_1.configure)({
            app: nestApp.getHttpAdapter().getInstance(),
        });
    }
    return cachedServer(event, context);
};
exports.handler = handler;
//# sourceMappingURL=lambda.js.map