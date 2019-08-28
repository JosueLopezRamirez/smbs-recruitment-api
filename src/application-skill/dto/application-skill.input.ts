import { Field, InputType } from 'type-graphql';

@InputType()
export class ApplicationSkillInput {

    @Field({ defaultValue: false })
    isMain: boolean;

}