import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInput } from './dto/user.input';
import { User } from '../entity/users.entity';
import { Int } from 'type-graphql';

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly service: UserService,
    ) { }

    @Query(() => [User])
    async users(@Args({ name: 'id', nullable: true, type: () => Int }) id: number) {
        return await this.service.findAll({ id });
    }

    @Query(() => User, { nullable: true })
    async user(@Args({ name: 'id', nullable: false, type: () => Int }) id: number) {
        return await this.service.findOne(id);
    }
    @Mutation(() => User)
    async createUser(@Args('input') input: UserInput): Promise<User> {
        return await this.service.create(input);
    }
}
