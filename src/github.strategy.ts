import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-github';
import { config } from 'dotenv';
import { Injectable, UnauthorizedException } from '@nestjs/common';

config({ path: ".env" });

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
    constructor(
    ) {
        super({
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK_URL,
            scope: ['public_profile'],
        });
    }
    async validate(accessToken: string, _refreshToken: string, profile: Profile) {
        if (!profile) {
            throw new UnauthorizedException();
        }
        console.log("profile =", profile.id);
        return profile;
    }
}