import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { UserOutput } from './dto/user.output';
import { UserService } from './user.service';
import { UserInput } from './dto/user.input';
import { User } from '../entity/users.entity';

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly _service: UserService,
    ) { }

    @Query(() => [UserOutput])
    async users() {
        return await this._service.findAll();
    }

    @Mutation(() => UserOutput)
    async createUser(@Args('input') input: UserInput): Promise<User> {
        return await this._service.create(input);
    }
}
