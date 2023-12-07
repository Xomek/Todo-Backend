import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    example: 'user@mail.ru',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123123!_' })
  @IsNotEmpty()
  password: string;
}
