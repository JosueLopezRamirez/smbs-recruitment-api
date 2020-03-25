import {MigrationInterface, QueryRunner} from 'typeorm';

export class affinity1585091332423 implements MigrationInterface {
    name = 'affinity1585091332423';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "affinity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fb758da011552dd04ec890a97e6" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD "affinityId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD "modalityId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD "languageId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD "specialityId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_c1982749f0b0c6d7eda37955d62" FOREIGN KEY ("affinityId") REFERENCES "affinity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_b11632f225ab68023a60c358fa3" FOREIGN KEY ("modalityId") REFERENCES "modality"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_715585c5c72eeadd748bfa4dc9f" FOREIGN KEY ("languageId") REFERENCES "language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_90028570f75dc285c0ee1856bc6" FOREIGN KEY ("specialityId") REFERENCES "speciality"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_90028570f75dc285c0ee1856bc6"`, undefined);
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_715585c5c72eeadd748bfa4dc9f"`, undefined);
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_b11632f225ab68023a60c358fa3"`, undefined);
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_c1982749f0b0c6d7eda37955d62"`, undefined);
        await queryRunner.query(`ALTER TABLE "application" DROP COLUMN "specialityId"`, undefined);
        await queryRunner.query(`ALTER TABLE "application" DROP COLUMN "languageId"`, undefined);
        await queryRunner.query(`ALTER TABLE "application" DROP COLUMN "modalityId"`, undefined);
        await queryRunner.query(`ALTER TABLE "application" DROP COLUMN "affinityId"`, undefined);
        await queryRunner.query(`DROP TABLE "affinity"`, undefined);
    }

}
