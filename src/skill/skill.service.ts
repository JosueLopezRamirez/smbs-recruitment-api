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
        private readonly repository: Repository<Skill>,
    ) { }

    async findAll(args?: any): Promise<Skill[]> {
        return await this.repository.find({ where: getValidParams(args) });
    }

    async findOne(id: number): Promise<Skill> {
        return await this.repository.findOne({ where: { id } });
    }

    async create(input: SkillInput): Promise<Skill> {
        const record = {
            ...input,
            createdAt: Date.now().toString(),
        };
        return await this.repository.save(record);
    }
}
