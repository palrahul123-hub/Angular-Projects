import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";


@Component({
  selector: 'app-dashbaord-ticket',
  imports: [NewTicketComponent],
  templateUrl: './dashbaord-ticket.component.html',
  styleUrl: './dashbaord-ticket.component.css'
})
export class DashbaordTicketComponent {

}
