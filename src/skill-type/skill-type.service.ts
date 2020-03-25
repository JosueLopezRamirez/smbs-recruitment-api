import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getValidParams } from '../helpers';
import { SkillType } from '../entity/skills-types.entity';
import { SkillTypeInput } from './dto/skill-type.input';

@Injectable()
export class SkillTypeService {
    constructor(
        @InjectRepository(SkillType)
        private readonly repository: Repository<SkillType>,
    ) { }

    async findAll(args?: any): Promise<SkillType[]> {
        return await this.repository.find({ where: getValidParams(args) });
    }

    async findOne(id: number): Promise<SkillType> {
        return await this.repository.findOne({ where: { id } });
    }

    async create(input: SkillTypeInput): Promise<SkillType> {
        const record = {
            ...input,
            createdAt: Date.now().toString(),
        };
        return await this.repository.save(record);
    }
}
