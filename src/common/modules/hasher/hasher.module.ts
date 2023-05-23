import { Global, Module } from '@nestjs/common';
import HasherService from './hasher.service';

@Global()
@Module({
  providers: [HasherService],
  exports: [HasherService],
})
export default class HasherModule {}
