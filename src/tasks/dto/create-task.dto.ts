import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Мой заголовок' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Моё описание' })
  description: string;
}
