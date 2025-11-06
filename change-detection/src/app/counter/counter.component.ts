import { Component, inject, NgZone, OnInit, signal } from '@angular/core';
import { InfoMessageComponent } from "../info-message/info-message.component";

@Component({
  selector: 'app-counter',
  imports: [InfoMessageComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
 private zone=inject(NgZone); 
count = signal(0);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.count.set(0);
    },4000);

    this.zone.runOutsideAngular(()=>{
      setTimeout(() =>{
      console.log('Timout expired')
    },4000);
    });

    
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
