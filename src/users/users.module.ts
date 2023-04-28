import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { Services } from 'src/utils/types';

@Module({
  providers: [
    {
      provide: Services.USER,
      useClass: UsersService,
    },
  ],
  exports: [
    {
      provide: Services.USER,
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}
