import * as passport from 'passport';

import { Router } from 'express';

// Strategies
import { router as FacebookRoutes } from './facebook';
import { router as GitHubRoutes } from './github';

const router: Router = Router();

router.use(passport.initialize());

// Github
router.use(GitHubRoutes);
router.use(FacebookRoutes);

export default router;
