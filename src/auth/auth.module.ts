import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Services } from 'src/utils/types';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
