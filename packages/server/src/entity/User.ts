import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import OAuthUser from './OAuthUser';
import Wishlist from './Wishlist';

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

  @Field(() => [Wishlist])
  @OneToMany(() => Wishlist, wishlist => wishlist.createdBy)
  public wishlists: Wishlist[];
}
