import { Controller, Get, Query, Res } from '@nestjs/common';
import { MapService } from 'src/providers/maps.service';

@Controller('maps')
export class MapController {
  constructor(private mapService: MapService) {}

  @Get()
  async searchStoreByName(@Res() res, @Query('keyword') keyword: string) {
    const result = await this.mapService.searchStoreByName(keyword);

    return res.status(result.statusCode).json(result.data);
  }
}
