import { PartialType } from '@nestjs/swagger';
import { CreateGameDto } from './create-game.dto';

export class QueryGameDto extends PartialType(CreateGameDto) {
    limit?: string;
    sort?: string;
    page?: string;
}
