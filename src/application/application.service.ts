import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from '../entity/applications.entity';
import { ApplicationInput } from './dto/application.input';
import { Repository } from 'typeorm';

@Injectable()
export class ApplicationService {
    constructor(
        @InjectRepository(Application)
        private readonly _repository: Repository<Application>
    ) { }

    async findAll(id?: number): Promise<Application[]> {
        return await this._repository.find({ where: { id } });
    }

    async create(input: ApplicationInput): Promise<Application> {

        let record = {
            ...input,
            createdAt: Date.now().toString()
        }

        return await this._repository.save(record);
    }

}
