import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ApplicationSkill } from './application-skills.entity';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class Skill {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    description: string;

    @Field()
    @CreateDateColumn()
    createdAt: string;

    @Field()
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @OneToMany((type) => ApplicationSkill, applicationSkill => applicationSkill.application, { eager: true })
    public applicationSkill!: ApplicationSkill[];

}