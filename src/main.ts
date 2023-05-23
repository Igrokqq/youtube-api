import * as process from 'process';
import * as express from 'express';
import * as basicAuth from 'express-basic-auth';
import { join } from 'path';
import * as fs from 'graceful-fs';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app/app.module';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import ServerConfig from './common/config/server';
import { AllExceptionsFilter } from './common/filters/all-exceptions-filter';
import { HttpAdapterHost } from '@nestjs/core/helpers/http-adapter-host';
import AuthConfig from './common/config/auth';
import * as compression from 'compression';

function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('The API documentation')
    .setVersion('1.0')
    .addTag('Backend')
    .addSecurity('bearerAuth', {
      type: 'http',
      scheme: 'Bearer',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    deepScanRoutes: true,
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  });
  const endpointRelativePath = '/juicyburger';
  const authConfig = app.get(AuthConfig);

  app.use(
    [endpointRelativePath],
    basicAuth({
      challenge: true,
      users: {
        [authConfig.swaggerAuthUser]: authConfig.swaggerAuthPassword,
      },
    }),
  );

  SwaggerModule.setup(endpointRelativePath, app, document, {
    swaggerOptions: {
      security: [{ bearerAuth: [] }],
    },
  });
}

async function bootstrap() {
  const logger = new Logger('src/main.ts');
  const app = await NestFactory.create(AppModule);
  const serverConfig = app.get(ServerConfig);
  const httpAdapterHost = app.get(HttpAdapterHost);

  app.use(compression());
  app.useGlobalFilters(new AllExceptionsFilter(serverConfig, httpAdapterHost));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
  });
  setupSwagger(app);

  await app.listen(serverConfig.port, () => {
    logger.log(`Started on port: ${serverConfig.port}`);
  });
}

bootstrap();
