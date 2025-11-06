import { Component, computed, inject, signal } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../task.service';
import { TASK_STATUS_OPTIONS, TaskStatusOptionProvider } from '../task.model';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers:[TaskStatusOptionProvider]
})
export class TaskListComponent {

  private taskService=inject(TasksService);
  public taskStatusOptions=inject(TASK_STATUS_OPTIONS);
  selectedFilter = signal<string>('all');
  tasks = computed(()=>{
    switch(this.selectedFilter()){
      case 'all':
        return this.taskService.allTasks();
      case 'open' :
        return this.taskService.allTasks().filter((r) => r.status=='OPEN');
      case 'in-progress' :
        return this.taskService.allTasks().filter((r) => r.status=='IN_PROGRESS');
      default :
        return this.taskService.allTasks().filter((r) => r.status=='DONE')  
    }
     
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
