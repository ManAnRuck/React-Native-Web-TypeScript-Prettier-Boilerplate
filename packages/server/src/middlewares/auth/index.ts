import passport from 'passport';

import { Router } from 'express';

// Strategies
import { router as FacebookRoutes } from './facebook';
import { router as GitHubRoutes } from './github';
import { router as TwitterRoutes } from './twitter';

const router: Router = Router();

router.use(passport.initialize());

// Github
router.use(GitHubRoutes);
router.use(FacebookRoutes);
router.use(TwitterRoutes);

export default router;
