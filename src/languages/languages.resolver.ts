import { LanguagesInput } from './dto/languages.input';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Int } from 'type-graphql';

import { LanguagesService } from './languages.service';
import { Languages } from './../entity/languages.entity';

@Resolver('Languages')
export class LanguagesResolver {

    constructor(
        private readonly _service: LanguagesService
    ) { }

    @Query(() => [Languages])
    async languages(@Args({ name: 'id', nullable: true, type: () => Int }) id: number) {
        return await this._service.findAll({ id });
    }

    @Query(() => Languages, { nullable: true })
    async language(@Args({ name: 'id', nullable: false, type: () => Int }) id: number) {
        return await this._service.findOne(id);
    }

    @Mutation(() => Languages)
    async createLanguage(@Args('input') input: LanguagesInput): Promise<Languages> {
        return await this._service.create(input);
    }
}
