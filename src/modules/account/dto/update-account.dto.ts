import { PartialType } from '@nestjs/swagger';
import { CreateAccountDto } from './create-accont.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
