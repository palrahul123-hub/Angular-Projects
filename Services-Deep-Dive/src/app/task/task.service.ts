import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({
    providedIn:'root'
})

export class TasksService{
 private tasks=signal<Task[]>([]);

 allTasks=this.tasks.asReadonly();

 AddTask(taskData:{title:string,description:string}){
    const newTask:Task={
        ...taskData,
        id:Math.random().toString(),
        status:'OPEN'
    }

    this.tasks.update((oldData)=> [...oldData,newTask] )
 }

 updateTask(taskId:string,newStatus:TaskStatus){
    this.tasks.update((oldData) => oldData.map((task)=> task.id==taskId ? {...task,status:newStatus}:task));
 }
}