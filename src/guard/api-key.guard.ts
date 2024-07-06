// src/guards/api-key.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (this.configService.get('ENABLE_API_KEY') === 'true') {
      const request = context.switchToHttp().getRequest();
      const apiKey = request.headers[this.configService.get('NAME_API_KEY')];

      if (!apiKey) {
        throw new UnauthorizedException('API Key is missing');
      }

      const validApiKey = this.configService.get('API_KEY');
      if (apiKey !== validApiKey) {
        throw new UnauthorizedException('Invalid API Key');
      }
    }

    return true;
  }
}
