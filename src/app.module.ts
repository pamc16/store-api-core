import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productos } from './productos/productos.entity';
import { ProductoController } from './productos/productos.controller';
import { ProductoService } from './productos/productos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Colo-colo1',
      database: 'db_store',
      entities: [Productos],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Productos]),
  ],
  controllers: [AppController, ProductoController],
  providers: [AppService, ProductoService],
})
export class AppModule {}
