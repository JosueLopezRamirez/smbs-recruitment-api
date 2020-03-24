import { Application } from './applications.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { ApplicationSkill } from './application-skills.entity';

@ObjectType()
@Entity()
export class Modality {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @CreateDateColumn()
    createdAt: string;

    @Field()
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @Field(() => Application)
    @OneToMany(() => Application, application => application.modality, { lazy: true })
    public application!: Application[];
}