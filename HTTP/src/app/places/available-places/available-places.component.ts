import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { PlacesContainerComponent } from "../places-container/places-container.component";
import { PlacesComponent } from "../places.component";
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-available-places',
  imports: [PlacesContainerComponent, PlacesComponent],
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css'
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private httpClient=inject(HttpClient);
  private detroyRef=inject(DestroyRef);

  ngOnInit(): void {
    const subscription= this.httpClient.get<{places:Place[]}>('http://localhost:300/places').subscribe({
      next:(resData) => {
          console.log(resData);
      }
    })

    this.detroyRef.onDestroy(() => {
        subscription.unsubscribe();
    })
  }
}
