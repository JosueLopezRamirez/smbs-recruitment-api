import {MigrationInterface, QueryRunner} from "typeorm";

export class ApplicationSkillIsMainDefaultValue1566942754671 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `application_skill` CHANGE `isMain` `isMain` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `application_skill` CHANGE `isMain` `isMain` tinyint NOT NULL");
    }

}
