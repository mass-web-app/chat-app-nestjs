import { Inject } from '@nestjs/common';
import { IAuthService } from './auth';
import { Services } from 'src/utils/types';
import { IUserService } from 'src/users/user';

export class AuthService implements IAuthService {
  constructor() {}
  validateUser() {}
}
