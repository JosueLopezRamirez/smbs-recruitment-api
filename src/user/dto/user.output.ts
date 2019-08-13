import { Field, Int, ObjectType, InputType, ID } from 'type-graphql';

@ObjectType()
export class UserOutput {
  
    @Field(() => ID)
    readonly id: number;

    @Field()
    readonly username: string;

    @Field()
    readonly password: string;

    @Field()
    readonly createdAt: Date; 

    @Field()
    readonly updatedAt: Date;

}

