import * as config from 'config';
import { Router } from 'express';
import * as passport from 'passport';
import { findOAuthUser } from './handlePassportOauthStrategies';

import { Strategy as FacebookStrategy } from 'passport-facebook';

// TS Interfaces
import { IOAuthOptions } from '../../../config/types';
import OAuthUser from '../../entity/OAuthUser';
import User from '../../entity/User';
import { callbackHandler } from './callbackHandler';

// Configs
const facebookAuthConfig: IOAuthOptions = { ...config.get('auth.facebook') };
const SERVICE = 'facebook';

const router: Router = Router();

passport.use(
  new FacebookStrategy(
    { ...facebookAuthConfig, passReqToCallback: true },
    async (
      req,
      accessToken,
      refreshToken,
      profile,
      cb: (error: any, user?: any) => void,
    ) => {
      let oAuthUser = await findOAuthUser(profile);

      if (oAuthUser) {
        return cb(null, { accessToken, refreshToken, user: oAuthUser.user });
      }

      oAuthUser = new OAuthUser();
      oAuthUser.accessToken = accessToken;
      oAuthUser.refreshToken = refreshToken;
      oAuthUser.service = profile.provider;
      oAuthUser.serviceId = profile.id;
      oAuthUser.userName = profile.username;
      oAuthUser.fullName = profile.displayName;
      oAuthUser.firstName = profile.name.givenName;
      oAuthUser.lastName = profile.name.familyName;
      await oAuthUser.save();

      let user = await User.findOne(req.session!.userId, {
        relations: ['oAuthUsers'],
      });

      if (user) {
        user.oAuthUsers.push(oAuthUser);
        await user.save();
        return cb(null, { accessToken, refreshToken, user });
      }

      user = new User();
      user.username = profile.displayName;
      user.oAuthUsers = [oAuthUser];
      await user.save();

      return cb(null, { accessToken, refreshToken, user });
    },
  ),
);

router.get(
  `/auth/${SERVICE}`,
  passport.authenticate('facebook', { session: false }),
);
router.get(
  `/auth/${SERVICE}/callback`,
  passport.authenticate(SERVICE, {
    failureRedirect: '/login',
    session: false,
  }),
  callbackHandler,
);

export { router };
