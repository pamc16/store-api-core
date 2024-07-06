// src/users/users.module.ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductoService } from './productos/productos.service';
import { ProductoController } from './productos/productos.controller';
import { LoggerMiddleware } from 'src/core/middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productos } from './productos/productos.entity';
import { Categorias } from './categorias/categorias.entity';
import { Subcategorias } from './sub-categorias/sub-categorias.entity';

@Module({
  exports: [ProductoService],
  controllers: [ProductoController],
  providers: [ProductoService],
  imports:[ TypeOrmModule.forFeature([Productos, Categorias, Subcategorias]),]
})
export class ModulesModule implements NestModule {
    constructor() {}
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes(ProductoController);
    }
  }
