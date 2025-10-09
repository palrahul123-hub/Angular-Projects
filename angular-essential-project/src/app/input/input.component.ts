import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Output() OnCalculate=new EventEmitter<{initialInvestment:number,
    duration:number,expectedReturn:number,annualInvestment:number}>()
  intialinvestment='0';
  annualinvestment='0';
  expectedreturn='5';
  duration='10';

  SubmitUser(){
    this.OnCalculate.emit({
      initialInvestment:+this.intialinvestment,
    duration:+this.duration,expectedReturn:+this.expectedreturn,annualInvestment:+this.annualinvestment
    });
  }
}
