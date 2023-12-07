import { ApiProperty } from '@nestjs/swagger';

export class GetTasksDto {
  @ApiProperty()
  skip: number;

  @ApiProperty()
  take: number;
}
