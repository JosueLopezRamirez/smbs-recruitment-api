import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from '../entity/skills.entity';
import { SkillInput } from './dto/skill.input';
import { Repository } from 'typeorm';
import { getValidParams } from '../helpers';

@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(Skill)
        private readonly _repository: Repository<Skill>
    ) { }

    async findAll(args?: Object): Promise<Skill[]> {
        return await this._repository.find({ where: getValidParams(args) });
    }

    async create(input: SkillInput): Promise<Skill> {
        let record = {
            ...input,
            createdAt: Date.now().toString()
        }
        return await this._repository.save(record);
    }
}
