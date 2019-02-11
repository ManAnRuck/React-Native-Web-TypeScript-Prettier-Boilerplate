import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import LocalUser from './LocalUser';
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

  @Field(() => [OAuthUser])
  @OneToMany(() => OAuthUser, oAuthUser => oAuthUser.user)
  public oAuthUsers: OAuthUser[];

  @Field(() => [LocalUser])
  @OneToMany(() => LocalUser, localUser => localUser.user)
  public localUsers: LocalUser[];
}
