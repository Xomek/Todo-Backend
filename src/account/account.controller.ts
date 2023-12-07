import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetSessionDto } from 'src/auth/dto/get-session.dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { AccountService } from './account.service';
import { AccountDto } from './dto/get-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@ApiTags('Аккаунт')
@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  @ApiOkResponse({ type: AccountDto })
  async getAccount(@SessionInfo() session: GetSessionDto): Promise<AccountDto> {
    console.log(session);
    return await this.accountService.getAccount(session.id);
  }

  @Put()
  @ApiOkResponse({ type: AccountDto })
  async updateAccount(@Body() dto: UpdateAccountDto): Promise<AccountDto> {
    return await this.accountService.updateAccount(1, dto);
  }
}
