import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AddStationsToTownInput {
  @IsUUID()
  @Field(type => ID)
  townId: string;

  @IsUUID("4", { each: true })
  @Field(type => [ID])
  stationIds: string[];
}