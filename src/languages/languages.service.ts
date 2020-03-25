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
        private readonly repository: Repository<Languages>,
    ) { }

    async findAll(args?: any): Promise<Languages[]> {
        return await this.repository.find({ where: getValidParams(args) });
    }

    async findOne(id: number): Promise<Languages> {
        return await this.repository.findOne({ where: { id } });
    }

    async create(input: LanguagesInput): Promise<Languages> {
        const record = {
            ...input,
            createdAt: Date.now().toString(),
        };
        return await this.repository.save(record);
    }

}
