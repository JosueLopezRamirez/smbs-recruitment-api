import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SpecialityInput } from './dto/speciality.input';
import { Speciality } from './../entity/specitality.entity';
import { getValidParams } from '../helpers';

@Injectable()
export class SpecialityService {

    constructor(
        @InjectRepository(Speciality)
        private readonly repository: Repository<Speciality>,
    ) { }

    async findAll(args?: any): Promise<Speciality[]> {
        return await this.repository.find({ where: getValidParams(args) });
    }

    async findOne(id: number): Promise<Speciality> {
        return await this.repository.findOne({ where: { id } });
    }

    async create(input: SpecialityInput): Promise<Speciality> {
        const record = {
            ...input,
            createdAt: Date.now().toString(),
        };
        return await this.repository.save(record);
    }
}
