import { IConfig } from './types';
require('dotenv-safe').config();

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
    redisUrl: process.env.REDIS_URL,
  },
  webUrl: 'http://localhost:3000/',
};

export default defaultConfig;
