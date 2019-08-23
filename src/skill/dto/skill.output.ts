import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class SkillOutput {

    @Field(() => ID)
    readonly id: number;

    @Field()
    readonly name: string;

    @Field()
    readonly description: string;

    @Field()
    readonly createdAt: Date;

    @Field()
    readonly updatedAt: Date;

}