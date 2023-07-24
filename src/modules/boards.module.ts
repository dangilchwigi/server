import { Module } from '@nestjs/common';
import { BoardController } from 'src/controllers/boards.controller';
import { BoardService } from 'src/providers/boards.service';

@Module({
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
