import { Field, InputType } from 'type-graphql';

@InputType()
export class AffinityInput {

    @Field()
    name: string;

}