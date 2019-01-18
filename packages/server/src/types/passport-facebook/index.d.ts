// Type definitions for passport-facebook 2.1
// Project: https://github.com/jaredhanson/passport-facebook
// Definitions by: James Roland Cabresos <https://github.com/staticfunction>, Lucas Acosta <https://github.com/lucasmacosta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import passport = require('passport');
import express = require('express');

export interface Profile extends passport.Profile {
    id: string;
    displayName: string;
    gender?: string;
    ageRange?: {
        min: number;
        max?: number;
    };
    profileUrl?: string;
    username?: string;
    birthday: string;
    name: {
        familyName?: string;
        givenName?: string;
        middleName?: string;
    }

    _raw: string;
    _json: any;
}

export interface AuthenticateOptions extends passport.AuthenticateOptions {
    authType?: string;
}

export interface StrategyOptionBase {
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    scopeSeparator?: string;
    enableProof?: boolean;
    profileFields?: string[];
}

export interface StrategyOption extends StrategyOptionBase {
    passReqToCallback?: false;
}

export interface StrategyOptionWithRequest extends StrategyOptionBase {
    passReqToCallback: true;
}

export type VerifyFunction =
    (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;

export type VerifyFunctionWithRequest =
(req: express.Request, accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void;

export class Strategy extends passport.Strategy {
    constructor(options: StrategyOption, verify: VerifyFunction);
    constructor(options: StrategyOptionWithRequest, verify: VerifyFunctionWithRequest);

    name: string;
    authenticate(req: express.Request, options?: passport.AuthenticateOptions): void;
}
