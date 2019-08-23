import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { SkillService } from './skill.service';
import { SkillInput } from './dto/skill.input';
import { SkillOutput } from './dto/skill.output';
import { Skill } from '../entity/skills.entity';

@Resolver('Skill')
export class SkillResolver {
    constructor(
        private readonly _service: SkillService
    ) { }

    @Query(() => [SkillOutput])
    async skills() {
        return await this._service.findAll();
    }

    @Mutation(() => SkillOutput)
    async createSkill(@Args('input') input: SkillInput): Promise<Skill> {
        return await this._service.create(input);
    }
}
