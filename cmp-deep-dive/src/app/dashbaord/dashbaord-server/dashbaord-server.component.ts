import { Component, OnInit,OnDestroy, Inject ,DestroyRef} from '@angular/core';


@Component({
  selector: 'app-dashbaord-server',
  imports: [],
  templateUrl: './dashbaord-server.component.html',
  styleUrl: './dashbaord-server.component.css'
})
export class DashbaordServerComponent implements OnInit,OnDestroy {
currentStatus: 'online' | 'offline' | 'unknown' = 'online';

private interval?:ReturnType<typeof setInterval>;
private deestroyRef=Inject(DestroyRef)
constructor(){
  
}

ngOnInit(){
  const intervaltest = setInterval(() =>  {
    const rnd=Math.random();

      if(rnd < 0.5){
          this.currentStatus='online'
      }
      else if (rnd < 0.9){
        this.currentStatus='offline'
      }
      else{
        this.currentStatus='unknown'
      }

  },5000);

  this.deestroyRef.OnDestroy(()=>{
    clearTimeout(intervaltest);
  })

}

ngOnDestroy(): void {
  clearTimeout(this.interval);  
}

}
