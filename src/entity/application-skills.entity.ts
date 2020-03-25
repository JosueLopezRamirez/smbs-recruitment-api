import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
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
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: number;

    @Field(() => Application, { nullable: true })
    @ManyToOne(() => Application, application => application.applicationSkill, { lazy: true, cascade: ['insert'] })
    public application!: Application;

    @Field(() => Skill, { nullable: true })
    @ManyToOne(() => Skill, skill => skill.applicationSkill, { lazy: true, cascade: ['insert'] })
    public skill!: Skill;
}
