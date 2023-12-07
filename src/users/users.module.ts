import { Module } from '@nestjs/common';
import { AccountModule } from 'src/account/account.module';
import { DbModule } from 'src/db/db.module';
import { UsersService } from './users.service';

@Module({
  imports: [DbModule, AccountModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
