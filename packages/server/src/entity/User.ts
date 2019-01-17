import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import OAuthUser from './OAuthUser';

@ObjectType()
@Entity()
export default class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  public id: number;

  @Field()
  @Column({ type: 'text' })
  public username: string;

  @OneToMany(() => OAuthUser, oAuthUser => oAuthUser.user)
  public oAuthUsers: OAuthUser[];
}
