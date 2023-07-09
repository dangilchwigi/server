import { Controller, Get } from '@nestjs/common';

@Controller('web')
export class WebController {
  constructor() {}

  @Get('kakao')
  kakaoRedirection() {
    return;
  }
}
