import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {interval,map, Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  destroyRef=inject(DestroyRef);
  customObservable$=new Observable((subscribe)=>{
    console.log('dsfdf');

    let timeExecuted=0;

    const inter= setInterval(()=>{
      if(timeExecuted > 3){
        clearInterval(inter);
        subscribe.complete();
      }  
      subscribe.next({message:'Hii Rahul Pal'})
      timeExecuted++;
    },2000);
  })
  constructor(){
    effect(() => {
      console.log(`Clicked button ${this.count()} times`)
    })
  }

  ngOnInit(): void {
    // const subscription= interval(1000).pipe(
    //   map((val) => val * 2)
    // ).subscribe({
      
    // })

    // this.destroyRef.onDestroy(() =>{
    //   subscription.unsubscribe();
    // })

    this.customObservable$.subscribe({
      next:(val)=>{
        console.log(val);
      }
    })

  const subscription=    this.count$.subscribe({
      next:(val) => console.log(val)
    })

    this.destroyRef.onDestroy(() =>{
      subscription.unsubscribe();
    })

  }
  count=signal(0);

  //Convert Signal into observablr
  count$=toObservable(this.count);

  //Convert rxjs into signal
  interval$=interval(1000);
  intervalSignal=toSignal(this.interval$,{initialValue:0})

  onClick(){
    this.count.update((val) => val + 1 )
  }
}
