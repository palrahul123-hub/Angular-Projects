import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { TasksServices } from '../tasks.service';



@Component({
  selector: 'app-addtask',
  standalone:false,
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Input({required:true}) Id!:String;
  @Output() Cancel=new EventEmitter();
  
  private taskService

  constructor(taskService:TasksServices){
    this.taskService=taskService;
  }

  enteredtitle='';
  enteredsummary='';
  enteredduedate='';
  

  onCancel(){
    this.Cancel.emit();
  }

  onSubmit(){

    

    this.taskService.AddNewTask({
      title:this.enteredtitle,
      summary:this.enteredsummary,
      duedate:this.enteredduedate
    },this.Id)

    this.Cancel.emit();
  }

}
