import { PartialType } from '@nestjs/swagger';
import { CreateConsoleDto } from './create-console.dto';

export class UpdateConsoleDto extends PartialType(CreateConsoleDto) {}
