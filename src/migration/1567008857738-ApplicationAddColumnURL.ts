import {MigrationInterface, QueryRunner} from "typeorm";

export class ApplicationAddColumnURL1567008857738 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `application` ADD `url` varchar(255) NULL DEFAULT ''");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `application` DROP COLUMN `url`");
    }

}
