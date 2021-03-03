import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength,  IsUUID, IsString } from 'class-validator';

@InputType()
export class CreateTownInput {
  @MinLength(1)
  @Field()
  name: string;

 

  @IsString()
  @Field()
  telephone: string;

  @IsUUID("4", { each: true })
  @Field(() => [ID], { defaultValue: [] })
  stations: string[];
}