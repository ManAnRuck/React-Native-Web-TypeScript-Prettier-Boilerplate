interface IConfig {
  auth: {
    github: IOAuthOptions;
    facebook: IOAuthOptions;
    twitter: ITwitterOptions;
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

interface ITwitterOptions {
  consumerKey: string;
  callbackURL: string;
  consumerSecret: string;
}

interface IDb {
  name: string;
  redisUrl?: string;
}

export { IConfig, IOAuthOptions, IDb, ITwitterOptions };
