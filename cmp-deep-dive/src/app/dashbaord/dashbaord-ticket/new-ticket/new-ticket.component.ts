import { Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent,ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  // @ViewChild('form') form?:ElementRef<HTMLFormElement>;
  
  //using signal

  form=viewChild<ElementRef<HTMLFormElement>>('form')

  add=output<{title:string,description:string}>()

  onSubmit(titleInput:string,remarks:string){
    this.add.emit({title:titleInput,description:remarks})
    this.form()?.nativeElement.reset();
  }
}
