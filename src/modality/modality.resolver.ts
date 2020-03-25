import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { Int } from 'type-graphql';

import { ModalityInput } from './dto/modality.input';
import { Modality } from './../entity/modality.entity';
import { ModalityService } from './modality.service';

@Resolver('Modality')
export class ModalityResolver {

    constructor(
        private readonly service: ModalityService,
    ) { }

    @Query(() => [Modality])
    async modalitys(@Args({ name: 'id', nullable: true, type: () => Int }) id: number) {
        return await this.service.findAll({ id });
    }

    @Query(() => Modality, { nullable: true })
    async modality(@Args({ name: 'id', nullable: false, type: () => Int }) id: number) {
        return await this.service.findOne(id);
    }

    @Mutation(() => Modality)
    async createModality(@Args('input') input: ModalityInput): Promise<Modality> {
        return await this.service.create(input);
    }
}
