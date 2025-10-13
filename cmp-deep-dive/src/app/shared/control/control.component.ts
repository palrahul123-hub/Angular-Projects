import { Component, input, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None // These Property is used for apply css on global if there is ng-content projection , becuase ng-content is placeholder because of these css is not applying
})
export class ControlComponent {
 label=input.required<string>();

}
