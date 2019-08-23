import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ApplicationSkill } from './application-skills.entity';

@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @OneToMany((type) => ApplicationSkill, applicationSkill => applicationSkill.application)
    public applicationSkill!: ApplicationSkill[];
}