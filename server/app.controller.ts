import { Controller, Get, Res, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { NextResponse } from 'nest-next-module';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // sayHello by Query<name>.
  @Get('/hello')
  public sayHello(@Query('name') name: string): string {
    return this.appService.sayHello(name);
  }

  // next route
  @Get('/index')
  public getIndex(@Query('name') name: string, @Res() res: NextResponse) {
    return res.nextRender('/index', {
      name,
    });
  }
}
