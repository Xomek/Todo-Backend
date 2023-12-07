import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(
    private dbService: DbService,
    private accountService: AccountService,
  ) {}

  async findByEmail(email: string) {
    return await this.dbService.user.findFirst({ where: { email } });
  }

  async create(email: string, hash: string, salt: string) {
    const user = await this.dbService.user.create({
      data: { email, hash, salt },
    });

    await this.accountService.create(user.id);

    return user;
  }
}
