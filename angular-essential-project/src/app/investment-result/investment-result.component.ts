import { Component, Input, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
 @Input() results?:{
  year: number,
      interest: number  ,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest:number,
      totalAmountInvested: number
 }[];
}
