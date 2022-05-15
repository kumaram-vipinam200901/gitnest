import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  githubLogin(req) {
    if (!req.user) {
      return 'No user from GITHUB'
    }
    const { id, displayName, username, profileUrl, location, updated_at
      , } = req.user;
    return {
      message: 'User Info from GITHUB',
      info: {
        name: displayName, id: id, username: username, profileUrl: profileUrl, location: location, updated_at: updated_at
      }
    }
  }
  hello() {
    return "Hello"
  }
}
