import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Task 
  {
    id: string,
    userId: string,
    title: string,
    summary:string,
    dueDate: string
}

@Component({
  selector: 'app-tasktest',
  standalone:false,
  templateUrl: './tasktest.component.html',
  styleUrl: './tasktest.component.css'
})
export class TasktestComponent {
  @Input({required:true}) task?:Task
  @Output() Complete=new EventEmitter<string>()

  onCompleteTask(){
    this.Complete.emit(this.task?.id);
  }

}
