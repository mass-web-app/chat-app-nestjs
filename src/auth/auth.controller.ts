import {
  Controller,
  Inject,
  Post,
  Get,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Routes, Services } from '../utils/types';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CretaeUser.dtos';
import { IUserService } from 'src/users/user';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private AuthService: IAuthService,
    @Inject(Services.USER) private userService: IUserService,
  ) {}

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    this.userService.createUser();
  }

  //   @Post('login')
  //   login() {}

  //   @Get('status')
  //   getStatus() {}

  //   @Post('logout')
  //   logout() {}
}
