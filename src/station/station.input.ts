import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateStationInput {
  @MinLength(1)
  @Field()
  name: string;

  
}