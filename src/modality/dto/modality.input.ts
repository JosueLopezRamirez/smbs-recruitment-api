import { Field, InputType } from 'type-graphql';

@InputType()
export class ModalityInput {

    @Field()
    name: string;

}