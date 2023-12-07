import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { DeleteTaskDto } from './dto/delete-task.dto';
import { TasksService } from './tasks.service';

@ApiTags('Задачи')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getTasks() {
    return await this.tasksService.getTasks();
  }

  @Get('deleted')
  getDeletedTasks() {}

  @Post()
  async create(@Body() dto: CreateTaskDto) {
    return await this.tasksService.create(dto);
  }

  @Put()
  update() {}

  @Delete()
  async delete(@Body() dto: DeleteTaskDto) {
    return await this.tasksService.delete(dto);
  }
}
