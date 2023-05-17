import { Category, Gender } from '../../common/enum';
export declare class CreateUserDto {
    role: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    address: string;
    gender: Gender;
    birth_date: Date;
    country_id: number;
    city: string;
    category: Category;
    isActive: boolean;
    document_id: string;
    user_state: string;
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
