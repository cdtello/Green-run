declare const _default: (() => {
    database: {
        name: string;
        port: string;
    };
    mysql: {
        dbName: string;
        dbHost: string;
        dbUser: string;
        dbPassword: string;
        dbPort: number;
    };
    apiKey: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    database: {
        name: string;
        port: string;
    };
    mysql: {
        dbName: string;
        dbHost: string;
        dbUser: string;
        dbPassword: string;
        dbPort: number;
    };
    apiKey: string;
}>;
export default _default;
