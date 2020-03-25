import { Affinity } from './affinity.entity';
import { Speciality } from './specitality.entity';
import { Languages } from './languages.entity';
import { Modality } from './modality.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { ApplicationSkill } from './application-skills.entity';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class Application {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ default: '', nullable: true })
    name!: string;

    @Field()
    @Column({ default: '', nullable: true })
    lastName: string;

    @Field()
    @Column({ default: 0, nullable: true })
    yearsExperience: number;

    @Field()
    @Column({ default: '', nullable: true })
    phone: string;

    @Field()
    @Column({ default: '', nullable: true })
    email: string;

    @Field()
    @Column({ default: 0, nullable: true })
    englishLevel: number;

    @Field()
    @Column({ default: '', nullable: true })
    url: string;

    @Field()
    @CreateDateColumn({ default: '', nullable: true })
    createdAt: string;

    @Field()
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @Column()
    affinityId!: number;

    @Column()
    modalityId!: number;

    @Column()
    languageId!: number;

    @Column()
    specialityId!: number;

    @Field(type => [ApplicationSkill], { nullable: true })
    @OneToMany((type) => ApplicationSkill, applicationSkill => applicationSkill.application, { lazy: true, cascade: ['insert'] })
    public applicationSkill!: ApplicationSkill[];

    /**
     * Relaciones correspondientes a llaves foraneas
     */
    @Field(type => Affinity, { nullable: true })
    @ManyToOne(type => Affinity, affinity => affinity.application, { lazy: true, cascade: ['insert'] })
    public affinity!: Affinity;

    @Field(type => Modality, { nullable: true })
    @ManyToOne(type => Modality, modality => modality.application, { lazy: true, cascade: ['insert'] })
    public modality!: Modality;

    @Field(type => Languages, { nullable: true })
    @ManyToOne(type => Languages, language => language.application, { lazy: true, cascade: ['insert'] })
    public language!: Languages;

    @Field(type => Speciality, { nullable: true })
    @ManyToOne(type => Speciality, speciality => speciality.application, { lazy: true, cascade: ['insert'] })
    public speciality!: Speciality;

    constructor(params?: { name: string, lastName: string, phone: string, email: string, englishLevel: number, url: string, yearsExperience: number, affinityId: number, modalityId: number, languageId: number, specialityId: number  }) {
        if (params) {
            this.name = params.name;
            this.lastName = params.lastName;
            this.phone = params.phone;
            this.email = params.email;
            this.englishLevel = params.englishLevel;
            this.url = params.url;
            this.yearsExperience = params.yearsExperience;
            this.affinityId = params.affinityId;
            this.modalityId = params.modalityId;
            this.languageId = params.languageId;
            this.specialityId =  params.specialityId;
        }
    }
}