import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { ApplicationSkill } from './application-skills.entity';
import { ObjectType, Field } from 'type-graphql';
import { SkillType } from './skills-types.entity';

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
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: number;

    @Field(() => ApplicationSkill)
    @OneToMany(() => ApplicationSkill, applicationSkill => applicationSkill.skill, { lazy: true })
    public applicationSkill!: ApplicationSkill[];

    @Field(() => SkillType, { nullable: true })
    @ManyToOne(() => SkillType, skillType => skillType.skill, { lazy: true, cascade: ['insert'] })
    public skillType!: SkillType;
}
