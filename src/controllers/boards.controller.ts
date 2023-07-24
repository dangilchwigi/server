import { Controller } from '@nestjs/common';
import { BoardService } from 'src/providers/boards.service';

@Controller('boards')
export class BoardController {
  constructor(private boardService: BoardService) {}
}
