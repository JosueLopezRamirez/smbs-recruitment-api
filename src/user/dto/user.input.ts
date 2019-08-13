import { Field, Int, ObjectType, InputType, ID } from 'type-graphql';

@InputType()
export class UserInput {

  @Field()
  readonly username: string;

  @Field()
  readonly password: string;

  @Field()
  readonly createdAt: Date
}