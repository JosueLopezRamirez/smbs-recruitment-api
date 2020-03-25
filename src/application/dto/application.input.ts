import { Field, InputType, Int } from 'type-graphql';

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
    readonly yearsExperience: number;

    @Field({ nullable: true })
    readonly englishLevel: number;

    @Field({ nullable: true })
    readonly url: string;

    @Field(() => Int, { nullable: false })
    public affinityId!: number;

    @Field(() => Int, { nullable: false })
    public modalityId!: number;

    @Field(()=> Int, { nullable: false })
    public languageId!: number;

    @Field(() => Int, { nullable: false })
    public specialityId!: number;

}