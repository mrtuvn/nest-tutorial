import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <p class="text-bold text-center">Hello World Service!</p>
    `;
  }
}
