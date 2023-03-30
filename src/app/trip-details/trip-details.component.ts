import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
})
export class TripDetailsComponent implements OnInit {
  tripId: any;

  constructor() {}

  ngOnInit(): void {
    this.tripId = localStorage.getItem('userViewTripId')
      ? JSON.parse(localStorage.getItem('userViewTripId') || '')
      : '';
  }
}
