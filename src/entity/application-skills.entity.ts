import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable } from 'typeorm';
import { Application } from './applications.entity';
import { Skill } from './skills.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class ApplicationSkill {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    isMain: boolean;

    @Field()
    @CreateDateColumn()
    createdAt: string;

    @Field()
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @Field(type => Application, { nullable: true })
    @ManyToOne(type => Application, application => application.applicationSkill, { lazy: true })
    public application!: Application;

    @Field(type => Skill, { nullable: true })
    @ManyToOne(type => Skill, skill => skill.applicationSkill, { lazy: true })
    public skill!: Skill;
}