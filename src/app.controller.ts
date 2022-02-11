import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
/**
 * app controlller
 * @author Md Nasir Hussain
 */
@Controller()
export class AppController {
  /**
   * injectable service 
   * @param appService 
   */
  constructor(private readonly appService: AppService) {}
/**
 *simpal  app controller method
 * @returns if success or failure
 */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
