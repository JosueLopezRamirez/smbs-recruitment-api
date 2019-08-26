import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { ApplicationService } from './application.service';
import { Application } from '../entity/applications.entity';
import { ApplicationInput } from './dto/application.input';
import { Int } from 'type-graphql';

@Resolver('Application')
export class ApplicationResolver {
    constructor(
        private readonly _service: ApplicationService
    ) { }

    @Query(() => [Application])
    async applications(@Args({ name: 'id', nullable: true, type: () => Int }) id: number) {
        return await this._service.findAll({ id });
    }

    @Query(() => Application, { nullable: true })
    async application(@Args({ name: 'id', nullable: false, type: () => Int }) id: number) {
        return await this._service.findOne(id);
    }

    @Mutation(() => Application)
    async createApplication(@Args('input') input: ApplicationInput): Promise<Application> {
        return await this._service.create(input);
    }

}
