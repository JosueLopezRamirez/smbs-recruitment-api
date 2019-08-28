import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillResolver } from './skill.resolver';
import { Skill } from '../entity/skills.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  providers: [SkillResolver, SkillService],
  exports: [SkillService]
})
export class SkillModule { }
