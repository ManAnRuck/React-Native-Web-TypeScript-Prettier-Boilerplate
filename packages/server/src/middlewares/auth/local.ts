import { Router } from 'express';
import * as passport from 'passport';

import { Strategy as LocalStrategy } from 'passport-local';

import LocalUser from '../../entity/LocalUser';
import User from '../../entity/User';

const router: Router = Router();

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
      let localUser = await LocalUser.findOne(
        {
          email,
          password,
        },
        {
          relations: ['user'],
        },
      );

      if (localUser) {
        return done(null, { user: localUser.user });
      }

      localUser = new LocalUser();
      localUser.email = email;
      localUser.password = password;
      await localUser.save();

      let user = await User.findOne(req.session!.userId, {
        relations: ['localUsers'],
      });

      if (user) {
        user.localUsers.push(localUser);
        await user.save();
        return done(null, { user });
      }

      user = new User();
      user.username = email;
      user.localUsers = [localUser];
      await user.save();

      return done(null, { user });
    },
  ),
);

export { router };
