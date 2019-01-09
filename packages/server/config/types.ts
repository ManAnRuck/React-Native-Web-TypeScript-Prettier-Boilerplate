interface IConfig {
  auth: {
    github: IAuthGithub;
    sessionSecret: string;
  };
  db: IDb;
}

interface IAuthGithub {
  clientID: string;
  callbackURL: string;
  clientSecret: string;
}

interface IDb {
  name: string;
  redisUrl?: string;
}

export { IConfig, IAuthGithub, IDb };
