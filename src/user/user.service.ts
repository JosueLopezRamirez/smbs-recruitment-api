import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/users.entity';
import { UserInput } from './dto/user.input';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}
    
    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(input: UserInput): Promise<User> {
        let { username, password } = input;

        let user = {
            username,
            password,
            createdAt: Date.now().toString()
        };

        return await this.userRepository.save(user);
    }

}
