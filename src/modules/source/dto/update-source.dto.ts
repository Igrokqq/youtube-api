import { PartialType } from '@nestjs/swagger';
import { CreateSourceDto } from './create-source.dto';

export default class UpdateSourceDto extends PartialType(CreateSourceDto) {}
