import { Injectable, Optional } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from '../entity/applications.entity';
import { ApplicationInput } from './dto/application.input';
import { Repository } from 'typeorm';
import { getValidParams } from '../helpers';

@Injectable()
export class ApplicationService {
    constructor(
        @InjectRepository(Application)
        private readonly _repository: Repository<Application>
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

}
