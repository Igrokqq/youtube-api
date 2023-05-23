import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import PostgresConfig from './postgres';
import ServerConfig from './server';
import AuthConfig from './auth';
import HasherConfig from './hasher';
import YoutubeConfig from './youtube';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ expandVariables: true })],
  providers: [
    ServerConfig,
    PostgresConfig,
    AuthConfig,
    HasherConfig,
    YoutubeConfig,
  ],
  exports: [
    ServerConfig,
    PostgresConfig,
    AuthConfig,
    HasherConfig,
    YoutubeConfig,
  ],
})
export default class ApiConfigModule {}
