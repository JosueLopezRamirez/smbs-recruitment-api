import { InputType, Field } from 'type-graphql';

@InputType()
export class SkillTypeInput {

    @Field()
    readonly name: string;
}
