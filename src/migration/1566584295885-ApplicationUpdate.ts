import {MigrationInterface, QueryRunner} from "typeorm";

export class ApplicationUpdate1566584295885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `application` CHANGE `name` `name` varchar(255) NULL DEFAULT ''");
        await queryRunner.query("ALTER TABLE `application` CHANGE `lastName` `lastName` varchar(255) NULL DEFAULT ''");
        await queryRunner.query("ALTER TABLE `application` CHANGE `phone` `phone` varchar(255) NULL DEFAULT ''");
        await queryRunner.query("ALTER TABLE `application` CHANGE `email` `email` varchar(255) NULL DEFAULT ''");
        await queryRunner.query("ALTER TABLE `application` CHANGE `englishLevel` `englishLevel` int NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `application` CHANGE `createdAt` `createdAt` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `application` CHANGE `createdAt` `createdAt` datetime(6) NOT NULL");
        await queryRunner.query("ALTER TABLE `application` CHANGE `englishLevel` `englishLevel` int NOT NULL");
        await queryRunner.query("ALTER TABLE `application` CHANGE `email` `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `application` CHANGE `phone` `phone` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `application` CHANGE `lastName` `lastName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `application` CHANGE `name` `name` varchar(255) NOT NULL");
    }

}
