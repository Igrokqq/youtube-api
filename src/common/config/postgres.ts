import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
class PostgresConfig {
  constructor(private readonly configService: ConfigService) {}

  get host(): string {
    return this.configService.get('POSTGRES_HOST', '127.0.0.1');
  }

  get version(): string {
    return this.configService.get('POSTGRES_VERSION', '');
  }

  get port(): number {
    return this.configService.get('POSTGRES_PORT', 5432);
  }

  get password(): string {
    return this.configService.get('POSTGRES_PASSWORD', '1234');
  }

  get username(): string {
    return this.configService.get('POSTGRES_USER', 'burger');
  }

  get dbName(): string {
    return this.configService.get('POSTGRES_DATABASE', 'burger');
  }
}

export default PostgresConfig;
