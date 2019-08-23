import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Application } from './applications.entity';
import { Skill } from './skills.entity';

@Entity()
export class ApplicationSkill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isMain: boolean;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @ManyToOne(type => Application, application => application.applicationSkill)
    public application!: Application;

    @ManyToOne(type => Skill, skill => skill.applicationSkill)
    public skill!: Skill;
}