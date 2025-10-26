import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketComponent } from './ticket/ticket.component';
import { Ticket } from './ticket/ticket.model';
@Component({
  selector: 'app-dashbaord-ticket',
  imports: [NewTicketComponent,TicketComponent],
  templateUrl: './dashbaord-ticket.component.html',
  styleUrl: './dashbaord-ticket.component.css'
})
export class DashbaordTicketComponent {

  tickets:Ticket[]=[];

  onAdd(ticketData:{title:string,description:string}){
    const ticket:Ticket={
      title:ticketData.title,
      description:ticketData.description,
      id: Math.random().toString(),
      status:'open'
    }
    this.tickets.push(ticket)

  }

  onClose(id:string){
    const ticket=this.tickets.map((obj)=>{
      if(obj.id===id){
        return {...obj,status:'close'}
      }
      return obj;
    })
  }

}
