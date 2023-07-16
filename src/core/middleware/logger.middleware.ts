import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Hostname **** ', res.req.hostname);
    console.log('Url **** ', res.req.url);
    console.log('Headers **** ', res.req.headers);
    console.log('Body **** ', res.req.body);
    console.log('Completed **** ', res.req.complete ? 'complete' : 'failed');
    next();
  }
}