import { Module } from '@nestjs/common';
import { TownService } from './town.service';
import { TownResolver } from './town.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Town } from './town.entity';
import { StationModule } from 'src/station/station.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Town]),
    StationModule,
  ],
  providers: [TownService, TownResolver]
})
export class TownModule {}
