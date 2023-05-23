import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
class YoutubeConfig {
  constructor(private configService: ConfigService) {}

  get clientID(): number {
    return this.configService.getOrThrow('GOOGLE_CLIENT_ID');
  }

  get apiKey(): string {
    return this.configService.getOrThrow('YOUTUBE_API_KEY');
  }
}

export default YoutubeConfig;
