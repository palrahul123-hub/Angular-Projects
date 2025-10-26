import { Component, ElementRef, inject, Inject, input, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
    host:{
      class:'control',
      '(click)':'onClick()'
    }
})
export class ControlComponent {
 label=input.required<string>();
 private el=inject(ElementRef);

 onClick(){
    console.log('fdsffd')
    console.log(this.el);
 }

}
