import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './User';

@ObjectType()
@Entity()
export default class Wishlist extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  public id: number;

  @Field()
  @Column({ type: 'text' })
  public title: string;

  @Field()
  @Column({ type: 'text' })
  public description: string;

  @Field()
  @Column({ type: 'date' })
  public date: string;

  @Field(() => User)
  @ManyToOne(() => User, user => user.wishlists)
  public createdBy: User;
}
