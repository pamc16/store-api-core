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
      host: 'db-store-do-user-12886983-0.b.db.ondigitalocean.com',
      port: 25060,
      username: 'doadmin',
      password: 'AVNS_QWAcIwrGob4iB7FDG0I',
      database: 'db-store',
      entities: [Productos],
      synchronize: true,
      autoLoadEntities: true,
      ssl: {
        rejectUnauthorized: false
      },
    }),
    TypeOrmModule.forFeature([Productos]),
  ],
  controllers: [AppController, ProductoController],
  providers: [AppService, ProductoService],
})
export class AppModule {}
