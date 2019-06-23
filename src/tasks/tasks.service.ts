import { Injectable } from '@nestjs/common';
import { Task } from './task.module';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }
}
