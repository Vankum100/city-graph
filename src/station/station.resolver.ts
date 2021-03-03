
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StationService } from './station.service';
import { StationType } from './station.type';
import {CreateStationInput} from './station.input'
@Resolver(of => StationType)
export class StationResolver {

    constructor(private stationService: StationService,){}

    @Query(returns => StationType)
    async station(@Args('id') id: string) {
        return this.stationService.getStation(id);
    }

    @Query(returns => [StationType])
    async stations() {
        return this.stationService.getStations();
    }
    @Mutation(returns => StationType)
    async createStation(@Args('createstationInput') stationInput: CreateStationInput) {
        return this.stationService.createStation(stationInput);
    }
}
