import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { Application } from './applications.entity';
import { Skill } from './skills.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class ApplicationSkill {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field({ defaultValue: false })
    @Column({ default: false })
    isMain: boolean;

    @Field()
    @CreateDateColumn()
    createdAt: string;

    @Field()
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @Field(type => Application, { nullable: true })
    @ManyToOne(type => Application, application => application.applicationSkill, { lazy: true, cascade: ['insert'] })
    public application!: Application;

    @Field(type => Skill, { nullable: true })
    @ManyToOne(type => Skill, skill => skill.applicationSkill, { lazy: true, cascade: ['insert'] })
    public skill!: Skill;
}