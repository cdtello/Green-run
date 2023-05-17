import { AuthService } from '../services/auth.service';
import { AuthDto } from '../dtos/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(authDto: AuthDto): Promise<{
        token: string;
    }>;
    login(authDto: AuthDto): Promise<{
        token: string;
    }>;
}
