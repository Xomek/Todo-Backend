import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateAccountDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isBlockingEnabled?: boolean;
}
