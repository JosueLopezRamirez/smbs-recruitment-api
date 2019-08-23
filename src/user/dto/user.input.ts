import { Field, InputType } from 'type-graphql';

@InputType()
export class UserInput {

  @Field()
  readonly username: string;

  @Field()
  readonly password: string;

  @Field()
  readonly createdAt: Date
}