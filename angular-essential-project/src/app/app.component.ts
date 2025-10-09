import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { InputComponent } from "./input/input.component";



@Component({
  selector: 'app-root',
  imports: [HeaderComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-essential-project';

  calculateInvestmentResults(investment:{initialInvestment:number,
    duration:number,expectedReturn:number,annualInvestment:number}) {
  const annualData = [];
  let investmentValue = investment.initialInvestment;

  for (let i = 0; i < investment.duration ; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (investment.expectedReturn / 100);
    investmentValue += interestEarnedInYear + investment.annualInvestment ;
    const totalInterest =
     investmentValue  - investment.annualInvestment  * year - investment.initialInvestment ;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: investment.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: investment.initialInvestment  + investment.annualInvestment  * year,
    });

    console.log(annualData)

  }

  return annualData;
}

}
