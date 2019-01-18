import * as config from 'config';
import { Router } from 'express';
import * as passport from 'passport';
import handlePassportOauthStrategies from './handlePassportOauthStrategies';

import { Strategy as GitHubStrategy } from 'passport-github';

// TS Interfaces
import { IOAuthOptions } from '../../../config/types';
import { callbackHandler } from './callbackHandler';

// Configs
const githubAuthConfig: IOAuthOptions = { ...config.get('auth.github') };
const SERVICE = 'github';

const router: Router = Router();

passport.use(
  new GitHubStrategy(
    { ...githubAuthConfig, passReqToCallback: true },
    handlePassportOauthStrategies,
  ),
);

router.get(
  `/auth/${SERVICE}`,
  passport.authenticate('github', { session: false }),
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
