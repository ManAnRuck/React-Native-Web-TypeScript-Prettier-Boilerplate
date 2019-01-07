import * as config from 'config';

import * as passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github';

// TS Interfaces
import { IAuthGithub } from '../../config/types';

const githubAuthConfig: IAuthGithub = { ...config.get('auth.github') };

import { Router } from 'express';

const router: Router = Router();

passport.use(
  new GitHubStrategy(
    githubAuthConfig,
    (accessToken, refreshToken, profile, cb) => {
      console.log('GITHUB AUTH', profile);
      return cb(null, { accessToken, refreshToken });
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
  (_, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  },
);

export default router;
