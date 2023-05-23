import {
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { HttpAdapterHost } from '@nestjs/core/helpers/http-adapter-host';
import ServerConfig from '../config/server';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(
    private readonly serverConfig: ServerConfig,
    protected readonly httpAdapterHost: HttpAdapterHost,
  ) {
    super(httpAdapterHost.httpAdapter);
  }

  catch(exception: any, host: ArgumentsHost) {
    // TODO: implement
    // const ctx = host.switchToHttp();
    // const response = ctx.getResponse();
    // const httpAdapter = this.httpAdapterHost.httpAdapter;
  }
}
