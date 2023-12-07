import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PasswordService } from './auth/password.service';
import { CookieService } from './auth/cookie.service';
import { AccountModule } from './account/account.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [DbModule, AuthModule, UsersModule, AccountModule, TasksModule],
  controllers: [TasksController],
  providers: [PasswordService, CookieService, TasksService],
})
export class AppModule {}
