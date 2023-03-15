import { Injectable } from '@nestjs/common';
import { SerializeUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'abc',
      password: 'abc',
    },
    {
      username: 'def',
      password: 'def',
    },
    {
      username: 'ghi',
      password: 'ghi',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializeUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
