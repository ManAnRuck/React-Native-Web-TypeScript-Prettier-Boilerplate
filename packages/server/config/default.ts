import { IConfig } from '../src/types/types';

import * as dotenvSafe from 'dotenv-safe';

dotenvSafe.config();

const defaultConfig: IConfig = {
  auth: {
    github: {
      callbackURL: 'http://localhost:4000/auth/github/callback',
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    facebook: {
      callbackURL: 'http://localhost:4000/auth/facebook/callback',
      clientID: process.env.FACEBOOK_APP_ID!,
      clientSecret: process.env.FACEBOOK_APP_SECRET!,
    },
    twitter: {
      callbackURL: 'http://localhost:4000/auth/twitter/callback',
      consumerKey: process.env.TWITTER_CONSUMER_KEY!,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET!,
    },
    sessionSecret: process.env.SESSION_SECRET!,
  },
  db: {
    name: 'my-project-dev',
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
  },
  webUrl: 'http://localhost:3000/',
};

export default defaultConfig;
