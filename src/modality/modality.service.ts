import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ModalityInput } from './dto/modality.input';
import { Modality } from './../entity/modality.entity';
import { getValidParams } from '../helpers';

@Injectable()
export class ModalityService {

    constructor(
        @InjectRepository(Modality)
        private readonly _repository: Repository<Modality>
    ) { }

    async findAll(args?: Object): Promise<Modality[]> {
        return await this._repository.find({ where: getValidParams(args) });
    }

    async findOne(id: number): Promise<Modality> {
        return await this._repository.findOne({ where: { id } });
    }

    async create(input: ModalityInput): Promise<Modality> {
        let record = {
            ...input,
            createdAt: Date.now().toString()
        }
        return await this._repository.save(record);
    }
}
