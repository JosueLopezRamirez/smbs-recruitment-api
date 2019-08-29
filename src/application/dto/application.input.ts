import { Field, InputType } from 'type-graphql';

@InputType()
export class ApplicationInput {

    @Field({ nullable: true })
    readonly name: string;

    @Field({ nullable: true })
    readonly lastName: string;

    @Field({ nullable: true })
    readonly phone: string;

    @Field({ nullable: true })
    readonly email: string;

    @Field({ nullable: true })
    readonly englishLevel: number;

    @Field({ nullable: true })
    readonly url: string;

}