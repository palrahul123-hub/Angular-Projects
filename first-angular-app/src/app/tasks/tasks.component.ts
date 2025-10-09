import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { TasksServices } from './tasks.service';

type NewTask={
  title:string,
  summary:string,
  duedate:string
}

@Component({
  selector: 'app-task',
  standalone:false,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'] 
  
})
export class TaskComponents {
  @Input({required:true}) Id!:String;
  @Input({required:true}) name!:String;
  isAddTask:boolean=false;
 private taskService;
 
 constructor(taskService:TasksServices){
  this.taskService=taskService;
 }

get selectedUserTasks(){
  return this.taskService.getTasksById(this.Id);
}

DeleteTask(id:string){
  this.taskService.removeTasksById(id)
}
onAddTask(){
  this.isAddTask=true;  
}

onCancelTask(){
  this.isAddTask=false;  
}


onAddNewTask(taskData:NewTask){
  this.isAddTask=false;  
  this.taskService.AddNewTask(taskData,this.Id);
}

}
