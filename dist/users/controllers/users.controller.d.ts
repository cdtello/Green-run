import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { UsersService } from '../services/users.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("../entities/user.entity").User>;
    findAll(): Promise<import("../entities/user.entity").User[]>;
    findOne(id: number): Promise<import("../entities/user.entity").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("../entities/user.entity").User>;
    remove(id: number): Promise<void>;
}
