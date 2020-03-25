import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Speciality } from './../entity/specitality.entity';
import { SpecialityService } from './speciality.service';
import { SpecialityResolver } from './speciality.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Speciality])],
  providers: [SpecialityService, SpecialityResolver],
})
export class SpecialityModule {}
