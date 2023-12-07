import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DeleteTaskDto {
  @ApiProperty({ example: 'Мой заголовок' })
  @IsNotEmpty()
  id: number;
}
