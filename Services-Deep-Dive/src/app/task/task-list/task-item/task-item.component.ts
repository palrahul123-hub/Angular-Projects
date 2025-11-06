import { Component, computed, inject, input } from '@angular/core';
import { Task, TASK_STATUS_OPTIONS, TaskStatus } from '../../task.model';
import { TasksService } from '../../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
 private taskService=inject(TasksService) 
 public taskStatusOptions=inject(TASK_STATUS_OPTIONS);
task = input.required<Task>();
  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  onChangeTaskStatus(taskId: string, status: string) {
    
    let newTask:TaskStatus='OPEN'
    
    switch (status) {
      case 'open':
        newTask='OPEN';
        break;
      case 'in-progress':
        newTask='IN_PROGRESS';
        break;
      case 'DONE':
        newTask='DONE';
        break
      default:
        break;
    }
    debugger;
    this.taskService.updateTask(taskId,newTask);
  }
}
