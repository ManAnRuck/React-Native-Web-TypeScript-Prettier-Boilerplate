import config from 'config';
import { RequestHandler } from 'express';

export const callbackHandler: RequestHandler = (req: any, res) => {
  req.session.userId = req.user.user.id;
  req.session.accessToken = req.user.accessToken;
  req.session.refreshToken = req.user.refreshToken;

  // Successful authentication, redirect home.
  res.redirect(config.get('webUrl'));
};
