import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(2);
    return 'Hello to server-2';
  }
}
