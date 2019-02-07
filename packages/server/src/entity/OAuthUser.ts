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
export default class OAuthUser extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  public id: number;

  @Field()
  @Column({ type: 'text' })
  public service: string;

  @Field()
  @Column({ type: 'text' })
  public serviceId: string;

  @Field()
  @Column({ type: 'text' })
  public accessToken: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  public refreshToken?: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  public email?: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  public userName?: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  public firstName?: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  public lastName?: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  public fullName?: string;

  @ManyToOne(() => User, user => user.oAuthUsers)
  public user: User;
}
