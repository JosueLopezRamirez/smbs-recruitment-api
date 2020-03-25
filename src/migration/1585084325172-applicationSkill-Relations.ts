import {MigrationInterface, QueryRunner} from "typeorm";

export class applicationSkillRelations1585084325172 implements MigrationInterface {
    name = 'applicationSkillRelations1585084325172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "application_skill" ADD "modalityId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" ADD "languageId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" ADD "describeYourselfId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" ADD "specialityId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" ADD CONSTRAINT "FK_09db02cc0feaf87d201bf8be67a" FOREIGN KEY ("modalityId") REFERENCES "modality"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" ADD CONSTRAINT "FK_cb02ab37df1e423dd6c02de7cd0" FOREIGN KEY ("languageId") REFERENCES "language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" ADD CONSTRAINT "FK_438680e22512577334ea2e4e790" FOREIGN KEY ("describeYourselfId") REFERENCES "describe_yourself"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" ADD CONSTRAINT "FK_987c496679a860c396a5776c588" FOREIGN KEY ("specialityId") REFERENCES "speciality"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "application_skill" DROP CONSTRAINT "FK_987c496679a860c396a5776c588"`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" DROP CONSTRAINT "FK_438680e22512577334ea2e4e790"`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" DROP CONSTRAINT "FK_cb02ab37df1e423dd6c02de7cd0"`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" DROP CONSTRAINT "FK_09db02cc0feaf87d201bf8be67a"`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" DROP COLUMN "specialityId"`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" DROP COLUMN "describeYourselfId"`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" DROP COLUMN "languageId"`, undefined);
        await queryRunner.query(`ALTER TABLE "application_skill" DROP COLUMN "modalityId"`, undefined);
    }

}
