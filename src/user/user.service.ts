import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/users.entity';
import { UserInput } from './dto/user.input';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly _repository: Repository<User>
    ) { }

    async findAll(): Promise<User[]> {
        return await this._repository.find();
    }

    async create(input: UserInput): Promise<User> {

        let record = {
            ...input,
            createdAt: Date.now().toString()
        };

        return await this._repository.save(record);
    }

}
