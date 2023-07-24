import { Module } from '@nestjs/common';
import { MapController } from 'src/controllers/maps.controller';
import { MapService } from 'src/providers/maps.service';

@Module({
  controllers: [MapController],
  providers: [MapService],
})
export class MapModule {}
