import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AffinityResolver } from './affinity.resolver';
import { AffinityService } from './affinity.service';
import { Affinity } from './../entity/affinity.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Affinity])],
  providers: [AffinityService, AffinityResolver]
})
export class AffinityModule {}
