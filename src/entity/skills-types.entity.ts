import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Skill } from './skills.entity';

@ObjectType()
@Entity()
export class SkillType {
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

    @Field(() => Skill)
    @OneToMany(() => Skill, skill => skill.skillType, { lazy: true })
    public skill!: Skill[];
}
