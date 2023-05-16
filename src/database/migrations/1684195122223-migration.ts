import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1684195122223 implements MigrationInterface {
    name = 'Migration1684195122223';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`gender\` enum ('male', 'female', 'other') NOT NULL, \`birthDate\` datetime NOT NULL, \`countryId\` int NOT NULL, \`city\` varchar(255) NOT NULL, \`category\` enum ('sports', 'casino', 'poker') NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
