import { Module } from '@nestjs/common';
import { SkillTypeResolver } from './skill-type.resolver';
import { SkillTypeService } from './skill-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SkillType } from './../entity/skills-types.entity';
@Module({
  imports: [TypeOrmModule.forFeature([SkillType])],
  providers: [SkillTypeResolver, SkillTypeService],
})
export class SkillTypeModule {}
