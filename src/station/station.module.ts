import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { StationResolver } from './station.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Station } from './station.entity';

@Module({
  
    imports: [
      TypeOrmModule.forFeature([Station]),
    ],
  providers: [StationService, StationResolver],
  exports: [StationService]
})
export class StationModule {}
