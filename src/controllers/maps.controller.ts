import { Controller } from '@nestjs/common';
import { MapService } from 'src/providers/maps.service';

@Controller('maps')
export class MapController {
  constructor(private mapService: MapService) {}
}
