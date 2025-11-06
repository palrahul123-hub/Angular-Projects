import { ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-message-list',
  imports: [AsyncPipe],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent  {
//  messages = input.required<string[]>();
// private cdref=inject(ChangeDetectorRef);
// private destroyRef=inject(DestroyRef)
private messageService=inject(MessageService);
message$=this.messageService.message$;
messages:string[]=[];

// get messages(){
//  return this.messageService.getAllMessage();
// }

// use rxjs instead of cdref for change detection use aync in template
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }

  // ngOnInit(): void {
  //   const subscription= this.messageService.message$.subscribe((messages)=>{
  //      this.messages=messages;
  //      this.cdref.markForCheck(); 
  //   })

  //   // this.destroyRef(()=>{
  //   //   subscription.unsubscribe();
  //   // })
  // }


}
