import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { ApplicationService } from './application.service';
import { Application } from '../entity/applications.entity';
import { ApplicationInput } from './dto/application.input';
import { ApplicationOutput } from './dto/application.output';

@Resolver('Application')
export class ApplicationResolver {
    constructor(
        private readonly _service: ApplicationService
    ) { }

    @Query(() => [ApplicationOutput])
    async applications() {
        return await this._service.findAll();
    }

    @Mutation(() => ApplicationOutput)
    async createApplication(@Args('input') input: ApplicationInput): Promise<Application> {
        return await this._service.create(input);
    }

}
