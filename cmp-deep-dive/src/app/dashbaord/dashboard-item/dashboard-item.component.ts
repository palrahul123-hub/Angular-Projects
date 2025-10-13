import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
 @Input({required:true}) src!:string
 @Input({required:true}) title!:string
 @Input({required:true}) alt!:string
}
