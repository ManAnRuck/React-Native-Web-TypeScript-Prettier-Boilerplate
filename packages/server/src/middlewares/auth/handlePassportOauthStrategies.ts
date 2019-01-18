import { Request } from 'express';
import { Profile as FacebookProfile } from 'passport-facebook';
import { Profile as GitHubProfile } from 'passport-github';
import OAuthUser from '../../entity/OAuthUser';
import User from '../../entity/User';

export const findOAuthUser = (profile: FacebookProfile | GitHubProfile) => {
  return OAuthUser.findOne(
    {
      service: profile.provider,
      serviceId: profile.id,
    },
    {
      relations: ['user'],
    },
  );
};

const handlePassportOauthStrategies = async (
  req: Request,
  accessToken: string,
  refreshToken: string,
  profile: FacebookProfile | GitHubProfile,
  cb: (error: any, user?: any) => void,
) => {
  let oAuthUser = await OAuthUser.findOne(
    {
      service: profile.provider,
      serviceId: profile.id,
    },
    {
      relations: ['user'],
    },
  );

  if (oAuthUser) {
    return cb(null, { accessToken, refreshToken, user: oAuthUser.user });
  }

  oAuthUser = new OAuthUser();
  oAuthUser.accessToken = accessToken;
  oAuthUser.refreshToken = refreshToken;
  oAuthUser.service = profile.provider;
  oAuthUser.serviceId = profile.id;
  oAuthUser.userName = profile.username;
  oAuthUser.fullName = profile.displayName;
  await oAuthUser.save();

  let user = await User.findOne(req.session!.userId, {
    relations: ['oAuthUsers'],
  });

  if (user) {
    user.oAuthUsers.push(oAuthUser);
    await user.save();
    return cb(null, { accessToken, refreshToken, user });
  }

  user = new User();
  user.username = profile.displayName;
  user.oAuthUsers = [oAuthUser];
  await user.save();

  return cb(null, { accessToken, refreshToken, user });
};

export default handlePassportOauthStrategies;
