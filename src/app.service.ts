import { Injectable } from '@nestjs/common';
/**
 * injectable app service
 * @author Md Nasir Hussain
 */
@Injectable()
export class AppService {
  /**
   * simpal method
   * @returns if success or failure
   */
  getHello(): string {
    return 'Hello World!';
  }
}
