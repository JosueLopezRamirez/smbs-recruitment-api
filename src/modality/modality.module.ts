import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ModalityService } from './modality.service';
import { ModalityResolver } from './modality.resolver';
import { Modality } from './../entity/modality.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Modality])],
  providers: [ModalityService, ModalityResolver]
})
export class ModalityModule {}
