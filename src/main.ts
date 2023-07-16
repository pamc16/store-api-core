import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('API de la tienda online')
    .setDescription('API para administrar productos de la tienda online')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.use(json({ limit: '64mb' }));
  app.use(cors());

  await app.listen(8080);
}
bootstrap();
