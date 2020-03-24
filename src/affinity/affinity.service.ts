import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AffinityInput } from './dto/affinity.input';
import { Affinity } from './../entity/affinity.entity';
import { getValidParams } from '../helpers';

@Injectable()
export class AffinityService {

    constructor(
        @InjectRepository(Affinity)
        private readonly _repository: Repository<Affinity>
    ) { }

    async findAll(args?: Object): Promise<Affinity[]> {
        return await this._repository.find({ where: getValidParams(args) });
    }

    async findOne(id: number): Promise<Affinity> {
        return await this._repository.findOne({ where: { id } });
    }

    async create(input: AffinityInput): Promise<Affinity> {
        let record = {
            ...input,
            createdAt: Date.now().toString()
        }
        return await this._repository.save(record);
    }
}
