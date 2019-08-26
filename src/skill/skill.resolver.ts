import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { SkillService } from './skill.service';
import { SkillInput } from './dto/skill.input';
import { Skill } from '../entity/skills.entity';

@Resolver('Skill')
export class SkillResolver {
    constructor(
        private readonly _service: SkillService
    ) { }

    @Query(() => [Skill])
    async skills() {
        return await this._service.findAll();
    }

    @Mutation(() => Skill)
    async createSkill(@Args('input') input: SkillInput): Promise<Skill> {
        return await this._service.create(input);
    }
}
