export declare class CreateBetDto {
    readonly amount: number;
    readonly bet_option: number;
    readonly sport: string;
    readonly status: string;
    readonly name: string;
    readonly event_id: number;
    readonly odd: number;
    readonly result: string;
    readonly transactionId: number;
    readonly userId: number;
}
declare const UpdateBetDto_base: import("@nestjs/common").Type<Partial<CreateBetDto>>;
export declare class UpdateBetDto extends UpdateBetDto_base {
}
export {};
