import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { getValidParams } from '../helpers';
import { LanguagesInput } from './dto/languages.input';
import { Languages } from './../entity/languages.entity';

@Injectable()
export class LanguagesService {

    constructor(
        @InjectRepository(Languages)
        private readonly _repository: Repository<Languages>
    ) { }

    async findAll(args?: Object): Promise<Languages[]> {
        return await this._repository.find({ where: getValidParams(args) });
    }

    async findOne(id: number): Promise<Languages> {
        return await this._repository.findOne({ where: { id } });
    }

    async create(input: LanguagesInput): Promise<Languages> {
        let record = {
            ...input,
            createdAt: Date.now().toString()
        }
        return await this._repository.save(record);
    }

}
