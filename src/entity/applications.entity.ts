import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ApplicationSkill } from './application-skills.entity';

@Entity()
export class Application {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '', nullable: true })
    name: string;

    @Column({ default: '', nullable: true })
    lastName: string;

    @Column({ default: '', nullable: true })
    phone: string;

    @Column({ default: '', nullable: true })
    email: string;

    @Column({ default: 0, nullable: true })
    englishLevel: number;

    @CreateDateColumn({ default: '', nullable: true })
    createdAt: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @OneToMany((type) => ApplicationSkill, applicationSkill => applicationSkill.skill)
    public applicationSkill!: ApplicationSkill[];
}