import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Town } from './town.entity';
import { v4 as uuid } from 'uuid';
import { CreateTownInput } from './town.input';

@Injectable()
export class TownService {
    constructor(
        @InjectRepository(Town) private townRepository: Repository<Town>,
    ) { }
    
    async getTown(id: string): Promise<Town> {
        return this.townRepository.findOne({ id });
    }

    async getTowns(): Promise<Town[]> {
        return this.townRepository.find();
    }

    async createTown(createTownInput: CreateTownInput): Promise<Town>{
        const { name, telephone } = createTownInput;

        const town = await this.townRepository.create({
            id: uuid(),
            name,
            telephone,
        });

        return this.townRepository.save(town);
    }

    async addStationsToTown(townId: string, stationIds: string[]): Promise<Town>{
        const town = await this.townRepository.findOne({ id: townId });
        town.stations = [...town.stations, ...stationIds];

        return this.townRepository.save(town);
    }
}
