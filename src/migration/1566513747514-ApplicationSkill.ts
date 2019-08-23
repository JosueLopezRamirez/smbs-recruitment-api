import { MigrationInterface, QueryRunner } from "typeorm";

export class ApplicationSkill1566513747514 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `application_skill` (`id` int NOT NULL AUTO_INCREMENT, `isMain` tinyint NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `applicationId` int NULL, `skillId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `application_skill` ADD CONSTRAINT `FK_9feb878eb526d5390b16264289d` FOREIGN KEY (`applicationId`) REFERENCES `application`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `application_skill` ADD CONSTRAINT `FK_a80eaa0dd0eadb2c2bc423787f9` FOREIGN KEY (`skillId`) REFERENCES `skill`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `application_skill` DROP FOREIGN KEY `FK_a80eaa0dd0eadb2c2bc423787f9`");
        await queryRunner.query("ALTER TABLE `application_skill` DROP FOREIGN KEY `FK_9feb878eb526d5390b16264289d`");
        await queryRunner.query("DROP TABLE `application_skill`");
    }

}
