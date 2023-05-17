import { Repository } from 'typeorm';
import { AuthService } from '../../auth/services/auth.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
export declare class UsersService {
    private readonly authService;
    private readonly usersRepository;
    constructor(authService: AuthService, usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
    findByUsername(username: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
}
