import { Strategy } from 'passport-jwt';
import { AuthDto } from '../dtos/auth.dto';
declare const AuthStrategy_base: new (...args: any[]) => Strategy;
export declare class AuthStrategy extends AuthStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        user_id: any;
        email: any;
    }>;
}
export declare class AuthService {
    private connection;
    private auth;
    constructor();
    signup(authDto: AuthDto): Promise<string>;
    login(authDto: AuthDto): Promise<string>;
}
export {};
