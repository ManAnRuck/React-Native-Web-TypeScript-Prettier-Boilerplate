import * as config from 'config';
import * as passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github';

// TS Interfaces
import { IAuthGithub } from '../../config/types';

// Configs
const githubAuthConfig: IAuthGithub = { ...config.get('auth.github') };

import { Router } from 'express';
import OAuthUser from '../entity/OAuthUser';
import User from '../entity/User';

const router: Router = Router();

const SERVICE = 'github';

passport.use(
  new GitHubStrategy(
    { ...githubAuthConfig, passReqToCallback: true },
    async (req, accessToken, refreshToken, profile, cb) => {
      let oAuthUser = await OAuthUser.findOne(
        {
          service: SERVICE,
          serviceId: profile.id,
        },
        {
          relations: ['user'],
        },
      );

      if (oAuthUser) {
        return cb(null, { accessToken, refreshToken, user: oAuthUser.user });
      }
      oAuthUser = await OAuthUser.create({
        accessToken,
        refreshToken,
        service: 'github',
        serviceId: profile.id,
        userName: profile.username,
        fullName: profile.displayName,
      }).save();

      let user = await User.findOne(req.session!.userId, {
        relations: ['oAuthUsers'],
      });
      if (user) {
        user.oAuthUsers.push(oAuthUser);
        await user.save();
        return cb(null, { accessToken, refreshToken, user });
      }

      user = await User.create({
        username: profile.username,
        oAuthUsers: [oAuthUser],
      }).save();
      return cb(null, { accessToken, refreshToken, user });
    },
  ),
);

router.use(passport.initialize());

/**
 * GitHub Authentification
 */
router.get('/auth/github', passport.authenticate('github', { session: false }));
router.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/login',
    session: false,
  }),
  (req: any, res) => {
    req.session.userId = req.user.user.id;
    req.session.accessToken = req.user.accessToken;
    req.session.refreshToken = req.user.refreshToken;
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/');
  },
);

export default router;
