import {MigrationInterface, QueryRunner} from "typeorm";

export class newTables1585083830450 implements MigrationInterface {
    name = 'newTables1585083830450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "skill_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e0fb49a8276e9fa5da64ec967bf" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "describe_yourself" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b6ad718ad8d2d29877a2ecd2345" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "language" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cc0a99e710eb3733f6fb42b1d4c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "modality" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba5430e7e9e6035b0d13a5cc564" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "speciality" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cfdbcfa372a34f2d9c1d5180052" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD "yearsExperience" integer DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "skill" ADD "skillTypeId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "skill" ADD CONSTRAINT "FK_9576d573f1eb8617eb38b112924" FOREIGN KEY ("skillTypeId") REFERENCES "skill_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "skill" DROP CONSTRAINT "FK_9576d573f1eb8617eb38b112924"`, undefined);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "skillTypeId"`, undefined);
        await queryRunner.query(`ALTER TABLE "application" DROP COLUMN "yearsExperience"`, undefined);
        await queryRunner.query(`DROP TABLE "speciality"`, undefined);
        await queryRunner.query(`DROP TABLE "modality"`, undefined);
        await queryRunner.query(`DROP TABLE "language"`, undefined);
        await queryRunner.query(`DROP TABLE "describe_yourself"`, undefined);
        await queryRunner.query(`DROP TABLE "skill_type"`, undefined);
    }

}
