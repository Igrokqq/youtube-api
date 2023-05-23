import { Global, Module } from '@nestjs/common';
import YouTubeService from './services/youtube.service';

@Global()
@Module({
  providers: [YouTubeService],
  exports: [YouTubeService],
})
export default class GoogleApiModule {}
