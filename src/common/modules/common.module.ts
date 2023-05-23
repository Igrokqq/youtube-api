import { Global, Module } from '@nestjs/common';
import ApiConfigModule from '../config/api-config.module';
import HasherModule from './hasher/hasher.module';
import { PrismaModule } from './prisma/prisma.module';
import { ScheduleModule } from '@nestjs/schedule';
import GoogleApiModule from './google-api/google-api.module';

@Global()
@Module({
  imports: [
    ApiConfigModule,
    HasherModule,
    PrismaModule,
    ScheduleModule.forRoot(),
    GoogleApiModule,
    // CacheModule.registerAsync({
    //   inject: [RedisConfig],
    //   isGlobal: true,
    //   useFactory: async (config: RedisConfig) => {
    //     return {
    //       store: (await redisStore(config)) as any,
    //       host: config.host,
    //       port: config.port,
    //       password: config.password,
    //       username: config.username,
    //       ttl: config.ttlInSeconds,
    //     };
    //   },
    // }),
  ],
  providers: [],
})
export class CommonModule {}
