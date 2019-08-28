import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinTable } from 'typeorm';
import { ApplicationSkill } from './application-skills.entity';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class Application {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ default: '', nullable: true })
    name!: string;

    @Field()
    @Column({ default: '', nullable: true })
    lastName: string;

    @Field()
    @Column({ default: '', nullable: true })
    phone: string;

    @Field()
    @Column({ default: '', nullable: true })
    email: string;

    @Field()
    @Column({ default: 0, nullable: true })
    englishLevel: number;

    @Field()
    @Column({ default: '', nullable: true })
    url: string;

    @Field()
    @CreateDateColumn({ default: '', nullable: true })
    createdAt: string;

    @Field()
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @Field(type => [ApplicationSkill], { nullable: true })
    @OneToMany((type) => ApplicationSkill, applicationSkill => applicationSkill.skill, { lazy: true, cascade: ['insert'] })
    public applicationSkill!: ApplicationSkill[];

    constructor(params?: { name: string, lastName: string, phone: string, email: string, englishLevel: number }) {
        if (params) {
            this.name = params.name;
            this.lastName = params.lastName;
            this.phone = params.phone;
            this.email = params.email;
            this.englishLevel = params.englishLevel;
        }
    }
}