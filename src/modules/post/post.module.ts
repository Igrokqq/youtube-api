import { Module } from '@nestjs/common';
import { PostService } from './post.service';

@Module({
  providers: [PostService],
  exports: [PostService],
})
export default class PostModule {}
