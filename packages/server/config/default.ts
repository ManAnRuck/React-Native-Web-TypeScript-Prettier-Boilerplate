import { IConfig } from './types';

const defaultConfig: IConfig = {
  auth: {
    github: {
      callbackURL: 'http://localhost:4000/auth/github/callback',
      clientID: '08c92a21716b8ac1a0df',
      clientSecret: '4fad2fda515d0fa031ff5aad959bba79ff616202',
    },
  },
  db: {
    name: 'great-gift-dev',
  },
};

export default defaultConfig;
