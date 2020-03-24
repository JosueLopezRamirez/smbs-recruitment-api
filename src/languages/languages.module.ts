import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesResolver } from './languages.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Languages } from './../entity/languages.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Languages])],
  providers: [LanguagesService, LanguagesResolver]
})
export class LanguagesModule {}
