import { Module } from '@nestjs/common';
import { TokenService } from 'src/providers/token.service';

@Module({
  controllers: [],
  providers: [TokenService],
})
export class TokenModule {}
