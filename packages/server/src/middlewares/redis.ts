import * as config from 'config';
import * as connectRedis from 'connect-redis';
import { Router } from 'express';
import * as session from 'express-session';
import * as Redis from 'ioredis';

// Configs
const SESSION_SECRET = config.get('auth.sessionSecret');

const router: Router = Router();
const RedisStore = connectRedis(session as any);

export const redis =
  process.env.NODE_ENV === 'production'
    ? new Redis(config.get('db.redisUrl'))
    : new Redis();

router.use(
  session({
    store: new RedisStore({
      client: redis as any,
    }),
    name: 'qid',
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 7, // 7 days
    },
  } as any),
);

export default router;
