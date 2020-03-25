import { AffinityInput } from './dto/affinity.input';
import { Affinity } from './../entity/affinity.entity';
import { AffinityService } from './affinity.service';
import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { Int } from 'type-graphql';

@Resolver('Affinity')
export class AffinityResolver {

    constructor(
        private readonly service: AffinityService,
    ) { }

    @Query(() => [Affinity])
    async affinitys(@Args({ name: 'id', nullable: true, type: () => Int }) id: number) {
        return await this.service.findAll({ id });
    }

    @Query(() => Affinity, { nullable: true })
    async affinity(@Args({ name: 'id', nullable: false, type: () => Int }) id: number) {
        return await this.service.findOne(id);
    }

    @Mutation(() => Affinity)
    async createAffinity(@Args('input') input: AffinityInput): Promise<Affinity> {
        return await this.service.create(input);
    }

}
