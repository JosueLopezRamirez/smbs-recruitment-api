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
        private readonly repository: Repository<User>,
    ) { }

    async findAll(args?: any): Promise<User[]> {
        return await this.repository.find({ where: getValidParams(args) });
    }

    async findOne(id: number): Promise<User> {
        return await this.repository.findOne({ where: { id } });
    }

    async create(input: UserInput): Promise<User> {

        const record = {
            ...input,
            createdAt: Date.now().toString(),
        };

        return await this.repository.save(record);
    }

}
