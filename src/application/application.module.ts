import { Module } from '@nestjs/common';
import { ApplicationResolver } from './application.resolver';
import { ApplicationService } from './application.service';
import { Application } from '../entity/applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Application])],
  providers: [ApplicationResolver, ApplicationService]
})
export class ApplicationModule { }
