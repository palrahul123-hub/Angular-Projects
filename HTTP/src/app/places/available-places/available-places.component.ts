import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { PlacesContainerComponent } from "../places-container/places-container.component";
import { PlacesComponent } from "../places.component";
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, single, throwError } from 'rxjs';

@Component({
  selector: 'app-available-places',
  imports: [PlacesContainerComponent, PlacesComponent],
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css'
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isLoading=signal(false);
  error=signal('');
  private httpClient=inject(HttpClient);
  private detroyRef=inject(DestroyRef);

  ngOnInit(): void {
    this.isLoading.set(true);
    const subscription= this.httpClient.get<{places:Place[]}>('http://localhost:3000/places')
    .pipe( map((response) => response.places ),
    catchError((err) => {
      console.log(err);
      return throwError(
        () =>{
        new Error("Something Went Wrong pls contact administrator")
      })
    })
  )
    .subscribe({
      next:(response) => {
          this.places.set(response)
      },
      error:(err:Error) => {
        debugger;
          this.error.set(err.message)
      },
      complete:()=>{
        this.isLoading.set(false);
      }
    })
    

    this.detroyRef.onDestroy(() => {
        subscription.unsubscribe();
    })
  }

  onselectPalce(selectPalce:Place){
    this.httpClient.put('http://localhost:3000/user-places',{
      placeId:selectPalce.id
    })
    .subscribe(() => {
      next:(resData:any) => console.log(resData)
    })
  }
}
