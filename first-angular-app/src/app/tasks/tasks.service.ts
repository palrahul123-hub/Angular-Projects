import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class TasksServices{

private     dummyTasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]

getTasksById(Id:String){
    return this.dummyTasks.filter(r => r.userId=== Id);
}

removeTasksById(Id:string){
    this.dummyTasks= this.dummyTasks.filter(r => r.id!==Id);
}

AddNewTask(taskData:NewTaskData,Id:String){
     this.dummyTasks.push({
    id:new Date().getTime().toString(),
    userId:Id.toString(),
    title:taskData.title,
    summary:taskData.summary,
    dueDate:taskData.duedate
  })
}

}

type NewTaskData={
  title:string,
  summary:string,
  duedate:string
}