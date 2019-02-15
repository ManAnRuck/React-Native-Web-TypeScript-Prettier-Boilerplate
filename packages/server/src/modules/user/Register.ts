import bcrypt from 'bcryptjs';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

// Models
import LocalUser from '../../entity/LocalUser';
import User from '../../entity/User';

// Typescript
import { IMyContext } from '../../types/MyContext';
import { AuthenticationError } from 'apollo-server';

@Resolver(() => User)
export default class RegisterResolver {
  @Mutation(() => User)
  public async register(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() ctx: IMyContext,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    // get user if there is an active session
    let user = await User.findOne(
      { id: ctx.req.session!.userId },
      {
        relations: ['localUsers'],
      },
    );

    // search for existing user, login or thorw an error
    let localUser = await LocalUser.findOne(
      {
        email,
      },
      {
        relations: ['user'],
      },
    ).then(lu => {
      if (lu && bcrypt.compareSync(password, lu.password)) {
        return lu;
      } else if (lu) {
        throw new AuthenticationError('your login data are incorrect');
      }
      return null;
    });

    if (localUser) {
      user = localUser.user;
    }

    if (!user) {
      user = new User();
      user.username = email;
      await user.save();
    }

    // set session
    ctx.req.session!.userId = user.id;

    if (!localUser) {
      localUser = LocalUser.create();
      localUser.email = email;
      localUser.password = hashedPassword;
      localUser.user = user;
      await localUser.save();
    }

    return user;
  }
}
