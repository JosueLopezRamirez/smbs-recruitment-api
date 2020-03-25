import { Injectable, Optional } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from '../entity/applications.entity';
import { ApplicationInput } from './dto/application.input';
import { Repository } from 'typeorm';
import { getValidParams } from '../helpers';
import { ApplicationSkill } from '../entity/application-skills.entity';
import { Skill } from '../entity/skills.entity';
import { In } from 'typeorm';
import { ApplicationSkillInput } from 'src/application-skill/dto/application-skill.input';

@Injectable()
export class ApplicationService {
    constructor(
        @InjectRepository(Application)
        private readonly _repository: Repository<Application>,
        @InjectRepository(Skill)
        private readonly _repositorySkill: Repository<Skill>,
    ) { }

    async findAll(args?: Object): Promise<Application[]> {
        return await this._repository.find({ where: getValidParams(args) });
    }

    async findOne(id: number): Promise<Application> {
        return await this._repository.findOne({ where: { id } });
    }

    async create(input: ApplicationInput): Promise<Application> {
        let record = {
            ...input,
            createdAt: Date.now().toString()
        }
        return await this._repository.save(record);
    }

    async createWithSkills(application: ApplicationInput, skills: [ApplicationSkillInput]): Promise<Application> {

        let filter: object;
        if (skills.length > 0)
            filter = { id: In(skills.map((sk) => sk.id)) };

        let newApplication = new Application(application);
        let newSkills = await this._repositorySkill.find({ where: filter });
        let applicationSkills: ApplicationSkill[] = newSkills.map((nsk) => {
            let newAppSkill = new ApplicationSkill();
            let foundSkill = skills.find(sk => sk.id === nsk.id);

            newAppSkill.skill = nsk;
            newAppSkill.application = newApplication;
            newAppSkill.isMain = foundSkill ? foundSkill.isMain : false;
            return newAppSkill;
        });

        newApplication.applicationSkill = applicationSkills;

        return await this._repository.save(newApplication);

    }

}
