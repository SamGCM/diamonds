import { PartialType } from '@nestjs/swagger';
import { SingupDto } from './signup.dto';

export class UpdateUserDto extends PartialType(SingupDto) {}