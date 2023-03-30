import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss'],
})
export class TripDetailsComponent implements OnInit {
  tripId: any;
  id: any;

  tripDetails: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });
    this.getTripDetails(this.id,);
  }
  getTripDetails(id: any) {
    this.apiService
      .getListTrip(id)
      .then((res) => {
        this.tripDetails = res.data.data[0];
        console.log('this.tttt', this.tripDetails);
      })
      .catch((err) => {});
  }
}
