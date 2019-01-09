import { IConfig } from './types';
require('dotenv-safe').config();

const defaultConfig: IConfig = {
  auth: {
    github: {
      callbackURL: 'http://localhost:4000/auth/github/callback',
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    sessionSecret: process.env.SESSION_SECRET!,
  },
  db: {
    name: 'great-gift-dev',
    redisUrl: process.env.REDIS_URL,
  },
};

export default defaultConfig;
