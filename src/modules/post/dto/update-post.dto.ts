import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export default class UpdatePostDto extends PartialType(CreatePostDto) {}
