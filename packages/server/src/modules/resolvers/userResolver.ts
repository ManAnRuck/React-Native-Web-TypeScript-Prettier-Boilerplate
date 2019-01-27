import { Ctx, Info, Mutation, Query, Resolver } from 'type-graphql';

// Models
import User from '../../entity/User';

// Typescript
import { GraphQLResolveInfo } from 'graphql';
import { IMyContext } from '../../types/MyContext';

@Resolver(() => User)
export default class UserResolver {
  @Query(() => [User])
  public async users(@Info() info: GraphQLResolveInfo) {
    console.log('INFO', info.fieldNodes[0].selectionSet!.selections);
    return User.find({ relations: ['oAuthUsers'] });
  }

  @Query(() => User, { nullable: true })
  public async me(
    @Ctx()
    ctx: IMyContext,
  ) {
    const { userId } = ctx.req.session!;

    return userId
      ? User.findOne(userId, { relations: ['oAuthUsers', 'wishlists'] })
      : null;
  }

  @Mutation(() => Boolean)
  public async logout(
    @Ctx()
    ctx: IMyContext,
  ) {
    return new Promise(res =>
      ctx.req.session!.destroy(err => {
        console.log(err);
        ctx.res.clearCookie('qid');
        res(!!err);
      }),
    );
  }
}
