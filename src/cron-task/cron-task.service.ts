import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EntityManager } from "typeorm";

@Injectable()
export class CronTaskService {

    private readonly logger = new Logger(CronTaskService.name);

    constructor(private readonly entityManager: EntityManager) { }

    @Cron('* */25 * * * *')
    handleCron() {
        return this.entityManager.query("SELECT 1+1");
    }
}
