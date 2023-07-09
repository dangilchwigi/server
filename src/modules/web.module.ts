import { Module } from '@nestjs/common';
import { WebController } from 'src/controllers/web.controller';

@Module({
  controllers: [WebController],
  providers: [],
})
export class WebModule {}
