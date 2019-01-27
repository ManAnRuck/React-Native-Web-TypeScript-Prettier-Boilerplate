import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import User from '../../entity/User';
import Wishlist from '../../entity/Wishlist';
import { IMyContext } from '../../types/MyContext';
import { AddWishlistInput } from './wishlistInputs/addWishlist';

@Resolver(() => Wishlist)
export default class WishlistResolver {
  @Query(() => [Wishlist])
  public async wishlists() {
    return Wishlist.find({ relations: ['createdBy'] });
  }

  @Mutation(() => Wishlist)
  public async addWishlist(
    @Arg('data') newWishlistData: AddWishlistInput,
    @Ctx() ctx: IMyContext,
  ): Promise<Wishlist> {
    const { userId } = ctx.req.session!;

    const user = await User.findOne(userId);
    const wishlist = new Wishlist();
    wishlist.title = newWishlistData.title;
    wishlist.description = newWishlistData.description;
    wishlist.date = newWishlistData.date;
    wishlist.createdBy = user!;
    await wishlist.save();
    return wishlist;
  }
}
