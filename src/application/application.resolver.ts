import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { ApplicationService } from './application.service';
import { Application } from '../entity/applications.entity';
import { ApplicationInput } from './dto/application.input';
import { Int } from 'type-graphql';
import { Optional } from '@nestjs/common';

@Resolver('Application')
export class ApplicationResolver {
    constructor(
        private readonly _service: ApplicationService
    ) { }

    @Query(() => [Application])
    async applications(
        @Optional()
        @Args({ name: 'id', nullable: true, type: () => Int }) id: number) {
        return await this._service.findAll({ id });
    }

    @Mutation(() => Application)
    async createApplication(@Args('input') input: ApplicationInput): Promise<Application> {
        return await this._service.create(input);
    }

}
