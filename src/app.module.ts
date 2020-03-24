import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { ApplicationModule } from './application/application.module';
import { SkillModule } from './skill/skill.module';
import { ApplicationSkillService } from './application-skill/application-skill.service';
import { ApplicationSkillResolver } from './application-skill/application-skill.resolver';
import { ApplicationSkillModule } from './application-skill/application-skill.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "tumidb.cbvpubcios7n.us-east-2.rds.amazonaws.com",
      "port": 5432,
      "username": "tumiusr",
      "password": "Nicaragu^&jkiu#z",
      "database": "recruitment",
      "synchronize": false,
      "logging": true,
      "entities": [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UserModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      introspection: true,
      autoSchemaFile: 'schema.gql'
    }),
    ApplicationModule,
    SkillModule,
    ApplicationSkillModule,
  ],
  providers: [ApplicationSkillService, ApplicationSkillResolver],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
