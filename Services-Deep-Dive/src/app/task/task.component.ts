import { Component } from '@angular/core';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'app-task',
  imports: [NewTaskComponent, TaskListComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

}
