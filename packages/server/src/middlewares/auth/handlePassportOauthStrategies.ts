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
  oAuthUser = await OAuthUser.create({
    accessToken,
    refreshToken,
    service: profile.provider,
    serviceId: profile.id,
    userName: profile.username,
    fullName: profile.displayName,
  }).save();

  let user = await User.findOne(req.session!.userId, {
    relations: ['oAuthUsers'],
  });

  if (user) {
    user.oAuthUsers.push(oAuthUser);
    await user.save();
    return cb(null, { accessToken, refreshToken, user });
  }

  user = await User.create({
    username: profile.username,
    oAuthUsers: [oAuthUser],
  }).save();
  return cb(null, { accessToken, refreshToken, user });
};

export default handlePassportOauthStrategies;
