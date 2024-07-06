import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('API de la tienda online')
    .setDescription('API para administrar productos de la tienda online')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.enableCors()

  await app.listen('8080', '0.0.0.0', () => {
		// eslint-disable-next-line no-console
		console.info(
			`\n \x1B[32m➜\x1B[0m Local: \x1B[36mhttp://localhost:${'8080'}/${'api'}\x1B[0m \n`,
		);
	});
}
bootstrap();
