import * as config from 'config';

import * as passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github';

// TS Interfaces
import { IAuthGithub } from '../../config/types';

const githubAuthConfig: IAuthGithub = { ...config.get('auth.github') };

import { Router } from 'express';
import User from '../entity/User';

const router: Router = Router();

passport.use(
  new GitHubStrategy(
    githubAuthConfig,
    async (accessToken, refreshToken, profile, cb) => {
      let user = await User.findOne({ where: { githubId: profile.id } });
      if (!user) {
        user = await User.create({
          githubId: profile.id,
          username: profile.username,
        }).save();
      }
      cb(null, { user, accessToken, refreshToken });
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
    res.redirect('/');
  },
);

export default router;
