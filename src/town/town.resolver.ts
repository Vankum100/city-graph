import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { StationService } from 'src/station/station.service';
import { AddStationsToTownInput } from './add-stations-to-town.input';
import { Town } from './town.entity';
import { CreateTownInput } from './town.input';
import { TownService } from './town.service';
import { TownType } from './town.type';

@Resolver(of => TownType)
export class TownResolver {
    constructor(
        private townService: TownService,
        private stationService: StationService,
    ) { }
  
    @Query(returns => TownType)
    town(
        @Args('id') id: string,
    ) {
        return this.townService.getTown(id);
    }

    @Query(returns => [TownType])
    towns() {
        return this.townService.getTowns();
    }

    @Mutation(returns => TownType)
    createTown(
        @Args('createTownInput') createTownInput: CreateTownInput,
    ) {
        return this.townService.createTown(createTownInput);
    }

    @Mutation(returns => TownType)
    AddStationsToTownInput(
        @Args('addStationsToTownInput') addStationsToTownInput: AddStationsToTownInput,
    ) {
        const { townId, stationIds } = addStationsToTownInput
        return this.townService.addStationsToTown(townId, stationIds);
    }

    @ResolveField()
    async stations(@Parent() town: Town) {
        return this.stationService.getManyStations(town.stations);
    }


}
