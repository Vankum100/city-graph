import { Entity,ObjectIdColumn, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Station {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

 
}