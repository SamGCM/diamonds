
import { PartialType } from '@nestjs/swagger';
import { CreateDeveloperDto } from './create-developer.dto';

export class QueryDeveloperDto extends PartialType(CreateDeveloperDto) {
    limit?: string;
    sort?: string;
    page?: string;
}