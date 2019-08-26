import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { SkillService } from './skill.service';
import { SkillInput } from './dto/skill.input';
import { Skill } from '../entity/skills.entity';
import { Int } from 'type-graphql';

@Resolver('Skill')
export class SkillResolver {
    constructor(
        private readonly _service: SkillService
    ) { }

    @Query(() => [Skill])
    async skills(@Args({ name: 'id', nullable: true, type: () => Int }) id: number) {
        return await this._service.findAll({ id });
    }

    @Mutation(() => Skill)
    async createSkill(@Args('input') input: SkillInput): Promise<Skill> {
        return await this._service.create(input);
    }
}
