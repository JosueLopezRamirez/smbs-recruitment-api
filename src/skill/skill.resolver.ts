import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { SkillService } from './skill.service';
import { SkillInput } from './dto/skill.input';
import { Skill } from '../entity/skills.entity';
import { Int } from 'type-graphql';

@Resolver('Skill')
export class SkillResolver {
    constructor(
        private readonly service: SkillService,
    ) { }

    @Query(() => [Skill])
    async skills(@Args({ name: 'id', nullable: true, type: () => Int }) id: number) {
        return await this.service.findAll({ id });
    }

    @Query(() => Skill, { nullable: true })
    async skill(@Args({ name: 'id', nullable: false, type: () => Int }) id: number) {
        return await this.service.findOne(id);
    }

    @Mutation(() => Skill)
    async createSkill(@Args('input') input: SkillInput): Promise<Skill> {
        return await this.service.create(input);
    }
}
