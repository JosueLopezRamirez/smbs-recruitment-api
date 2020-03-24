import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

import { Application } from './applications.entity';

@ObjectType()
@Entity()
export class Affinity {

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
    @OneToMany(() => Application, application => application.affinity, { lazy: true })
    public application!: Application[];
}