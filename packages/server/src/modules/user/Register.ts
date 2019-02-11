import * as bcrypt from 'bcryptjs';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

// Models
import LocalUser from '../../entity/LocalUser';
import User from '../../entity/User';

// Typescript
import { IMyContext } from '../../types/MyContext';

@Resolver(() => User)
export default class RegisterResolver {
  @Mutation(() => User)
  public async register(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() ctx: IMyContext,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    let user = await User.findOne(ctx.req.session!.userId, {
      relations: ['localUsers'],
    });

    if (!user) {
      user = new User();
      user.username = email;
      await user.save();
    }

    const localUser = LocalUser.create();
    localUser.email = email;
    localUser.password = hashedPassword;
    localUser.user = user;
    await localUser.save();

    ctx.req.session!.userId = user.id;

    return user;
  }
}
