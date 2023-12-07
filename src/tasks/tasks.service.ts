import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { DeleteTaskDto } from './dto/delete-task.dto';

@Injectable()
export class TasksService {
  constructor(private dbService: DbService) {}

  async getTasks() {
    return await this.dbService.task.findMany();
  }

  getDeletedTask() {}

  async create(dto: CreateTaskDto) {
    return await this.dbService.task.create({
      data: {
        isDeleted: false,
        description: dto.description,
        title: dto.title,
      },
    });
  }

  update() {}

  async delete({ id }: DeleteTaskDto) {
    return await this.dbService.task.delete({ where: { id } });
  }
}
