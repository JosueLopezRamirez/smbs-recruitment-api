import { Module } from '@nestjs/common';
import { CronTaskService } from './cron-task.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature()],
  providers: [CronTaskService]
})
export class CronTaskModule {}
