interface IConfig {
  auth: {
    github: IOAuthOptions;
    facebook: IOAuthOptions;
    sessionSecret: string;
  };
  db: IDb;
  webUrl: string;
}

interface IOAuthOptions {
  clientID: string;
  callbackURL: string;
  clientSecret: string;
}

interface IDb {
  name: string;
  redisUrl?: string;
}

export { IConfig, IOAuthOptions, IDb };
