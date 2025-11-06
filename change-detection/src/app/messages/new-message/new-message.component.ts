import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-new-message',
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NewMessageComponent {
    // add = output<string>();
    private messageServcies=inject(MessageService)
  enteredText =''// signal('');

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    // this.add.emit(this.enteredText());
    this.messageServcies.addMessage(this.enteredText);
    // this.enteredText.set('');
    this.enteredText=''
  }
}
