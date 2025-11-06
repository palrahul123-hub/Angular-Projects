import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message$ =new BehaviorSubject<string[]>([]);
  private messages:string[]=[] //signal<string[]>([]);
  getAllMessage(){
    return   [...this.messages];
  }
  constructor() { }

  addMessage(message:string){
    this.messages=[...this.messages,message];
    this.message$.next(this.messages);
  }
}
