import { Component, ElementRef, viewChild } from '@angular/core';
import { TasksService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  private taskService:TasksService
constructor(private tservice:TasksService) {
  this.taskService=this.tservice;
  
}
private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  onAddTask(title: string, description: string) {
    debugger;
    this.taskService.AddTask({title:title,description:description})
    this.formEl()?.nativeElement.reset();
  }
}
