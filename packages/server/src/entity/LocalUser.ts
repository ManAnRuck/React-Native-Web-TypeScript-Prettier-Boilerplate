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
export default class LocalUser extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  public id: number;

  @Field()
  @Column({ type: 'text', unique: true })
  public email: string;

  @Field()
  @Column({ type: 'text' })
  public password: string;

  @ManyToOne(() => User, user => user.localUsers, { nullable: false })
  public user: User;
}
