import { Field, ObjectType, ID } from 'type-graphql';
import { ApplicationSkill } from '../../entity/application-skills.entity';
import { SkillOutput } from '../../skill/dto/skill.output';
import { OneToMany } from 'typeorm';
import { SkillResolver } from "../../skill/skill.resolver";

@ObjectType()
export class ApplicationOutput {

    @Field(() => ID)
    readonly id: number;

    @Field()
    readonly name: string;

    @Field()
    readonly lastName: string;

    @Field()
    readonly phone: string;

    @Field()
    readonly email: string;

    @Field()
    readonly englishLevel: number;

    @Field()
    readonly createdAt: Date;

    @Field()
    readonly updatedAt: Date;

    @Field(type => SkillOutput, { nullable: true })
    @OneToMany(type => ApplicationSkill, skillOutput => skillOutput.skill)
    async skills(me) {
        // let algo = await SkillResolver.
        //     console.log(me)
    }
    // @Field(type => SkillOutput, { nullable: true })
    //  skills() {
    //     console.log({ SkillOutput: SkillOutput.call({}) })
    //     return SkillOutput;
    // }
}