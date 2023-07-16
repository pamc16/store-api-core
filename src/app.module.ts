import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './core/middleware/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { DatabaseModule } from './core/database/database.module';
import { ProductoService } from './api/productos/productos.service';
import { ProductoController } from './api/productos/productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productos } from './api/productos/productos.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([Productos]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ProductoService,
  ],
})
export class AppModule implements NestModule {
  constructor() {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ProductoController);
  }
}