import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/login/auth/auth.module';
import { ModulesModule } from './api/modules/modules.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    ModulesModule,
    ConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}
	onModuleInit() {
		this._logger.debug(
			`🔒 \x1B[4mApi Key\x1B[0m enabled: ${
				process.env.SECURITY_ENABLED === 'true'
					? '\x1B[32mON'
					: '\x1B[31mOFF'
			}\x1B[0m`,
		);

		this._logger.debug(
			`📑 \x1B[4mSwagger\x1B[0m enabled: ${
				this.configService.get('SWAGGER_UI') === 'true' ? '\x1B[32mON' : '\x1B[31mOFF'
			}\x1B[0m`,
		);
	}

	private readonly _logger: Logger = new Logger(AppModule.name);
}
