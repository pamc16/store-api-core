import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_SERVER_HOST'),
        port: Number(configService.get('DB_SERVER_PORT')),
        username: configService.get('DB_SERVER_USERNAME'),
        password: configService.get('DB_SERVER_PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        ssl: process.env.NODE_ENV.trim() === 'production' && {
          rejectUnauthorized: false,
          ca: configService.get('SSL_CA_CERTIFICATES'),
        },
        autoLoadEntities: true,
        // ! ALWAYS FALSE IN PROD
        // synchronize: !(process.env.NODE_ENV.trim() === 'production'),
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule { }