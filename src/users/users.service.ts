import { Injectable } from '@nestjs/common';
import { Role } from '../enums/role.enum';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
  role: Role;
  // role: Role[] // it will be used for assigning multiple roles to user
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Zaid',
      username: 'zaid',
      password: '123456', // use bcrypt to hash password
      role: Role.Admin,
    },
    {
      id: 2,
      name: 'Zain',
      username: 'zain',
      password: '123456', // use bcrypt to hash password
      role: Role.User,
    },
  ];

  findOne(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }
}
