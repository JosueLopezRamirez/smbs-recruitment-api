import { Field, InputType } from 'type-graphql';

@InputType()
export class SpecialityInput {

    @Field()
    name: string;

}
