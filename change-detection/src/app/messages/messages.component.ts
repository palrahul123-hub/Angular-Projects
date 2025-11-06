import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NewMessageComponent } from "./new-message/new-message.component";
import { MessageListComponent } from "./message-list/message-list.component";

@Component({
  selector: 'app-messages',
  imports: [NewMessageComponent, MessageListComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MessagesComponent {
 messages = signal<string[]>([]);

  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }

  // onAddMessage(message: string) {
  //   this.messages.update((oldMessages) => [...oldMessages, message]);
  // }
}
