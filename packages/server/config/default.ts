import { IConfig } from './types';
require('dotenv-safe').config();

const defaultConfig: IConfig = {
  auth: {
    github: {
      callbackURL: 'http://localhost:4000/auth/github/callback',
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  db: {
    name: 'great-gift-dev',
  },
};

export default defaultConfig;
