import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { UserOutput } from './dto/user.output';
import { UserService } from './user.service';
import { UserInput } from './dto/user.input';
import { User } from '../entity/users.entity';

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        ) { }
        
    @Query(() => [UserOutput])
    async users() {
        return await this.userService.findAll();
    }

    @Mutation(() => UserOutput)
        async createUser(@Args('input') input: UserInput): Promise<User> {
        return await this.userService.create(input);
        //pubSub.publish('cat added', { catAdded: cat });
    
    }
}
