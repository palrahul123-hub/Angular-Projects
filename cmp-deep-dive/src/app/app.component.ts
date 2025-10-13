import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { DashbaordServerComponent } from './dashbaord/dashbaord-server/dashbaord-server.component';
import { DashbaordTarfficComponent } from './dashbaord/dashbaord-tarffic/dashbaord-tarffic.component';
import { DashbaordTicketComponent } from './dashbaord/dashbaord-ticket/dashbaord-ticket.component';
import { DashboardItemComponent } from './dashbaord/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DashbaordServerComponent, DashbaordTarfficComponent, DashbaordTicketComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  
}
