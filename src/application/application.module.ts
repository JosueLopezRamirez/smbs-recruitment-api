import { Module } from '@nestjs/common';
import { ApplicationResolver } from './application.resolver';
import { ApplicationService } from './application.service';
import { Application } from '../entity/applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from '../entity/skills.entity';
import { ApplicationSkill } from '../entity/application-skills.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Application, Skill, ApplicationSkill]),
  ],
  providers: [ApplicationResolver, ApplicationService],
})

export class ApplicationModule { }
