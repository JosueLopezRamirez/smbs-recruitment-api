import { InputType, Field } from 'type-graphql';

@InputType()
export class LanguagesInput {
    @Field()
    readonly name: string;
}
