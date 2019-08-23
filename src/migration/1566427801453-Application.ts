import {MigrationInterface, QueryRunner} from "typeorm";

export class Application1566427801453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `application` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `englishLevel` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `application`");
    }

}
