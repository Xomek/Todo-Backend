import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { DeleteTaskDto } from './dto/delete-task.dto';
import { GetTasksDto } from './dto/get-tasks.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';

@ApiTags('Задачи')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get(':skip/:take')
  async getTasks(@Param() dto: GetTasksDto) {
    return await this.tasksService.getTasks(dto);
  }

  @Get(':id')
  async getTask(@Param() { id }: { id: number }) {
    return await this.tasksService.getTask(id);
  }

  @Post()
  async create(@Body() dto: CreateTaskDto) {
    return await this.tasksService.create(dto);
  }

  @Put()
  async update(@Body() dto: UpdateTaskDto) {
    return await this.tasksService.update(dto);
  }

  @Delete()
  async delete(@Body() dto: DeleteTaskDto) {
    return await this.tasksService.delete(dto);
  }
}
