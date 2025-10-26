import { Component, Input, output, signal } from '@angular/core';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-ticket',
  imports: [NewTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  @Input({required:true})  data?:Ticket
  detailsVisible=signal(false);
  close=output();

  onToggledetails(){
    // this.detailsVisible.set(!this.detailsVisible()) 
    this.detailsVisible.update((prevValue)=>
      !prevValue
    )
  }

  onClose(){
    this.close.emit()
  }

}

