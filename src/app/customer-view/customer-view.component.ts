import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss'],
})
export class CustomerViewComponent implements OnInit {
  userdetails: any;
  addressDetails;
  viewshow: boolean = false;
  activetrip: any;
  completetrip: any;
  value: any;
  viewshowcomplete: boolean = false;

  constructor(private router: Router, private apiService: ApiServiceService) {}
  cususerId: any;
  ngOnInit(): void {
    this.cususerId = localStorage.getItem('userViewId')
      ? JSON.parse(localStorage.getItem('userViewId') || '')
      : '';
    this.getUserViewDetails();
  }

  userView: any;
  getUserViewDetails() {
    console.log('fd', this.cususerId);
    this.apiService
      .getListUsergetById(this.cususerId)
      .then((res) => {
        console.log(res);
        this.userdetails = res.data;
        console.log(this.userdetails);
        // console.log(this.userdetails.addressDetails[0]?.address?.street);
      })
      .catch((err) => {});
  }
  loadActiveTrips() {
    this.viewshow = true;
    this.apiService
      .getListCustomerActiveTrip(this.cususerId)
      .then((res) => {
        this.activetrip = res.data.data;
        // console.log(this.activetrip.length);
      })
      .catch((err) => {});
  }
  loadCompleteTrips() {
    this.viewshowcomplete = true;
    this.apiService
      .getListCustomerCompleteTrip(this.cususerId)
      .then((res) => {
        this.completetrip = res.data.data;
        console.log(this.completetrip);
      })
      .catch((err) => {});
  }
  searchtrip(e: any) {
    this.value = e?.target?.value;
    this.loadActiveTrips();
    this.loadCompleteTrips();
  }

  moredetails(i: any) {
    console.log(i);
    localStorage.setItem(
      'userViewTripId',
      JSON.stringify(this.activetrip?.[i]?._id)
    );
    console.log(this?.activetrip?.[i]?._id);
    this.router.navigate(['/trip_details']);
  }
}
