import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1684287725640 implements MigrationInterface {
    name = 'Migration1684287725640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_bet\` DROP FOREIGN KEY \`FK_1bdf0f49e87133912676e6915ae\``);
        await queryRunner.query(`ALTER TABLE \`user_bet\` DROP FOREIGN KEY \`FK_d7d69596f07d919e80d4326b3c7\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_75f747995ac8ce58e138d7a7ef1\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_b4a3d92d5dde30f3ab5c34c5862\``);
        await queryRunner.query(`ALTER TABLE \`user_bet\` DROP COLUMN \`bet_id\``);
        await queryRunner.query(`ALTER TABLE \`user_bet\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP COLUMN \`user_bet_id\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`user_bet\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_bet\` ADD \`betId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD \`userBetId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_bet\` ADD CONSTRAINT \`FK_906a253729854629aa4f16f3219\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_bet\` ADD CONSTRAINT \`FK_0f60e754cdee0c53ca313ddc347\` FOREIGN KEY (\`betId\`) REFERENCES \`bet\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_605baeb040ff0fae995404cea37\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_bff20fd4c91ab196537384faed0\` FOREIGN KEY (\`userBetId\`) REFERENCES \`user_bet\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_bff20fd4c91ab196537384faed0\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_605baeb040ff0fae995404cea37\``);
        await queryRunner.query(`ALTER TABLE \`user_bet\` DROP FOREIGN KEY \`FK_0f60e754cdee0c53ca313ddc347\``);
        await queryRunner.query(`ALTER TABLE \`user_bet\` DROP FOREIGN KEY \`FK_906a253729854629aa4f16f3219\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP COLUMN \`userBetId\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`user_bet\` DROP COLUMN \`betId\``);
        await queryRunner.query(`ALTER TABLE \`user_bet\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD \`user_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD \`user_bet_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user_bet\` ADD \`user_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_bet\` ADD \`bet_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_b4a3d92d5dde30f3ab5c34c5862\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_75f747995ac8ce58e138d7a7ef1\` FOREIGN KEY (\`user_bet_id\`) REFERENCES \`user_bet\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_bet\` ADD CONSTRAINT \`FK_d7d69596f07d919e80d4326b3c7\` FOREIGN KEY (\`bet_id\`) REFERENCES \`bet\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_bet\` ADD CONSTRAINT \`FK_1bdf0f49e87133912676e6915ae\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
