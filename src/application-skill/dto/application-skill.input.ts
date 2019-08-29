import { Field, InputType } from 'type-graphql';

@InputType()
export class ApplicationSkillInput {

    @Field()
    id: number;

    @Field({ defaultValue: false })
    isMain: boolean;

}