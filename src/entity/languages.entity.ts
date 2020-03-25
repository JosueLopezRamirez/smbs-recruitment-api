import { Application } from './applications.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@Entity('language')
@ObjectType()
export class Languages {
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
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: number;

    @Field(() => Application)
    @OneToMany(() => Application, application => application.language, { lazy: true })
    public application!: Application[];
}
