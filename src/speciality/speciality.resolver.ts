import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { Int } from 'type-graphql';

import { SpecialityInput } from './dto/speciality.input';
import { Speciality } from './../entity/specitality.entity';
import { SpecialityService } from './speciality.service';

@Resolver('Speciality')
export class SpecialityResolver {

    constructor(
        private readonly service: SpecialityService,
    ) { }

    @Query(() => [Speciality])
    async specialitys(@Args({ name: 'id', nullable: true, type: () => Int }) id: number) {
        return await this.service.findAll({ id });
    }

    @Query(() => Speciality, { nullable: true })
    async speciality(@Args({ name: 'id', nullable: false, type: () => Int }) id: number) {
        return await this.service.findOne(id);
    }

    @Mutation(() => Speciality)
    async createSpeciality(@Args('input') input: SpecialityInput): Promise<Speciality> {
        return await this.service.create(input);
    }

}
