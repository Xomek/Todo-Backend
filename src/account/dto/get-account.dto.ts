import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class AccountDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  tasksCount: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isBlockingEnabled: boolean;
}
