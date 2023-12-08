import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { DeleteTaskDto } from './dto/delete-task.dto';
import { GetTasksDto } from './dto/get-tasks.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private dbService: DbService) {}

  async getTasks({ skip, take }: GetTasksDto) {
    const total = (await this.dbService.task.findMany()).length;

    const tasks = await this.dbService.task.findMany({
      skip: +skip,
      take: +take,
      orderBy: { isDone: 'asc' },
    });

    return { tasks, total };
  }

  async getTask(taskId: number) {
    return await this.dbService.task.findFirst({ where: { id: +taskId } });
  }

  async create(dto: CreateTaskDto) {
    return await this.dbService.task.create({
      data: {
        isDeleted: false,
        description: dto.description,
        title: dto.title,
      },
    });
  }

  async update(dto: UpdateTaskDto) {
    return await this.dbService.task.update({
      where: { id: dto.id },
      data: { ...dto },
    });
  }

  async delete({ id }: DeleteTaskDto) {
    return await this.dbService.task.delete({ where: { id } });
  }
}
