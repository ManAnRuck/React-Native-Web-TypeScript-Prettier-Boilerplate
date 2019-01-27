import { Field, InputType } from 'type-graphql';

@InputType({ description: 'New wishlist data' })
export class AddWishlistInput {
  @Field()
  public title: string;

  @Field()
  public description: string;

  @Field()
  public date: string;
}
