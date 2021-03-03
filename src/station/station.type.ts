import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('Station')
export class StationType {
  @Field()
  id: string;

  @Field()
  name: string;
  
}