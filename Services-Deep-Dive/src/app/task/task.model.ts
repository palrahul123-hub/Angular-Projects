import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type TaskStatusoptions={
  value:'open'|'in-progress'|'done',
  taskStatus:TaskStatus,
  text:string
}[];

export const TASK_STATUS_OPTIONS=new InjectionToken<TaskStatusoptions>('task-status-options')

export const TaskStatusoptions:TaskStatusoptions=[{
  taskStatus:'OPEN',
  value:'open',
  text:'open'
},
{
  taskStatus:'IN_PROGRESS',
  value:'in-progress',
  text:'in-progress'
},
{
  taskStatus:'DONE',
  value:'done',
  text:'done'
}
]

export const TaskStatusOptionProvider:Provider={
   provide : TASK_STATUS_OPTIONS,
   useValue:TaskStatusoptions
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}