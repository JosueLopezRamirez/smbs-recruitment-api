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
    private readonly repository: Repository<Application>,
    @InjectRepository(Skill)
    private readonly repositorySkill: Repository<Skill>,
  ) {}

  async findAll(args?: any): Promise<Application[]> {
    return await this.repository.find({ where: getValidParams(args) });
  }

  async findAllByName(args?: any): Promise<Application[]> {
    let query = this.repository.createQueryBuilder('application');

    if (args.name.length) {
      query.where(`LOWER(application.name) LIKE :name`, {
        name: `%${args.name.toLowerCase()}%`,
      });
    }

    if (args.affinity) {
      query.andWhere('application.affinityId = :affinity', {
        affinity: args.affinity,
      });
    }

    if (args.skill) {
      query.innerJoin(
        'application_skill',
        'ap',
        '"ap"."applicationId" = application.id AND "ap"."skillId" = :skill',
        { skill: args.skill },
      );
    }

    if (args.name.length || args.affinity || args.skill) {
      return query.getMany();
    }
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Application> {
    return await this.repository.findOne({ where: { id } });
  }

  async create(input: ApplicationInput): Promise<Application> {
    const record = {
      ...input,
      createdAt: Date.now().toString(),
    };

    return await this.repository.save(record);
  }

  async createWithSkills(
    application: ApplicationInput,
    skills: [ApplicationSkillInput],
  ): Promise<Application> {
    let filter: object;
    if (skills.length > 0) {
      filter = { id: In(skills.map(sk => sk.id)) };
    }

    const newApplication = new Application(application);
    const newSkills = await this.repositorySkill.find({ where: filter });
    const applicationSkills: ApplicationSkill[] = newSkills.map(nsk => {
      let newAppSkill;
      newAppSkill = new ApplicationSkill();
      const foundSkill = skills.find(sk => sk.id === nsk.id);

      newAppSkill.skill = nsk;
      newAppSkill.application = newApplication;
      newAppSkill.isMain = foundSkill ? foundSkill.isMain : false;
      return newAppSkill;
    });

    newApplication.applicationSkill = applicationSkills;

    return await this.repository.save(newApplication);
  }
}
