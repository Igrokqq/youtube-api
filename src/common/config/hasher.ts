import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
class HasherConfig {
  constructor(private configService: ConfigService) {}

  get iv(): string {
    return this.configService.getOrThrow('HASHER_IV');
  }

  get key(): string {
    return this.configService.getOrThrow('HASHER_SECRET_KEY');
  }
}

export default HasherConfig;
