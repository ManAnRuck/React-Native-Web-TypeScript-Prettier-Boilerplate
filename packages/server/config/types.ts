interface IConfig {
  auth: {
    github: IAuthGithub;
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
}

export { IConfig, IAuthGithub, IDb };
