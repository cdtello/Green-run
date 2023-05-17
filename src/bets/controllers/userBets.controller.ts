import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserBetsService } from "../services/userBets.service";

@ApiTags('UserBets')
@Controller('user-bets')
export class UserBetsController {
    constructor(private userBetsService: UserBetsService) { }
}
