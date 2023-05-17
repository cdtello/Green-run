import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1684261639041 implements MigrationInterface {
    name = 'Migration1684261639041'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`bet\` (\`id\` int NOT NULL AUTO_INCREMENT, \`bet_option\` int NOT NULL, \`sport\` varchar(255) NOT NULL, \`status\` enum ('active', 'canceled', 'settled') NOT NULL, \`name\` varchar(255) NOT NULL, \`event_id\` int NOT NULL, \`odd\` int NOT NULL, \`result\` enum ('won', 'lost') NOT NULL, \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` datetime NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`deleted_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_bet\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`bet_id\` int NOT NULL, \`odd\` int NOT NULL, \`amount\` int NOT NULL, \`state\` enum ('open', 'won', 'lost') NOT NULL, \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` datetime NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`deleted_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`transaction\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`amount\` int NOT NULL, \`category\` enum ('deposit', 'withdraw', 'bet', 'winning') NOT NULL, \`status\` varchar(255) NOT NULL, \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` datetime NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`deleted_at\` datetime NULL, \`user_bet_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`role\` varchar(255) NOT NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`gender\` enum ('male', 'female', 'other') NOT NULL, \`birth_date\` datetime NOT NULL, \`country_id\` int NOT NULL, \`city\` varchar(255) NOT NULL, \`category\` enum ('sports', 'casino', 'poker') NOT NULL, \`document_id\` varchar(255) NOT NULL, \`user_state\` varchar(255) NOT NULL, \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` datetime NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`deleted_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_bet\` ADD CONSTRAINT \`FK_1bdf0f49e87133912676e6915ae\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_bet\` ADD CONSTRAINT \`FK_d7d69596f07d919e80d4326b3c7\` FOREIGN KEY (\`bet_id\`) REFERENCES \`bet\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_b4a3d92d5dde30f3ab5c34c5862\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_75f747995ac8ce58e138d7a7ef1\` FOREIGN KEY (\`user_bet_id\`) REFERENCES \`user_bet\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_75f747995ac8ce58e138d7a7ef1\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_b4a3d92d5dde30f3ab5c34c5862\``);
        await queryRunner.query(`ALTER TABLE \`user_bet\` DROP FOREIGN KEY \`FK_d7d69596f07d919e80d4326b3c7\``);
        await queryRunner.query(`ALTER TABLE \`user_bet\` DROP FOREIGN KEY \`FK_1bdf0f49e87133912676e6915ae\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`transaction\``);
        await queryRunner.query(`DROP TABLE \`user_bet\``);
        await queryRunner.query(`DROP TABLE \`bet\``);
    }

}
