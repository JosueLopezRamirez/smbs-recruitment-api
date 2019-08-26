import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/users.entity';
import { UserInput } from './dto/user.input';
import { Repository } from 'typeorm';
import { getValidParams } from '../helpers';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly _repository: Repository<User>
    ) { }

    async findAll(args?: Object): Promise<User[]> {
        return await this._repository.find({ where: getValidParams(args) });
    }

    async findOne(id: number): Promise<User> {
        return await this._repository.findOne({ where: { id } });
    }

    async create(input: UserInput): Promise<User> {

        let record = {
            ...input,
            createdAt: Date.now().toString()
        };

        return await this._repository.save(record);
    }

}
