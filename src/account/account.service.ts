import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AccountDto } from './dto/get-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(private dbService: DbService) {}

  async getAccount(userId: number): Promise<AccountDto> {
    return await this.dbService.account.findUniqueOrThrow({
      where: { ownerId: userId },
    });
  }

  async updateAccount(
    userId: number,
    dto: UpdateAccountDto,
  ): Promise<AccountDto> {
    return await this.dbService.account.update({
      where: { ownerId: userId },
      data: { ...dto },
    });
  }

  async create(userId: number): Promise<AccountDto> {
    return await this.dbService.account.create({
      data: {
        ownerId: userId,
        tasksCount: 0,
        isBlockingEnabled: false,
      },
    });
  }
}
