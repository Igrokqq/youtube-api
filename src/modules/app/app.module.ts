import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/modules/common.module';
import SourceModule from '../source/source.module';
import AccountModule from '../account/account.module';
import PostModule from '../post/post.module';

@Module({
  imports: [CommonModule, AccountModule, SourceModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
