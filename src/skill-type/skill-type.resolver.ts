import { SkillTypeInput } from './dto/skill-type.input';
import { SkillType } from './../entity/skills-types.entity';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { SkillTypeService } from './skill-type.service';
import { Int } from 'type-graphql';

@Resolver('SkillType')
export class SkillTypeResolver {

    constructor(
        private readonly service: SkillTypeService,
    ) { }

    @Query(() => [SkillType])
    async skillTypes(@Args({ name: 'id', nullable: true, type: () => Int }) id: number) {
        return await this.service.findAll({ id });
    }

    @Query(() => SkillType, { nullable: true })
    async skillType(@Args({ name: 'id', nullable: false, type: () => Int }) id: number) {
        return await this.service.findOne(id);
    }

    @Mutation(() => SkillType)
    async createSkillType(@Args('input') input: SkillTypeInput): Promise<SkillType> {
        return await this.service.create(input);
    }

}
