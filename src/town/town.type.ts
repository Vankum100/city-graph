import { Field, ID, ObjectType } from "@nestjs/graphql";
import { StationType } from "src/station/station.type";

@ObjectType('Town')
export class TownType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  telephone: string;

 

  @Field(type => [StationType])
  stations: string[];
}