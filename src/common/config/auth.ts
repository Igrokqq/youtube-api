import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
class AuthConfig {
  constructor(private configService: ConfigService) {}

  get jwtSecret(): string {
    return this.configService.get('JWT_SECRET', 'hello');
  }

  get jwtExpire(): string {
    return this.configService.get('JWT_EXPIRE', '3d');
  }

  get refreshSecret(): string {
    return this.configService.getOrThrow('JWT_REFRESH_SECRET');
  }

  get accessSecret(): string {
    return this.configService.getOrThrow('JWT_ACCESS_SECRET');
  }

  get swaggerAuthUser(): string {
    return this.configService.getOrThrow('SWAGGER_AUTH_USER');
  }

  get swaggerAuthPassword(): string {
    return this.configService.getOrThrow('SWAGGER_AUTH_PASSWORD');
  }
}

export default AuthConfig;
