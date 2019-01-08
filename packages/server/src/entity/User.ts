import { Field, ID, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class User extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  public id: number;

  @Field()
  @Column({ type: 'text' })
  public firstName: string;

  @Field()
  @Column({ type: 'text' })
  public lastName: string;

  @Field(type => Int)
  @Column()
  public age: number;
}
