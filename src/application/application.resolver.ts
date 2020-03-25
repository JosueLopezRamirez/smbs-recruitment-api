import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { ApplicationService } from './application.service';
import { Application } from '../entity/applications.entity';
import { ApplicationInput } from './dto/application.input';
import { Int } from 'type-graphql';
import { ApplicationSkillInput } from '../application-skill/dto/application-skill.input';

@Resolver('Application')
export class ApplicationResolver {
    constructor(
        private readonly service: ApplicationService,
    ) { }

    @Query(() => [Application])
    async applications(@Args({ name: 'id', nullable: true, type: () => Int }) id: number) {
        return await this.service.findAll({ id });
    }

    @Query(() => Application, { nullable: true })
    async application(@Args({ name: 'id', nullable: false, type: () => Int }) id: number) {
        return await this.service.findOne(id);
    }

    @Mutation(() => Application)
    async createApplicationWithSkills(
        @Args('application') application: ApplicationInput,
        @Args({ name: 'skills', type: () => [ApplicationSkillInput] }) skillIds,
    ): Promise<Application> {
        return await this.service.createWithSkills(application, skillIds);
    }

    @Mutation(() => Application)
    async createApplication(@Args('input') input: ApplicationInput): Promise<Application> {
        return await this.service.create(input);
    }
}
