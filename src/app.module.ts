import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { TownModule } from './town/town.module';
import { StationModule } from './station/station.module';
import { Town } from './town/town.entity';
import { Station } from './station/station.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/city',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Town,
        Station
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    TownModule, StationModule],
 
})
export class AppModule {}
