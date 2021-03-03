import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm'
import { Station } from './station.entity';
import { CreateStationInput } from './station.input';

@Injectable()
export class StationService {
    constructor(
        @InjectRepository(Station) private stationRepository: Repository<Station>
    ) {}
    
    async getStation(id: string): Promise<Station> {
        return this.stationRepository.findOne({ id });
    }

    async getStations(): Promise<Station[]> {
        return this.stationRepository.find();
    }

    async createStation(createStationInput: CreateStationInput): Promise<Station>{
        const { name } = createStationInput;
        const station = this.stationRepository.create({
            id: uuid(),
            name
        });

        return this.stationRepository.save(station);
    }

    async getManyStations(stationIds: string[]): Promise<Station[]> {
        return this.stationRepository.find({
            where: {
                id: {
                    $in: stationIds,
                }
            }
        })
    }
}